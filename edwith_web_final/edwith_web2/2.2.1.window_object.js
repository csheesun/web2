function run() {
  console.log("run() start");

  setTimeout(function() { // function == callback function
    var msg = "hello codesquad";
    console.log(msg); // 이 메시지는 즉시 실행되지 않습니다.
    console.log("run .....ing"); // 1초후 msg 출력 후 출력 됨
  }, 1000); // 1초 후 실행 됨

  console.log("run() end"); /*  */
}

console.log("start");
run();
console.log("end");
// start -> run() start -> run() end -> end -> hello codesquad -> run .....ing
// 시간이 0이어도 같은 순서임
// function 안에 있는 거 이게 바로 비동기 콜백 함수의 특징입니다.
// 이건 스택에 쌓여있는 코드들인데
// 스택이 다 비워지고 나서 비동기는 마지막에 실행이 된다.
// run이 함수가 실행된 이후에 => function() 실행 됨
// function 이 실행되고 나서 run은 이미 반환이 된 거다.
// 이벤트 큐라는 데에 보관돼 있다가 나중에 실행된다.
// 두 번째 인자로 지정된 ms 뒤에 그 함수가 실행이 된다라는 건데
// 애니메이션 할 때 리퀘스트 애니메이션 프레임, 비동기

/*
  콜백 함수 : 필요할 때 실행할 수 있는 함수
  window.alert :  메시지를 띄우면 브라우저에서 그 alert 함수 안에 있는 인자에 있는 내용들을 팝업으로 띄운다. 별로 좋지 않은 UX라고도 하는데요.
  window는 이제 전역 객체

  * alert timeout

 본문 중 : 동기적인 다른 실행이 끝나야 실행 된다.
 동기적인 다른 실행은 run() start 말하는 거임

 setTimeout() -> 특정 시간 후에 함수를 1번만 실행합니다.
setInterval() -> 계속 반복합니다.
*/
