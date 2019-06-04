var el = document.querySelector(".outside");

// basic
// el.addEventListener("click", function() {
//   console.log('clicked!!');
// });

/* 이 자바스크립트가 html에 인클루드 되어 있음
*/

// 이벤트 정보를 매개변수로 받을 수가 있어요.
// el.addEventListener("click", function(e) {
//    console.log('clicked!!', e);
// });
/* MouseEvent {isTrusted: true, screenX: 162, screenY: 126, clientX: 91, clientY: 18, …}

e 추가 : MouseEvent : 안에 많은 객체가 있다.
어느 지점을 클릭했는지 좌푯값. 왼쪽 상단을 기준으로 좌푯값이 나오기도 하고
가장 많이 쓰는 target. : 어떤 클릭했는지 알려줌
*/

el.addEventListener("click", function(e) {
    var target = e.target; // event 에 target 정보가 있다.
    console.log(target.className, target.nodeName, target.tagName);
    // outside DIV(결국 tag 이름 말하는 거임) DIV

    console.log(target.innerText);
    debugger;
});

/*
target 정보가 좀 더 궁금하다. 그럴 경우에는 디버거를 걸고 네, Source 탭에 걸렸죠?
target 안에 많다. element에 있는 모든 정보들을 다 우리가 쓸 수가 있습니다.

개발자 도구에서 debugging 하기 : debugging; 추가 하고 Sources 탭으로
*/
