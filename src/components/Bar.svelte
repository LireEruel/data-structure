<script>
  export let height;
  export let color;
</script>

<div class="bar" style="height: {height + 'px'}; background-color:{color}" />

<style>
  .bar {
    width: 10px;
    border: 1px solid black;
    border-radius: 2px;
  }
</style>
