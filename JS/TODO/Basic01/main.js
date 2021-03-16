const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");
const likeButton = document.querySelector(".like");

// likeButton.addEventListener("click", () => {
//   console.log('click')
// }) 현재 .like가 (document 즉 html에) 없는 상태에서 이벤트리스터를 등록하면 오류가 뜬다.
// 그래서 generateTodo가 일어나는 시점에 등록해야한다.

const handleKeypress = (e) => {     // 여기서 e는 기본적으로 제공되는 객체인데 input event가 발생했을 때 발생한 event의 정보를 담고있는 객체이다.
  if (e.keyCode === 13) {
    generateTodo(todoInput.value);
    todoInput.value = "";
  }
}

const generateTodo = (todo) => {
  const li = document.createElemnet("li");
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
  span.appendChild(icon);
  console.log(span);
  return span;      // return을 통해 반환 받은 것을 다시 likeSpan로 가져가 사용할 수 있다.
}

const generateItem = (todo) => {
  const span = document.createElement("span");
  span.classList.add("todo-item");
  span.innerText = todo;
  return span;
}

const generateManage = (todo) => {
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
  span.appendChild(icon1);
  span.appendChild(icon2);
  return span;
}

// generateIcon 으로 만들어보자

todoInput.addEventListener("keypress", handleKeypress)