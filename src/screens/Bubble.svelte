<script>
  import SortTester from "../lib/SortTester.svelte";
</script>

<main class="main-content">
  <h1 class="green">Bubble</h1>

  <div class="info-wrap border-green">
    <h3>
      Bubble Sort는 인접한 요소의 순서가 잘못된 경우 반복적으로 교체하여
      작동하는 가장 간단한 정렬 알고리즘입니다.
    </h3>
    <p>시간 복잡도 : O(N^2 ) 보조 공간: O(1)</p>
    <p>
      <a href="https://www.geeksforgeeks.org/bubble-sort/?ref=lbp">참고자료</a>
    </p>
  </div>
  <SortTester algorithm="bubble" />
</main>
