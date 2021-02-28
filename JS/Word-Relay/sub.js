let number = Number(prompt("몇 명이 참가하나요?"));
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('.word');
const $order = document.querySelector('.order');
let word;     // 제시어
let newWord;    // 현재 단어


const onClickButton = () => { 
  if (!word) {  // 제시어가 비어 있는가? // 여기서 !word는 그저 조건을 실행시키기 위한 장치일 뿐이다. // 헷갈리면 if(word === undefined)로 바꿔줄 수도 있다.
    word = newWord;                  // 입력한 단어 = 제시어 // 동작문의 실행자체는 word의 논리를 따르지만 조건을 실행시키기 위해 !를 붙인 것이다. 
    $word.textContent = word;        // 화면에 제시어 표시
    const order = Number($order.textContent);
    if (order + 1 > number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
    $input.value = '';
    $input.focus();
  } else {  // 비어 있지 않다
    if (word[word.length - 1] === newWord[0]) { // 올바른 단어인가?
      // 올바르다
      word = newWord; // 현재 단어를 제시어에 저장
      $word.textContent = word; // 화면에 제시어 표시
      const order = Number($order.textContent);
    if (order + 1 > number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
      }
      $input.value = '';
      $input.focus();
    } else {  // 올바르지 않다.
      alert('올바르지 않은 단어입니다!');
      $input.value = '';
      $input.focus();
    }
  }
};

const onInput = (e) => {
  newWord = e.target.value; // 입력한 단어를 현재 단어로
};


$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput);