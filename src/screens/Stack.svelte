<script>
  import { each } from "svelte/internal";
  import StackBlock from "../components/StackBlock.svelte";
  let max = 0;
  let things = [0];

  function pushButtonClick() {
    max++;
    let newArray = things;
    things.push(max);
    things = newArray;
  }

  function popButtonClick() {
    let newArray = things;
    things.pop();
    things = newArray;
  }

  function clearButtonClick() {
    things = [0];
    max = 0;
  }
</script>

<main>
  <h1>Stack</h1>
  <button on:click={pushButtonClick}>PUSH</button>
  <button on:click={popButtonClick}>POP</button>
  <button on:click={clearButtonClick}>Clear</button>
  {#each things as thing, index}
    <StackBlock id={thing} />
  {/each}
</main>

<style>
  main {
    width: 1080px;
    margin: auto;
  }
  h1 {
    font-size: 3em;
  }
  button {
    padding: 10px;
  }
</style>
