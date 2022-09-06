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
      default:
        break;
    }

    isSorting = false;
    targetArray = targetArray;
  }

  async function bubbleSort() {
    var i, j;
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
    var i, j, key;
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

  async function renderBars() {}
  function mixButtonClick() {
    const newArray = targetArray;
    newArray.sort(() => Math.random() - 0.5);
    targetArray = newArray;
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }
</script>

<label>
  <p>speed</p>
  <input type="number" bind:value={speedFactor} min="1" max="500" />
  <input type="range" bind:value={speedFactor} min="1" max="500" />
</label>
<button on:click={sortButtonClick}>sort</button>
<button on:click={mixButtonClick}>mix</button>
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
</style>
