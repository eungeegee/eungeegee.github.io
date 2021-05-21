# 기초 셋팅

- [x] 절대경로 설정 : `jsconfig.json`
- [ ] 프로젝트 구조 설정
  ```js
  pages - about - resume - blog - index.js - detail.js
  public - assets
  src - components - containers - layout
  styles
  context
  hooks
  posts
  lib
  api
  ```
- [x] esling + prettier + husky 설정
  - [go! 참고 블로그](https://xenox.dev/setting-up-eslint-and-prettier-for-next-js-project/)
  - [참고 깃허브: 프로버전](https://github.com/sarthology/next-js-eslint-pro)
  - [참고 깃허브: 기본버전](https://github.com/sarthology/next-js-eslint-basic)
  - 패키지 + 플러그인 설치
    - 기본 :
      ```bash
      npm i -D eslint-plugin-prettier eslint-plugin-react eslint-config-airbnb eslint-config-prettier
      ```
    - 고급
      ```bash
      npm i -D eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-security eslint-plugin-simple-import-sort eslint-plugin-sonarjs eslint-plugin-unicorn
      ```
      - `simple-import-sort/sort`는 `simple-import-sort/imports`,`.../exports` 로 이름이 변경되었다
  - prettier, eslint, husky 설정
    ```
    npm i -D husky lint-staged
    ```
- [x] 레이아웃 추가
- [x] style 설정
  - [x] tailwindcss
    - [x] config 추가
    - [x] globals.css 에 tailwind 적용
    - [x] `_app.js` 에 tailwind 글로벌 style 적용
