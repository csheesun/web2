// 함수의 호출.
function printName(firstname) {
    var myname = "jisu";
    return myname + " ," +  firstname;
}

// 실행순서 : 20 -> 8 -> 15 -> 16 -> ( 2 ~ 5 콜스택이라고 함) -> 16(result) -> 10, 11
// run 함수가 계속 실행이 되고 있고 그 중 printName 호출
function run(firstname) {
  // 왼쪽 게 true다 그러면 이 값이 그냥 쓰이게 돼있어요.
  // 오른쪽 표현식을 해석하지 않아요. 자바스크립트 함수(run)가
  // 지금 true 임
  // 자바스크립트에 false가 되는 경우가 몇 가지 있거든요.
  // null, undefined, 공백 문자

  firstname = firstname || "Youn";
  var result = printName(firstname);
  console.log(result);
}

run('kIM');
// 인자 아무것도 안줌 =>  undefined => false
// Or는 true false인지 자동으로 판단하는 문임 => Youn 할당

/*
main은 이제 전역 공간이라고 생각하시면 돼요. 글로벌
실제 메인 함수가 여기 보이진 않습니다. 이 전체가 다 메인 함수다라고 생각하면 돼요.
*/
