<main>
  <!-- <h2>data structure</h2>
  <a href="#/stack"><button>Stack</button></a>
  <a href="#/queue"><button>Queue</button></a>
  <h2>Sort</h2>
  -->
  <section class="data-structure-section">
    <div class="home-section-content">
      <img class="icon" src="https://img.icons8.com/nolan/96/bar-chart.png" />

      <h1 class="title left">Data Structure</h1>
      <div class="button-wrap left">
        <a href="#/stack"><button class="left-button left">Stack</button></a>
        <a href="#/queue"><button class="left-button left">Queue</button></a>
      </div>
    </div>
  </section>
  <section>
    <div class="home-section-content">
      <img
        class="icon"
        src="https://img.icons8.com/nolan/96/positive-dynamic.png"
      />

      <h1 class="title right">Sorting Algorithm</h1>
      <div class="button-wrap right">
        <a href="#/bubble">
          <button class="right-button right">Bubble</button>
        </a>
        <a href="#/insertion">
          <button class="right-button right">Insertion</button>
        </a>
        <a href="#/selection">
          <button class="right-button right">Selection</button>
        </a>
        <a href="#/merge">
          <button class="right-button right">Merge</button>
        </a>
        <a href="#/quick">
          <button class="right-button right">Quick</button>
        </a>
        <a href="#/heap">
          <button class="right-button right">Heap</button>
        </a>
      </div>
    </div>
  </section>
</main>

<style>
  section {
    width: 50%;
    height: 100vh;
    float: left;
    display: flex;
    justify-content: center;
    align-content: center;
    cursor: pointer;
  }
  .home-section-content {
    width: 100%;
    height: 100%;
    border-right: 5px var(--black) solid;
  }
  .title {
    font-size: 2rem;
    text-align: center;
    font-family: "SF_Pixelate";
  }
  .left {
    color: var(--yellow);
    border-color: var(--yellow);
  }
  .right {
    color: var(--green);
    border-color: var(--green);
  }
  .icon {
    margin-top: 20%;
    width: 20%;
    height: 20%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .button-wrap {
    margin-top: 10%;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 5px dashed;
  }
  button {
    width: 100px;
    height: 70px;
    margin: 30px 10px;
    background: transparent;
    border: 3px solid;
    cursor: pointer;
    font-size: 1.2em;
  }
  .right-button:hover {
    background-color: var(--green-tint);
  }
  .left-button:hover {
    background-color: var(--yellow-tint);
  }
</style>
