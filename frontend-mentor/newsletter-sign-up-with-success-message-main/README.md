# 고려사항

- dialog element:
  - width:100%로 덮을 수 없는 padding을 가짐. 네거티브 마진으로도 해결불가.
  - display: grid, flex값일 때 dialog.close() method 동작 안함. dialog.style.display= none으로는 해결 가능
