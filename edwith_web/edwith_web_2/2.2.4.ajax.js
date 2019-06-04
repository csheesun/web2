function ajax(data) {
  var oReq = new XMLHttpRequest();
  // 첫 번째로는 ajax를 보내기 위해서는 XMLHttpRequest라는 객체를 만들어야 됩니다.

  oReq.addEventListener("load", function() {
    /*
    addEventListener는 똑같다.
    이벤트를 처리하는 방식이라고 생각하기 때문에 브라우저에서도

    사실 oReq.addEventListener 전에 oReq.open 처리 가능
    서버로 이 코드 전에 뭐냐면 open. 이 메서드가 실행이 되거든요.
    즉 해당하는 url로
    url로 서버 요청을 준비하고 그다음에 send를 하면 서버로 날아가는데
    그 후 ajax 함수는 실행 끝남
    그다음 콜백함수 function 만 따로 실행

    정리
    ajax는 open -> send -> 끝 
    function 은 load 가 실행 될 때
    ajax 함수는 모두 다 반환이 됐고, 콜 스택에서 내려왔고
    이 함수가 나중에 서버에서 오면 실행이 됩니다.
    MDN 에 있는 예제임
    */
    console.log(this.responseText);
  });

  oReq.open("GET", "http://www.example.org/getData?data=data");
  oReq.send();
}
