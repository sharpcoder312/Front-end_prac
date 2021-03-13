// const output = document.getElementById("output")    //  변수(객체) 생성 = html(document)내의 선택하고싶은 것 지정
const wrapper = document.getElementsByClassName("wrapper")
const output = document.querySelector("#output")
//const output = document.querySelector(".wrapper")
const items = document.querySelectorAll(".list li")   // or ".item" 모든 .list li 대상이기에 all로 선택한다
const target = document.querySelector(".target")
const title = document.querySelector("h1")
const userID = document.querySelector("#userID")
const point = document.querySelector(".point")


// Event 보다 낮은 개념 즉, 영구적으로 바뀜
output.innerText = "wait";   //  js로 html을 제어하여 마음대로 바꾼 것을 볼 수 있다
// wrapper[0].innerText = "html";   //  htmlcolloection 이다보니 [0]으로 확실히 지정해주고 property 변경을 해야한다
target.style.color = "red";
target.style.fontSize = "36px";


// Event 걸기
// 문법 : event 일어나는 대상 즉 변수(객체).addEventListener("이벤트명", 실행될 함수-event로 인한 callback)
// 이하의 코드들처럼 바로 addEventListener에 funtion을 줘도 되지만 Dom2에서 처럼 event함수들의 object를 작성한 후 간결히 가는 것이 더 sexy하다
title.addEventListener("click", function () {
  title.style.color = "red"
})
userID.addEventListener("input", function () {   
  target.innerText = this.value     //    여기서 this는 event가 일어나는 대상 즉 변수(객체)를 의미한다
})
button.addEventListener("click", () => {
  target.style.width = "50px"
  target.style.backgroundColor = userID.value;
})
items.forEach(item => {       //  list는 현재 4개 다 걸어줘야 하기때문에 forEach 즉 반복문을 통해서 걸어줘야한다
  item.addEventListener("click", () => {
    point.innerHTML = item.innerText
  })
}) 


console.log({ output })   //  { }을 통해 객체화된 output의 다양한 property들을 볼 수 있다
console.dir(output)
console.log({ wrapper })
console.log(items)
