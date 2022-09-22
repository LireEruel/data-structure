<script>
  import SortTester from "../lib/SortTester.svelte";
</script>

<main class="main-content">
  <h1 class="green">Merge</h1>

  <div class="info-wrap border-green">
    <h3>
      Merge Sort는 배열을 분할할 수 있을 때까지 계속 반으로 분할을 합니다. 그 후
      다시 병합하며 정렬하는 알고리즘입니다.
    </h3>
    <p>시간 복잡도 :O(N log(N)) 보조 공간: O(n)</p>
    <p>
      <a href="https://www.geeksforgeeks.org/selection-sort/?ref=lbp"
        >참고자료</a
      >
    </p>
  </div>
  <SortTester algorithm="merge" />
</main>
