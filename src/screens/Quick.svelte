<script>
  import SortTester from "../lib/SortTester.svelte";
</script>

<main class="main-content">
  <h1 class="green">Quick</h1>

  <div class="info-wrap border-green">
    <h3>
      Quick Sort는 분할 및 정복 알고리즘입니다. 첫번째 요소를 피벗으로 선택하고
      피벗을 중심으로 배열을 분할합니다. 왼쪽은 피벗보다 작은수 오른쪽은
      피벗보다 큰 수로 배열을 분할합니다. 반복적으로 분할하며 정렬하게 됩니다.
    </h3>
    <p>시간 복잡도 :O(N log(N)) 보조 공간: O(1)</p>
    <p>
      <a href="https://www.geeksforgeeks.org/quick-sort/?ref=lbp">참고자료</a>
    </p>
  </div>
  <SortTester algorithm="quick" />
</main>
