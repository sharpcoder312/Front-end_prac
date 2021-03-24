const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");
const allDeleteButton = document.querySelector(".allDelete");

// likeButton.addEventListener("click", () => {
//   console.log('click')
// }) 현재 .like가 (document 즉 html에) 없는 상태(js가 완벽히 rendering되지 않은 상태)에서 이벤트리스너를 등록하면 오류가 뜬다.
// 그래서 generateTodo가 일어나는 시점에 등록해야한다.

const handleKeypress = (e) => {     // 여기서 e는 기본적으로 제공되는 객체인데 input event가 발생했을 때 발생한 event의 정보를 담고있는 객체이다.
  if (e.keyCode === 13) {
    generateTodo(todoInput.value);  // innerText나 textContent가 아닌 value를 사용한 이유를 생각해보자
    todoInput.value = "";
  }
}

const generateTodo = (todo) => {
  const li = document.createElement("li");
  const likeSpan = generateLike();    // 사실 여기서 굳이 generate함수들에 대해 변수 지정을 한 후 appendChild 메서드에 넣을 필욘없다.
  const itemSpan = generateItem(todo);    // 좀 더 가독성을 높여줄 뿐이다.
  const manageSpan = generateManage();
  li.appendChild(likeSpan);
  li.appendChild(itemSpan);
  li.appendChild(manageSpan);
  todoList.appendChild(li);
}

const generateLike = () => {
  const span = document.createElement("span");
  span.classList.add("todo-like");
  const icon = document.createElement("i");
  icon.classList.add("material-icons");
  icon.classList.add("like");
  icon.innerText = "favorite_border"
  icon.addEventListener("click", () => {  // addEventListener를 해당 부분에 추가한 이유를 생각해보자
    // '3항 연산자'도 사용 가능
    // icon.innerText === 'favorite_border' ?
    //   icon.innerText = "favorite" : icon.innerText = "favorite_border"
    if (icon.innerText === "favorite_border") {
      icon.innerText = "favorite"
    } else {
      icon.innerText = "favorite_border"
    }
  })
  span.appendChild(icon); // icon에 대한 모든 정보를 기입 후 icon에 대한 event 삽입
  return span;      // return을 통해 반환 받은 것을 다시 likeSpan로 가져가 사용할 수 있다.
}
// 위 코드에서 잘못된예시 - const todoLike = document.querySelector("#todo-like");
// -                    todoLike.addEventListener("click", () => {
// 이렇게 코드 늘릴 필요없이 변수 icon이 "i"를 가리키고 있기 때문에 이것을 바로 사용하면 된다.

const generateItem = (todo) => {
  const span = document.createElement("span");
  span.classList.add("todo-item");
  span.innerText = todo;
  return span;
}

const generateManage = () => {
  const span = document.createElement("span");
  span.classList.add("todo-manage");
  const icon1 = document.createElement("i");
  const icon2 = document.createElement("i");
  icon1.classList.add("material-icons");
  icon1.classList.add("check");
  icon1.innerText = "check";
  icon2.classList.add("material-icons");
  icon2.classList.add("clear");
  icon2.innerText = "clear";
  icon1.addEventListener("click", (e) => {      // eventlistener를 맨 밑이 아닌 여기에 입력한 이유를 생각해보자.
    const li = e.target.parentNode.parentNode;  // e의 icon1의 span의 li  
    li.classList.add('done');
    console.log(li);
  })
  icon2.addEventListener("click", (e) => {
    const li = e.target.parentNode.parentNode;  // e의 icon2의 span의 li
    todoList.removeChild(li);
  })
  span.appendChild(icon1);      // icon의 모든 기능을 구현한 다음에 span의 자식으로 편입
  span.appendChild(icon2);
  return span;
}

// 위 코드들에서 icon 만드는 것들이 많은데, Like와 Manage에서 icon 코드만 따로 빼내서 generateIcons만 따로 만들 수도 있다.

const generateDelete = () => {
  todoList.innerHTML = "";
}


// 보통 addEventListener는 다 rendering된 다음에 listner로 연결하여 실행 시키기위해 맨마지막에 추가
todoInput.addEventListener("keypress", handleKeypress); 
allDeleteButton.addEventListener("click", generateDelete);

// 위의 두 Listener함수는 차이점이 있다. 
// 이름만 봐도 감이 오는데 handleKeypress 말 그대로 keypress 했을 때 벌어지는 일을 그린 함수인 반면에
// generateDelete는 click과 동시에 바로 원하는 동작을 하는 함수를 실행해버린다.
// handleKeypress와 같이 가장 근본이 되는 listenr나 후에 여러 동작을 필요로 할 때에는 벌어지는 event 그 자체에 대한 함수를 적어주는 것이 좋다.
// 반면, generateDelete와 같이 하나의 동작을 필요로 할 때에는 바로 원하는 함수 하나를 적어주는 것이 가독성을 높이고 편리할 수 있다.