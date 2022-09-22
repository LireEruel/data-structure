<script>
  import { each } from "svelte/internal";
  import StackBlock from "../components/StackBlock.svelte";
  let max = 0;
  let queue = [0];

  function EnqueueButtonClick() {
    let log = document.getElementsByClassName("log")[0];
    let p = document.createElement("p");

    if (queue.length > 10) {
      p.textContent = "queue is overflow !";
    } else {
      max++;
      let newArray = queue; // 그냥 queue.push(max)하면 데이터는 바뀌지만 리렌더링은 되지 않음.
      newArray.push(max);
      queue = newArray;
      p.textContent = max + " is enqueued";
    }
    log.prepend(p);
  }

  function DequeueButtonClick() {
    let log = document.getElementsByClassName("log")[0];
    let p = document.createElement("p");
    if (queue.length == 0) {
      p.textContent = "queue is empty";
    } else {
      let newArray = queue;
      p.textContent = queue[0] + " is dequeued";
      newArray.splice(0, 1);
      console.log(newArray);
      queue = newArray;
    }
    log.prepend(p);
  }

  function clearButtonClick() {
    queue = [0];
    max = 0;
    let log = document.getElementsByClassName("log")[0];
    log.innerHTML = "";
  }
</script>

<main>
  <h1 class="yellow">Queue</h1>
  <div class="info-wrap yellow">
    <p>큐는 선입선출(FIFO)의 특성을 가지는 자료구조입니다.</p>
    <p>입력 연산을 Enqueue, 출력 연산을 Dequeue이라고 부릅니다.</p>
  </div>
  <p>
    <a href="https://www.geeksforgeeks.org/stack-data-structure/">참고자료</a>
  </p>
  <div class="button-wrap">
    <button on:click={EnqueueButtonClick}>Enqueue</button>
    <button on:click={DequeueButtonClick}>Dequeue</button>
    <button on:click={clearButtonClick}>Clear</button>
  </div>

  <div>
    <div class="front yellow">Front/Head</div>
    <div class="back yellow">Back/Tail/Rear</div>
  </div>
  <div class="queue-wrap">
    {#each queue as thing, index}
      <StackBlock id={thing} />
    {/each}
  </div>
  {#if queue.length == 0}
    <h2>Queue is empty</h2>
  {/if}

  <h3>logs</h3>
  <div class="log" />
</main>

<style>
  main {
    width: 1080px;
    margin: auto;
  }
  h1 {
    font-size: 3em;
  }
  h3 {
    margin: 2% 0px;
  }
  button {
    padding: 10px;
  }
  .front {
    display: contents;
  }
  .back {
    float: right;
  }
  .button-wrap {
    margin: 10px 0px;
  }
  .queue-wrap {
    display: flex;
  }
  .log {
    height: 300px;
    overflow: auto;
    background-color: var(--grey);
  }
</style>
