// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['banana', 'orange']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);  // this 빼먹는거 주의하자. 
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);   // 배열을 이용하여 원하는 property만 정의
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {     // callback함수를 이용하여 더 세밀하게 통제 가능. replacer는 key와 value값을 인자로 받는다.
  // console.log(`key: ${key}, value: ${value}`);      어떤건지 console에 한번 출력해봄
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 유의할 점 : 함수는 object에 포함된 data가 아니기 때문에, 함수는 json에 포함되지 않는다.
// ex) symbol 등의 js자체 data




// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

rabbit.jump();  // can jump!
obj.jump();     // error  왜 error가 일어나는지 생각해보자.

console.log(rabbit.birthDate.getDate());  // 현재 날짜
console.log(obj.birthDate.getDate());     // error  위와 같은 논리로 error가 난다.

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});  // 이것으로 해결 가능