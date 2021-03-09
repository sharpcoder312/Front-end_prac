+ new Date()

  현재 시간 출력

+ date.getDay()

  요일 출력

+ date.getDte()

  날짜 출력

+ date.getMinutes()

  분 출력

+ const hours = date.getHours();

  시간 출력

+  const seconds = date.getSeconds();

  초 출력



+ setInterval	(실행할 함수, 함수 실행할 시간 간격)

  물론 시간 간격은 millisecond 기준이다

  ex) 3초 => 3000

  ````js
  function sayHi(){console.log("say hi")}
  setInterval(sayHi, 3000)
  => `3초마다 sayHi 출력`
  ````

  

  