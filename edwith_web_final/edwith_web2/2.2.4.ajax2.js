var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function() {
  console.log(this.responseText);
});

oReq.open("GET", "./json/txt");
oReq.send();

// 지금 url(http://www.example.org/example.txt)이 없다.
// 서버가 없기 때문에 하나 만든다.
