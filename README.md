# 프론트엔드 용어 WIKIPEDIA

## 1. 배포사이트
https://frontend-wikipedia.vercel.app/

## 2. 사용기술
<img src="https://img.shields.io/badge/React.js-17b6e7?style=flat-square&logo=React&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=SASS&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/Recoil-17b6e7?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NS4yMSA2MjMuOTEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp3aGl0ZX08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03NC42MiAyNzcuNDYgMS4yNC0uMTMgMzQuNzgtMy4yOC01My40Ny01OC42NkE5Ni40NyA5Ni40NyAwIDAgMSAzMiAxNTAuM0gzYTEyNS4zIDEyNS4zIDAgMCAwIDMyLjggODQuNTdaTTE3Ny4xMyAzNDdsLTM2IDMuNCA1My4zMiA1OC41MUE5Ni40MSA5Ni40MSAwIDAgMSAyMTkuNjMgNDc0aDI4LjkyYTEyNS4yOCAxMjUuMjggMCAwIDAtMzIuNzYtODQuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUzLjY5IDIzMS42OGMtNi4zMy0zMS4zLTMwLjg5LTU0LjA5LTYyLjU3LTU4LjA3bC02LjM1LS43OWE0OS42MSA0OS42MSAwIDAgMS00My4zNS00OS4xM3YtMjBhNTIuNzUgNTIuNzUgMCAxIDAtMjguOTEtLjM2djIwLjM4YTc4LjU2IDc4LjU2IDAgMCAwIDY4LjY1IDc3LjgybDYuMzYuOGMyMy4yNCAyLjkyIDM0Ljc4IDIwIDM3LjgzIDM1LjFzLS45MyAzNS4zMi0yMS4yMiA0N2E3My44MSA3My44MSAwIDAgMS0zMC4wNiA5LjYybC05NS42NiA5YTEwMi40NSAxMDIuNDUgMCAwIDAtNDEuOCAxMy4zOEM5IDMzMi40NS00LjgxIDM2MyAxLjUyIDM5NC4yOXMzMC44OSA1NC4wOCA2Mi41NyA1OC4wNmw2LjM1LjhhNDkuNiA0OS42IDAgMCAxIDQzLjM1IDQ5LjEydjE4YTUyLjc1IDUyLjc1IDAgMSAwIDI4LjkxLjI2di0xOC4yNmE3OC41NSA3OC41NSAwIDAgMC02OC42NS03Ny44MWwtNi4zNi0uOGMtMjMuMjQtMi45Mi0zNC43OC0yMC4wNS0zNy44My0zNS4xMXMuOTMtMzUuMzIgMjEuMjItNDdhNzMuNjggNzMuNjggMCAwIDEgMzAuMDYtOS42M2w5NS42Ni05YTEwMi40NSAxMDIuNDUgMCAwIDAgNDEuOC0xMy4zOGMyNy42NS0xNi4wMiA0MS40LTQ2LjU0IDM1LjA5LTc3Ljg2WiIvPjwvc3ZnPg==&logoColor=white"/></a>&nbsp;

## 3. 개발기간
2023.03.30 ~ 2023.04.02 (+ 리팩토링 1일)

## 4. 구현내용
- [x] 메인에서 목록으로 보여지는 위키 제목의 갯수는 5개로, 5개가 넘어가면 페이지를 구분해서 표시

![화면 기록 2023-05-03 오후 3 01 23](https://user-images.githubusercontent.com/68591616/235842894-b1b7c3d4-c03b-4774-9739-52c47245962f.gif)


- [x] 위키 본문에 다른 위키 제목이 있으면 링크처리, 클릭하면 해당 페이지 이동, 아래에 위키 제목을 포함한 내용이 담긴 다른 위키 제목을 나열함

![화면 기록 2023-05-03 오후 3 02 43](https://user-images.githubusercontent.com/68591616/235842796-75f06977-4c2f-469a-815b-687f18c1b9b6.gif)

- [x] 메인페이지에서 추가 버튼을 누르면 위치를 추가할 수 있는 창이 나오고, 제목과 내용을 입력할 수 있음 (중복인 제목일 경우, toast에러 띄움)

![화면 기록 2023-05-03 오후 3 03 22](https://user-images.githubusercontent.com/68591616/235842985-8ee191ca-e2eb-44d9-8f35-93a4167405e2.gif)


- [x] 위키내용페이지에는 수정 버튼이 있고, 수정을 누르면 내용을 수정해서 저장할 수 있음 (내용이 수정되지 않았을 경우, toast에러 띄움)

![화면 기록 2023-05-03 오후 3 04 16](https://user-images.githubusercontent.com/68591616/235843028-3c27c8db-f684-453d-bc42-50829dd3b264.gif)

## 5. 트러블 슈팅
https://imaginary-gateway-204.notion.site/WIKIPEDIA-628692458da64600b715f82e0d28da32?pvs=4
