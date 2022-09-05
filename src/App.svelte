<script>
  import Stack from "./screens/Stack.svelte";
  import Router from "svelte-spa-router";
  import Home from "./screens/Home.svelte";
  import Queue from "./screens/Queue.svelte";
  const routes = {
    "/": Home,
    "/stack": Stack,
    "/queue": Queue,
  };
</script>

<main>
  <nav>
    <a href="#/">home</a>
  </nav>
  <div>
    <Router {routes} />
  </div>
</main>

<style>
  nav {
    width: 1080px;
    margin: auto;
  }
  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
    font-size: 2em;
    margin-right: 10%;
  }
  a:hover {
    color: #535bf2;
  }
  div {
    width: 1080px;
    margin: auto;
  }
</style>
