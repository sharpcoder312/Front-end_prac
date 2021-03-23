const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");
// const likeButton = document.querySelector(".like");
const allDeleteButton = document.querySelector(".allDelete");

// likeButton.addEventListener("click", () => {
//   console.log('click')
// }) 현재 .like가 (document 즉 html에) 없는 상태(js가 완벽히 rendering되지 않은 상태)에서 이벤트리스너를 등록하면 오류가 뜬다.
// 그래서 generateTodo가 일어나는 시점에 등록해야한다.

const handleKeypress = (e) => {     // 여기서 e는 기본적으로 제공되는 객체인데 input event가 발생했을 때 발생한 event의 정보를 담고있는 객체이다.
  if (e.keyCode === 13) {
    generateTodo(todoInput.value);
    todoInput.value = "";
  }
}

const generateTodo = (todo) => {
  const li = document.createElement("li");
  const likeSpan = generateLike();
  const itemSpan = generateItem(todo);
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
  span.appendChild(icon); // icon에 대한 모든 정보를 기입 후 icon에 대한 event 삽입
  icon.addEventListener("click", () => {  // addEventListener를 해당 부분에 추가한 이유를 생각해보자
    // '3항 연산자'도 사용 가능
    // icon.innerText === 'favorite_border' ?
    //   icon.innerText = "favorite" : icon.innerText = "favorite_border"
    if (icon.innerText === 'favorite_border') {
      icon.innerText = "favorite"
    } else {
      icon.innerText = "favorite_border"
    }
  })
  console.log(span);
  return span;      // return을 통해 반환 받은 것을 다시 likeSpan로 가져가 사용할 수 있다.
}

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
    // = todoList.removeChild(document.querySelector("li"));
  })
  span.appendChild(icon1);      // icon의 모든 기능을 구현한 다음에 span의 자식으로 편입
  span.appendChild(icon2);
  return span;
}

// 위 코드들에서 icon 만드는 것들이 많은데, Like와 Manage에서 icon 코드만 따로 빼내서 generateIcons만 따로 만들 수도 있다.

const generateDelete = () => {
  todoList.innerHTML = "";
}



todoInput.addEventListener("keypress", handleKeypress); // 다 rendering된 다음에 listner로 연결하여 실행 시키기위해 맨마지막에 추가
allDeleteButton.addEventListener("click", generateDelete);