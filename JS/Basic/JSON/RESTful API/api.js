// jsonplaceholder 사이트 이용
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))

  // fetch - js에 기본적으로 내장되어있는 api 통신시 사용하는 함수
  // fetch('인자') === fetch('주소')
  // 주소를 넘기고 나온 값을 then함수 안에서 response라는 값으로 받게되고 response.json을 통해 json으로 변환 후
  // json으로 반환 된 것을 clg로 출력


// axios 이용
  axios.get('https://jsonplaceholder.typicode.com/users',{ params: { id : 1 }})
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  //.then(function () { - 일반적으로 response와 error를 많이 사용한다.
  //  // always executed
  //});

// axios.get에서 주소 users뒤에 ?id=1을 입력하면 똑같은 값을 얻을 수 있겠지만
// 조건이 여러개라면 이 방법이 불편할 뿐더러, post방식에서는 이 방법을 쓸 수 없다.
