const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");

const handleKeypress = function (e) {     // 여기서 e는 기본적으로 제공되는 객체인데 input event가 발생했을 때 발생한 event의 정보를 담고있는 객체이다.
  if (e.keyCode === 13) {
    generateTodo(todoInput.value)
  }
}

const generateTodo = (todo) => {
  const li = document.createElement("li");
  const likeSpan = generateLike();
  const itemSpan = generateItem();
  const manageSpan = generateSpan();
  li.appendChild(likeSpan);
  li.appendChild(iteSpan);
  li.appendChild(manageSpan);
  todoList.appendChild(li);

}
const genrateLike = () => {
  return;
}
const genrateLike = () => {
  return;
}
const genrateLike = () => {
  return;
}

todoInput.addEventListener("keypress", handleKeypress)