<script>
  import { onMount } from "svelte";
  import Bar from "../components/Bar.svelte";

  let numOfBars = 100;
  let bars_container;

  let targetArray = new Array(numOfBars);
  let heightFactor = 5;
  let sppedFactor = 10;
  let targetBar = -1;

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
  function sortButtonClick() {
    bubbleSort();
    targetArray = targetArray;
  }
  async function bubbleSort() {
    var i, j;
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
