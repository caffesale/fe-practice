# fe-practice

icodethis, frontendmentor challenges

# 경과표

- day1: qr-code-component-main
- day2: blog-preview-card-main
- day3: contact-form

  - css subgrid 활용
  - js없이 css selector만을 활용한 invalid feedback

  ```css
  /* subgrid */
  grid-column: span 2;
  grid-template-columns: subgrid;

  /* selector를 이용한 feedback */
  /**
  * :has(), :invalid, :user-invalid, :not(:placeholder-shown), :required, ...
  */
  ```

- day4 ~ day5: product-list-width

  - 특이사항 없음.
  - 최적화 테스트 및 derived State의 검증

- day6: social-links-profile-main

  - 특이사항 없음.

- day7: newsletter-sign-up-with-success-message-main
  - dialog element:
    - width:100%로 덮을 수 없는 padding을 가짐. 네거티브 마진으로도 해결불가.
    - display: grid, flex값일 때 dialog.close() method 동작 안함. dialog.style.display= none으로는 해결 가능
