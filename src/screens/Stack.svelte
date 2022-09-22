<script>
  import { each } from "svelte/internal";
  import StackBlock from "../components/StackBlock.svelte";
  let max = 0;
  let things = [0];

  function pushButtonClick() {
    max++;
    let newArray = things;
    newArray.push(max);
    things = newArray;
  }

  function popButtonClick() {
    let newArray = things;
    newArray.pop();
    things = newArray;
  }

  function clearButtonClick() {
    things = [0];
    max = 0;
  }
</script>

<main>
  <h1 class="yellow">Stack</h1>
  <div class="info-wrap yellow">
    <p>스택은 후입선출(FIFO)의 특성을 가지는 자료구조입니다.</p>
    <p>입력 연산을 push, 출력 연산을 pop이라고 부릅니다.</p>
  </div>

  <p>
    <a href="https://www.geeksforgeeks.org/stack-data-structure/" target="popup"
      >참고자료</a
    >
  </p>
  <div class="button-wrap">
    <button on:click={pushButtonClick}>PUSH</button>
    <button on:click={popButtonClick}>POP</button>
    <button on:click={clearButtonClick}>Clear</button>
  </div>

  <div class="stack-wrap">
    {#each things as thing, index}
      <StackBlock id={thing} />
    {/each}
  </div>
</main>

<style>
  main {
    width: 1080px;
    margin: auto;
  }
  h1 {
    font-size: 3em;
    margin-top: 5%;
    color: var(--yellow);
  }
  button {
    padding: 10px;
  }
  .stack-wrap {
    height: 60vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .button-wrap {
    margin: 10px 0px;
  }
</style>
