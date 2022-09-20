<script>
  import SortTester from "../lib/SortTester.svelte";
</script>

<main>
  <h1>Heap</h1>

  <div>
    <h3>
      Heap Sort는 이진 힙 데이터 구조를 기반으로 하는 비교 기반 정렬 기술입니다.
      먼저 최소 요소를 찾고 시작 부분에 최소 요소를 배치하는 선택 정렬과
      유사합니다.
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
