<script>
  import SortTester from "../lib/SortTester.svelte";
</script>

<main class="main-content">
  <h1 class="green">Heap</h1>

  <div class="info-wrap border-green">
    <h3>
      Heap Sort는 이진 힙 데이터 구조를 기반으로 하는 비교 기반 정렬 기술입니다.
      먼저 배열을 Max Heap으로 만들고 가장 큰 값을 뒤로 넘기면서 Heap을
      줄여나가는 방식으로 정렬하는 방법입니다.
    </h3>
    <p>시간 복잡도 :O(N log(N)) 보조 공간: O(1)</p>
    <p>
      <a href="https://www.geeksforgeeks.org/selection-sort/?ref=lbp"
        >참고자료</a
      >
    </p>
  </div>
  <SortTester algorithm="heap" />
</main>
