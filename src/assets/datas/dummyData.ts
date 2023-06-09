export const DUMMY_DATA = [
  {
    id: 1,
    title: "콜스택",
    contents:
      "원시타입 데이터 저장, 실행 컨텍스트를 통해 변수 식별자 저장, 스코프체인 및 this관리, 코드 실행순서 관리 등을 수행함, 더이상 참조되지 않는 데이터는 가비지 컬렉션에 의해 적절한 시점에서 메모리 해제됨",
  },
  {
    id: 2,
    title: "힙",
    contents:
      "참조타입 데이터 저장, 메모리 할당이 일어남, 구조화 되어있지 않음",
  },
  {
    id: 3,
    title: "엄격모드",
    contents:
      "ECMAScript5에서 등장한 엄격모드는 자바스크립트 코드에 더욱 엄격한 오류 검사를 적용해 줌, 부분적으로 엄격모드를 적용할 수 있음",
  },
  {
    id: 4,
    title: "즉시실행함수(IIFE)",
    contents:
      "정의되지마자 즉시 실행되는 함수, 보통 익명함수를 사용, 소괄호에 함수를 감싸서 실행하는 문법을 사용함",
  },
  {
    id: 5,
    title: "클로저",
    contents:
      "함수와 그 함수가 선언된 렉시컬 환경과의 조합. 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있는데 이러한 중첩 함수가 클로저다",
  },
  {
    id: 6,
    title: "동기",
    contents:
      "순차적/직렬적으로 태스크를 수행한다. 요청을 보냈다면, 응답을 받아야 다음 동작이 이루어진다. 순차적으로 실행되므로, 어떤 작업이 수행중이라면 뒤의 작업은 대기한다. 블로킹(작업 중단)이 발생한다.",
  },
  {
    id: 7,
    title: "비동기",
    contents:
      "병렬적으로 태스크를 수행한다. 현재 작업의 종료여부와 무관하게 다음 작업을 실행한다. 동기 방식과는 달리 완료 순서가 보장되지 않는다. 블로킹이 발생하지 않는다.",
  },
  {
    id: 8,
    title: "이벤트루프",
    contents:
      "콜스택에 현재 실행 중인 실행 컨텍스트가 있는지, 태스크 큐에 대기 중인 함수가 있는지 반복해서 확인하여 콜스택이 비어있고 태스크 큐에 대기 중인 함수가 있다면 이벤트 루프는 순차적으로(FIFO) 태스크 큐에 대기 중인 함수를 콜 스택으로 이동시킴",
  },
  {
    id: 9,
    title: "태스크 큐",
    contents:
      "setTimeout이나 setInterval과 같은 비동기 함수의 콜백 함수 또는 이벤트 핸들러가 일시적으로 보관되는 영역. 태스크큐와는 별도로 프로미스의 후속 처리 메서드의 콜백 함수가 일시적으로 보관되는 마이크로태스크 큐도 존재함",
  },
  {
    id: 10,
    title: "Web API",
    contents:
      "Ajax 요청, setTimeout(), 이벤트 핸들러의 등록과 같이 웹 브라우저에서 제공하는 기능들을 일컬음",
  },
  {
    id: 11,
    title: "requestAnimationFrame",
    contents:
      "브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트하는 함수를 호출하게 함. 이 메소드는 리페인트 이전에 실행할 콜백을 인자로 받음.",
  },
  {
    id: 12,
    title: "undefined",
    contents:
      "undefined는 원시값으로 선언한 후에 값을 할당하지 않은 변수나 값이 주어지지 않은 인수에 자동으로 할당됨",
  },
  {
    id: 13,
    title: "null",
    contents:
      "null은 원시값 중 하나로, 어떤 값이 의도적으로 비어있음을 표현함. 해당 변수가 어떤 객체도 가리키고 있지 않다는 것을 의미함",
  },
  {
    id: 14,
    title: "undeclared",
    contents: "접근 가능한 스코프에 변수 선언조차 되어있지 않은 상태를 의미함",
  },
  {
    id: 15,
    title: "map",
    contents:
      "배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환함",
  },
  {
    id: 16,
    title: "forEach",
    contents: "forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행함",
  },
  {
    id: 17,
    title: "reduce",
    contents:
      "reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환함",
  },
  {
    id: 18,
    title: "this",
    contents:
      "this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기참조변수이다. 자바스크립트 엔진에 의해 암묵적으로 생성되고, 코드 어디서든 참조할 수 있으며, this바인딩(this가 가리키는 값)은 함수 호출 방식에 의해 동적으로 결정됨.",
  },
  {
    id: 19,
    title: "콜백함수",
    contents:
      "함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백함수라고 한다. 대체적으로 비동기로 작동하지만 map, forEach, filter의 인자와 같이 동기식으로 호출되는 함수도 있음. 콜백함수 호출이 중첩되어 복잡도가 높아지는 현상을 콜백지옥이라고 함",
  },
  {
    id: 20,
    title: "Promise",
    contents:
      "ES6에서 비동기 처리를 위한 패턴으로 도입됨. 콜백 패턴이 가진 단점(콜백 헬, 에러 처리)을 보완하며, 비동기처리 시점을 명확하게 표현할 수 있다는 장점이 있음. 후속처리 메서드로는 then, catch, finally가 있음. Promise의 후속처리 메서드의 콜백함수는 마이크로태스크큐에 저장됨!",
  },
  {
    id: 21,
    title: "이벤트 버블링",
    contents:
      "한 요소에 이벤트가 발생하면 이 요소에 할당된 핸들러가 동작하고 가장 최상단의 조상요소를 만날 때까지 이 과정이 반복되면서 핸들러가 동작하는 특성을 말한다.",
  },
  {
    id: 22,
    title: "이벤트 캡쳐링",
    contents:
      "요소를 클릭하면 클릭 이벤트가 발생한 시점을 찾기 위해 최상위 조상에서 시작해 아래로 탐색하게 되는데 이를 캡쳐링이라고 한다.",
  },
  {
    id: 23,
    title: "스코프",
    contents: "식별자가 유효한 범위, 식별자를 검색할 때 사용하는 규칙",
  },
  {
    id: 24,
    title: "실행 컨텍스트",
    contents:
      "소스코드를 실행하는 데 필요한 환경을 제공하고 코드의 실행 결과를 실제로 관리하는 영역. 식별자(변수, 함수, 클래스 등의 이름)를 등록하고 관리하는 스코프와 코드 실행 순서 관리를 구현한 내부 매커니즘으로, 모든 코드는 실행 컨텍스트를 통해 실행되고 관리된다. 식별자와 스코프는 실행 컨텍스트의 렉시컬 환경으로 관리하고, 코드 실행 순서는 실행 컨텍스트 스택으로 관리한다.",
  },
  {
    id: 25,
    title: "렉시컬 환경",
    contents:
      "Block, function, script를 실행하기 전에 생성되는 객체로, 실행할 스코프 범위 안에 있는 변수와 함수를 프로퍼티로 저장하는 객체. 실행 컨텍스트를 구성하는 컴포넌트, 스코프와 식별자를 관리. 환경레코드와 외부코드와 연관된 외부 렉시컬 환경에 대한 참조로 구성됨",
  },
];
