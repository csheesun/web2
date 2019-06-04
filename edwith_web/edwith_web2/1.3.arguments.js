function a() {
  console.log(arguments);
  for(var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    // 이렇게 해서도 객체에도 실제로 이 square bracket, 각 괄호를 통해가지고 값을 얻을 수가 있거든요.
  }
}

a(1, 2, 3);

/*
=> arguments 정보들을 뭔가 이용을 해서
다른 함수에 이 값을 전달해주거나 그런 방법들도 찾아보면 있습니다.
*/



// 인덱스로 지정하기
function a() {
  // argument 개수 체크, 개수가 틀리면 어떤 중대한 오류가 난다. 그런 오류가 자주 발생할 수 있을 것 같다.
  // 두 개만 넣으면 'return undefined' 된다.
  // 아무 값이 없는 걸 리턴해버려가지고 함수에서 반환값이 없었습니다.
  if(arguments.length < 3) return;

  // 함수만 봐서는 세 번째 값이 jisu라는 것을 전혀 알 수가 없거든요?
  console.log('my name is ', arguments[2]);

  // 또 다른 함수 호출
  otherMethod(arguments[1]);
}

a(1, 2, "jisu");
// argument 남용금지.
// 뭔가 필요한 경우에 이런 체크를 한다거나 그럴 때 써야지
// 코드에서 arguments[2] => 의도를 알 수 없다.
// 변경에 약한 코드다. 그래서 arguments를 조심히 써야 됩니다.

// arguments를 함부로 수정하려고 하셔도 안 돼요.
수정이 된다 하더라도 수정을 해서 이 값을 뭔가 바꾸려고 한다. => 안좋음 
