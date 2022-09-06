<script>
  import SortTester from "../lib/SortTester.svelte";
</script>

<main>
  <h1>Selection</h1>

  <div>
    <h3>
      Selection Sort는 정렬되지 않은 부분에서 최소 요소(오름차순 고려)를
      반복적으로 찾아 처음에 배치하여 배열을 정렬합니다. 알고리즘은 주어진
      배열에서 두 개의 하위 배열을 유지합니다.
    </h3>
    <p>시간 복잡도 : O(N^2 ) 보조 공간: O(1)</p>
    <p>
      <a href="https://www.geeksforgeeks.org/selection-sort/?ref=lbp"
        >참고자료</a
      >
    </p>
  </div>
  <SortTester algorithm="selection" />
</main>
