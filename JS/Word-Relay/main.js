let number = Number(prompt("참가 인원을 말해주세요"));
const $button = document.querySelector("button");
const $input = document.querySelector("input");
const $word = document.querySelector(".word");
const $order = document.querySelector(".order");
let word;   // 제시어 
let newWord;    // 현재 단어

const onClick = () => {
  if (!word || word[word.length - 1] === newWord[0]) {  // 제시어가 비거나 올바른 단어인가?
    word = newWord;                                     // 입력한 단어가 제시어가 된다
    $word.innerText = word;                             // 화면에 제시어 표시
    if (Number($order.innerText) + 1 > number) {
      $order.innerText = 1;
    } else {
      $order.innerText = Number($order.innerText) + 1
    }
  } else {
    alert('틀렸다능'); 
  }
  $input.value = ""
  $input.focus();
}

const onInput = (e) => {
  newWord = e.target.value; // 입력한 단어를 현재 단어로
}

const onEnter = (e) => {
  newWord = e.target.value; // 입력한 단어를 현재 단어로
  if (!word || word[word.length - 1] === newWord[0]) {
    word = newWord;
    $word.innerText = word;
    if (Number($order.innerText) + 1 > number) {
      $order.innerText = 1;
    } else {
      $order.innerText = Number($order.innerText) + 1
    }
    $input.value = ""
    $input.focus();
  } else {
    alert('You lost');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}

$button.addEventListener('click', onClick);
$input.addEventListener('input', onInput);
$input.addEventListener('keypress', onEnter);

