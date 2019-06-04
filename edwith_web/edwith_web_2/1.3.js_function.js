// function printName(firstname) {
//   // var myname = "jisu";
//   return "name is " + firstname;
// }

// console.log(printName());
// console.log(printName('jisu'));
// console.log(printName('jisu', 'crong'));
// => only jisu appears
/*
지금까지 프로그램 오류가 계속 안 나왔죠?
매개변수와 인자 값의 개수가 일치하지 않거나
더하거나 덜하거나 그런 상황에서도 함수는 오류를 발생시키지 않습니다.
*/

// name is undefined.
// firstName은 내부적으론 undefined이라고 할당이 됩니다.
// undefined은 자바스크립트의 중요한 타입 중에 하나
// 선언되어 있고 할당돼있지 않은 변수는 undefined

function printName(firstname) {
  // function expression
  // 변숫값에 함수 표현식을 담아 놓은 거, 그래서 함수 표현식이라고 하는데요.
  // console.log(inner); // undefined.

  /* 선언은 돼있지만 할당이 돼있지 않은 경우에 자바스크립트에서는 값이 할당이 되어있지 않은
  어떤 만들어지 변숫값. 우리가 그걸 확인할 수 있는데 undefined이 나왔죠.
  inner는 아직은 함수로 인식이 되지 않고 있다
  */

  // var a;

  var result = inner(); // TypeError!
  /* 여기서 hoisting 나옴
  이쯤에 inner라는 게 전혀 없을 텐데... 그렇지 않습니다.
  함수가 한번 실행이 될 때
  첫 번째에서 함수가 실행이 되기 전에
  함수에 대한 코드를 한번 딱 훑는다고 생각하시면 돼요.
  자바스크립트 파서가 한번 쭉 훑어서
  아! 얘는 변수고 얘는 함수고 이런 것들을 먼저 기억
  그래서 코드 내에 아래쪽에 있는 것들도 모두 다 이렇게 끌어올리게 돼있어요.
  위에 가있는 거랑 사실상 같게 된다.
  */

  console.log(typeof inner); // == function!
  console.log("name is " + result);

  // var inner = function() {
  //   return "inner value";
  // }

  // 끌어올리는 거 알겠다. 그러면
  var a = function() {};
  // var a; // 통째로 끌어올려진 게 아니고 이렇게 끌어올려진 거랑 같은 거다. 위는 이렇게 가고
  // a = function() {}; // 사실은 이렇게 된 거다.
  // 자바스크립트 파서는 아래에 있는 변수들을 이렇게 끌어모은 거고
  // 함수는 통째로 가져왔다고 생각을 하면 됩니다.
  // inner 는 함수로 인식을 하고
  // 이 a는 함수임에도 불구하고 함수 표현식이라 이렇게 undefined 값을 가져오게 된 거예요. => hoisting (?)
  // 호이스팅이 이제 함수 표현식과 선언문에서 약간 다르게 동작되기 때문에

  function inner() {
    return "inner value";
  }
  /* 함수가 아래에 있는데 어떻게 찾지?
  금방 뭐가 바꾸니 걸까요? 표현식이 함수 선언문으로 바뀐 거예요.
  함수 내에서는 이 inner 정보를 이제는 함수로 인식하고 있는 거예요.
  */

  // var result = inner();
  // console.log("name is " + result); // ok. 위로!
}

printName();

// 함수 선언식으로 바꾼 후 : console.log(inner);
// 하면
/* 함수도 나온다.
  ƒ inner() {
    return "inner value";
  }
  */

  // 반환값
  // return undefined, return "";해도 된다.
