import React from "react";
import PropTypes from "prop-types"

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <span>{rating} / 5.0</span>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.2
    },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.2
    },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.2
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.2
    },
];

// 콜백함수로 App() return 값의 주석 부분과 사용할 수도 있겠다.
// function rederFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />
// }

function App() {
  return (
    <div>
      {foodILike.map(dish => ( // {} 바인딩 시, 중괄호 안에는 js expression을 모두 넣을 수 있다. 함수도 return되는 하나의 값으로 수렴하기에 expression의 조건을 충족시킨다.
        <Food  
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating}
        /> // 객체 상태의 배열의 원소들을 element 상태로 변환 해주기 위해 map함수 사용.
      ))} 
    </div>
    // <div>
    //   {foodILike.map(renderFood)}
    // </div>
  );
}

export default App;