<script>
  import { onMount } from "svelte";
  import Bar from "../components/Bar.svelte";

  let numOfBars = 100;
  let bars_container;

  let targetArray = new Array(numOfBars);
  let heightFactor = 5;
  let sppedFactor = 10;
  let targetBar = -1;
  let isSorting = false;

  for (let i = 0; i < numOfBars; i++) {
    targetArray[i] = i + 1;
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function mixButtonClick() {
    const newArray = targetArray;
    newArray.sort(() => Math.random() - 0.5);
    targetArray = newArray;
  }

  function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }
  async function sortButtonClick() {
    if (isSorting) return; // sorting함수가 2개가 동시에 동작하지 않도록 수정
    isSorting = true;
    await bubbleSort();
    isSorting = false;
    targetArray = targetArray;
  }
  async function bubbleSort() {
    var i, j;
    isSorting = true;
    for (i = 0; i < numOfBars - 1; i++) {
      for (j = 0; j < numOfBars - i - 1; j++) {
        targetBar = j + 1;
        if (targetArray[j] > targetArray[j + 1]) {
          swap(targetArray, j, j + 1);
          targetArray = targetArray;
          await sleep(sppedFactor);
        }
      }
    }
    targetBar = -1;
  }
</script>

<main>
  <h1>bubble</h1>
  <button on:click={sortButtonClick}>sort</button>
  <button on:click={mixButtonClick}>mix</button>
  <div>
    <h3>
      bubble sort는 인접한 요소의 순서가 잘못된 경우 반복적으로 교체하여
      작동하는 가장 간단한 정렬 알고리즘입니다.
    </h3>
    <p>시간 복잡도 : O(N^2 ) 보조 공간: O(1)</p>
    <p>
      <a href="https://www.geeksforgeeks.org/bubble-sort/?ref=lbp">참고자료</a>
    </p>
  </div>
  <label>
    <p>speed</p>
    <input type="number" bind:value={sppedFactor} min="0.1" max="10" />
    <input type="range" bind:value={sppedFactor} min="0.1" max="10" />
  </label>
  <div id="bars_container">
    {#each targetArray as bar, index}
      {#if targetBar === index}
        <Bar height={bar * heightFactor} color={"orange"} />
      {:else}
        <Bar height={bar * heightFactor} color={"grey"} />
      {/if}
    {/each}
  </div>
</main>

<style>
  button {
    padding: 10px;
  }
  #bars_container {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
</style>
