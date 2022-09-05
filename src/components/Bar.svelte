<script>
  export let height;
</script>

<div class="bar" style="height: {height + 'px'}" />

<style>
  .bar {
    width: 10px;
    background-color: gray;
    border: 1px solid black;
    border-radius: 2px;
  }
</style>
