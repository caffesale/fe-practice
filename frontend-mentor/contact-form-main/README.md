# 고려사항

- css subgrid: 2024.09.11시점 지원률 88.54%
- css selector만을 이용한 invalid feedback처리하기

  - :has(),:required, :invalid, :user-invalid등등
  - 다만 form element 자체적인 한계 존재

  ```css
  grid-column: span 2;
  grid-template-columns: subgrid;

  /* :not(:placeholder-shown)  := :user-invalid */
  ```
