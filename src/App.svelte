<script>
  import Stack from "./screens/Stack.svelte";
  import Router from "svelte-spa-router";
  import Home from "./screens/Home.svelte";
  import Queue from "./screens/Queue.svelte";
  import Bubble from "./screens/Bubble.svelte";
  import Insertion from "./screens/Insertion.svelte";
  import Selection from "./screens/Selection.svelte";
  import Merge from "./screens/Merge.svelte";
  import Quick from "./screens/Quick.svelte";
  import Heap from "./screens/Heap.svelte";
  const routes = {
    "/": Home,
    "/stack": Stack,
    "/queue": Queue,
    "/bubble": Bubble,
    "/insertion": Insertion,
    "/selection": Selection,
    "/merge": Merge,
    "/quick": Quick,
    "/heap": Heap,
  };
</script>

<main class="main">
  <nav>
    <div class="home-btn">
      <a href="#/">home</a>
    </div>
  </nav>
  <div class="main-area">
    <Router {routes} />
  </div>
</main>

<style>
  nav {
    margin: auto;
    float: left;
    width: 150px;
    height: 100%;
    background-color: var(--black);
  }
  .home-btn {
    background-color: var(--grey);
    text-align: center;
    vertical-align: middle;
    padding-top: 13%;
    padding-bottom: 13%;
  }
  a {
    font-weight: 500;
    text-decoration: inherit;
    font-size: 2em;
    color: var(--yellow);
  }
  .main-area {
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: var(--dark-grey);
  }
</style>
