<script>
  import { onMount } from "svelte";
  import Bar from "../components/Bar.svelte";
  let numOfBars = 100;
  let targetArray = new Array(numOfBars);
  let heightFactor = 5;
  let speedFactor = 10;
  let targetBar = -1;
  let isSorting = false;

  export let algorithm;

  for (let i = 0; i < numOfBars; i++) {
    targetArray[i] = i + 1;
  }
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
      default:
        break;
    }

    isSorting = false;
    targetArray = targetArray;
  }

  async function bubbleSort() {
    let i, j;
    isSorting = true;
    for (i = 0; i < numOfBars; i++) {
      for (j = 0; j < numOfBars - i - 1; j++) {
        targetBar = j + 1;
        if (targetArray[j] > targetArray[j + 1]) {
          swap(targetArray, j, j + 1);
          targetArray = targetArray;
          await sleep(speedFactor);
        }
      }
    }
    targetBar = -1;
  }

  async function insertionSort() {
    let i, j, key;
    for (i = 1; i < numOfBars; i++) {
      j = i - 1;
      key = targetArray[i];
      while (j >= 0 && key < targetArray[j]) {
        targetArray[j + 1] = targetArray[j];
        j--;
        targetBar = j + 1;
        targetArray = targetArray;
        await sleep(speedFactor);
      }
      targetArray[j + 1] = key;
    }
    targetBar = -1;
  }
  async function selectionSort() {
    let i, j, cur_min;
    for (i = 0; i < numOfBars - 1; i++) {
      cur_min = i;
      for (j = i + 1; j < numOfBars; j++) {
        targetBar = j;
        targetArray = targetArray;
        await sleep(speedFactor);
        if (targetArray[j] < targetArray[cur_min]) {
          cur_min = j;
        }
      }
      // 현재 요소가 가장 정렬되지 않은 요소중 가장 작은 요소가 아닐 경우
      if (cur_min !== i) {
        //현재 가장 작은 요소를 정렬되지 않은 요소들 중 가장 왼쪽에 배치
        swap(targetArray, i, cur_min);
      }
    }
    targetBar = -1;
  }

  function mixButtonClick() {
    const newArray = targetArray;
    newArray.sort(() => Math.random() - 0.5);
    targetArray = newArray;
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, 510 - ms));
  }
  function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }
</script>

<label>
  speed
  <input type="range" bind:value={speedFactor} min="1" max="500" />
</label>
<div class="button-wrap">
  <button on:click={sortButtonClick}>sort</button>
  <button on:click={mixButtonClick}>mix</button>
</div>

<div id="bars_container">
  {#each targetArray as bar, index}
    {#if targetBar === index}
      <Bar height={bar * heightFactor} color={"orange"} />
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
