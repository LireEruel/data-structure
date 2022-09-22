<script>
  import { writable } from "svelte/store";
  import Bar from "../components/Bar.svelte";
  const speedFactor = writable(localStorage.getItem("speedFactor") || 0);
  speedFactor.subscribe((speed) =>
    localStorage.setItem("speedFactor", speed.toString())
  );
  let numOfBars = 100;
  let targetArray = new Array(numOfBars);
  let heightFactor = 5;

  let targetBar = -1;
  let isSorting = false;
  let pivotBar = -1;
  export let algorithm;

  for (let i = 0; i < numOfBars; i++) {
    targetArray[i] = i + 1;
  }
  mixButtonClick();
  async function sortButtonClick() {
    if (isSorting) return; // sorting함수가 2개가 동시에 동작하지 않도록 수정
    isSorting = true;
    switch (algorithm) {
      case "bubble":
        await bubbleSort();
        break;
      case "insertion":
        await insertionSort();
        break;
      case "selection":
        await selectionSort();
        break;
      case "merge":
        await mergeSort(0, numOfBars - 1);
        break;
      case "quick":
        await quickSort(0, numOfBars - 1);
        break;
      case "heap":
        await heapSort();
        break;
      default:
        break;
    }

    isSorting = false;
    targetArray = targetArray;
  }

  //버블 정렬
  async function bubbleSort() {
    let i, j;
    isSorting = true;
    //array의 요소 수
    for (i = 0; i < numOfBars; i++) {
      for (j = 0; j < numOfBars - i - 1; j++) {
        targetBar = j + 1;
        //왼쪽이 오른쪽보다 크면
        if (targetArray[j] > targetArray[j + 1]) {
          //교체
          swap(j, j + 1);
          targetArray = targetArray;
          await sleep(speedFactor);
        }
      }
    }
    targetBar = -1;
  }
  //삽입 정렬
  async function insertionSort() {
    let i, j, key;
    //삽입 정렬은 맨 앞에서 2번째부터 시작.(첫번째 요소는 비교할 앞 요소가 없음)
    for (i = 1; i < numOfBars; i++) {
      j = i - 1;
      key = targetArray[i];
      //비교할 대상의 위치가 0보다 크면서 key값이 비교 대상보다 클 때까지 비교 -> targetArray[i]보다 작거나 같은 요소를 찾고 찾으면 swap
      while (j >= 0 && key < targetArray[j]) {
        //삽입의 제 위치는 현재 위치보다 앞부분일 것이므로
        //제 위치를 찾을때까지 오른쪽으로 한칸 밀음
        targetArray[j + 1] = targetArray[j];
        j--;
        targetBar = j + 1;
        targetArray = targetArray;
        await sleep(speedFactor);
      }
      //제 위치에 key값 넣음
      targetArray[j + 1] = key;
    }
    targetBar = -1;
  }
  //선택 정렬
  async function selectionSort() {
    let i, j, cur_min;
    for (i = 0; i < numOfBars - 1; i++) {
      cur_min = i; //정렬되지 않은 요소중 첫번째로 초기화
      for (j = i + 1; j < numOfBars; j++) {
        //정렬되지 않은 요소중 가장 작은것을 찾음
        targetBar = j;
        targetArray = targetArray;
        await sleep(speedFactor);
        if (targetArray[j] < targetArray[cur_min]) {
          //현재 가장 작은 요소보다 작은 요소를 찾으면 cur_min 교체
          cur_min = j;
        }
      }
      // 현재 요소가 가장 정렬되지 않은 요소중 가장 작은 요소가 아닐 경우
      if (cur_min !== i) {
        //현재 가장 작은 요소를 정렬되지 않은 요소들 중 가장 왼쪽에 배치
        swap(i, cur_min);
      }
    }
    targetBar = -1;
  }
  /**
   * @param {number} left
   * @param {number} right
   */
  async function mergeSort(left, right) {
    if (left >= right) return;
    // @ts-ignore
    let mid = left + parseInt((right - left) / 2);
    // @ts-ignore
    await mergeSort(left, mid);
    // @ts-ignore
    await mergeSort(mid + 1, right);
    // @ts-ignore
    await merge(left, mid, right);
    targetArray = targetArray;
    targetBar = -1;
  }

  async function merge(left, mid, right) {
    let leftSide = left,
      rightSide = mid + 1;
    const sorted = [];
    while (sorted.length < right - left) {
      if (targetArray[leftSide] < targetArray[rightSide]) {
        targetBar = leftSide;
        targetArray = targetArray;
        sleep(speedFactor);
        sorted.push(targetArray[leftSide]);
        if (leftSide == mid) {
          for (let i = rightSide; i <= right; i++) {
            sorted.push(targetArray[i]);
          }
        }
        leftSide++;
      } else {
        targetBar = leftSide;
        targetArray = targetArray;
        sleep(speedFactor);
        sorted.push(targetArray[rightSide]);
        if (rightSide == right) {
          for (let i = leftSide; i <= mid; i++) {
            sorted.push(targetArray[i]);
          }
          break;
        }
        rightSide++;
      }
    }
    for (let i = left; i <= right; i++) {
      targetArray[i] = sorted.splice(0, 1)[0];
      targetBar = i;
      targetArray = targetArray;
      //await sleep(speedFactor);
    }
    await sleep(speedFactor);
    targetArray = targetArray;
  }
  async function quickSort(left, right) {
    if (left >= right) {
      return;
    }
    let pivot = await partition(left, right);
    pivotBar = pivot;
    await quickSort(left, pivot - 1);
    await quickSort(pivot + 1, right);
    targetArray = targetArray;
    targetBar = -1;
    pivotBar = -1;
  }

  async function partition(left, right) {
    let pivot = targetArray[left];
    pivotBar = pivot;
    let l = left;
    let r = right;

    while (l < r) {
      targetBar = l;
      await sleep(speedFactor);
      while (l < r && targetArray[l] < pivot) {
        l++;
        targetBar = l;
        await sleep(speedFactor);
      }
      targetBar = r;
      await sleep(speedFactor);
      while (targetArray[r] > pivot) {
        r--;
        targetBar = r;
        await sleep(speedFactor);
      }
      swap(l, r);
      await sleep(speedFactor);
    }
    targetBar = l;
    await sleep(speedFactor);
    //swap(l, left)
    return l;
  }

  async function heapSort() {
    //make max heap
    var N = targetArray.length - 1;
    // @ts-ignore
    for (let i = parseInt(targetArray.length / 2) - 1; i >= 0; i--) {
      targetBar = i;
      await heapify(i, N);
    }

    while (N > 0) {
      swap(0, N);
      N--;
      await heapify(0, N);
    }
  }
  async function heapify(i, N) {
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let largest = i;
    targetBar = i;
    if (left <= N && targetArray[left] > targetArray[largest]) {
      largest = left;
    }
    if (right <= N && targetArray[right] > targetArray[largest]) {
      largest = right;
    }

    targetArray = targetArray;
    await sleep(speedFactor);
    if (largest != i) {
      swap(i, largest);
      await heapify(largest, N);
    }
  }

  function mixButtonClick() {
    if (isSorting) return; // 지금 정렬중이면 다시 섞는거 못하게 방지
    const newArray = targetArray;
    newArray.sort(() => Math.random() - 0.5);
    targetArray = newArray;
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, 510 - ms));
  }
  function swap(xp, yp) {
    let temp = targetArray[xp];
    targetArray[xp] = targetArray[yp];
    targetArray[yp] = temp;
  }
</script>

<label>
  speed
  <input type="range" bind:value={$speedFactor} min="1" max="500" />
</label>
<div class="button-wrap">
  <button on:click={sortButtonClick}>sort</button>
  <button on:click={mixButtonClick}>mix</button>
</div>

<div id="bars_container">
  {#each targetArray as bar, index}
    {#if targetBar === index}
      <Bar height={bar * heightFactor} color={"orange"} />
    {:else if pivotBar === index}
      <Bar height={bar * heightFactor} color={"green"} />
    {:else}
      <Bar height={bar * heightFactor} color={"grey"} />
    {/if}
  {/each}
</div>

<style>
  button {
    padding: 10px;
  }
  #bars_container {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
  .button-wrap {
    padding: 20px 0px;
  }
</style>
