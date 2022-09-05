<script>
  import { onMount } from "svelte";
  import Bar from "../components/Bar.svelte";

  let numOfBars = 100;
  let bars_container;

  let targetArray = new Array(numOfBars);
  let heightFactor = 5;

  for (let i = 0; i < numOfBars; i++) {
    targetArray[i] = i + 1;
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
</script>

<main>
  <h1>bubble</h1>
  <button>sort</button>
  <button on:click={mixButtonClick}>mix</button>
  <div id="bars_container">
    {#each targetArray as bar}
      <Bar height={bar * heightFactor} />
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
