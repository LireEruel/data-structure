<script>
  import Stack from "./screens/Stack.svelte";
  import Router from "svelte-spa-router";
  const routes = {
    "/stack": Stack,
  };
</script>

<main>
  <nav>
    <a href="#/">home</a>
    <a href="#/stack">Stack</a>
  </nav>
  <Router {routes} />
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
</style>
