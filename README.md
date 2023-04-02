# 글로벌널리지 WIKIPEDIA

## 1. 배포사이트
https://global-wikipedia.vercel.app/

## 2. 개발 환경

```bash
> npm (v8.5.5)
> node (v16.15.0)
> react (v18.2.0)
> typescript (v4.9.5)
```

## 3. 설치 및 실행
```bash
$ npm install
$ npm start
```

## 4. 사용기술
<img src="https://img.shields.io/badge/React.js-17b6e7?style=flat-square&logo=React&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=SASS&logoColor=white"/></a>&nbsp;

## 5. 개발기간
2023.03.30 ~ 2023.04.02

## 6. 구현내용
- [x] 메인에서 목록으로 보여지는 위키 제목의 갯수는 5개로, 5개가 넘어가면 페이지를 구분해서 표시
![페이지네이션](https://user-images.githubusercontent.com/68591616/229342800-7604243c-4b0d-46b1-accf-81ec219ee3c7.gif)
- [x] 위키 본문에 다른 위키 제목이 있으면 링크처리, 클릭하면 해당 페이지 이동, 아래에 위키 제목을 포함한 내용이 담긴 다른 위키 제목을 나열함
![위키내용](https://user-images.githubusercontent.com/68591616/229342827-0be094b1-9021-4069-b2f4-c92fce3459c8.gif)
- [x] 메인페이지에서 추가 버튼을 누르면 새로이 입력할 수 있는 창이 나오고, 제목과 내용을 입력할 수 있음 (중복인 제목일 경우, toast에러 띄움)
![위키 추가](https://user-images.githubusercontent.com/68591616/229342831-2aac9a6b-a199-47d3-8dc7-a452b369ebc2.gif)
- [x] 위키내용페이지에는 수정 버튼이 있고, 수정을 누르면 내용을 수정해서 저장할 수 있음 (내용이 수정되지 않았을 경우, toast에러 띄움)
![내용수정](https://user-images.githubusercontent.com/68591616/229342841-e2c4995b-71a4-4687-89f1-7c292ef8abb6.gif)
