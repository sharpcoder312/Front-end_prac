import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "633facbac011c92ba0a50341dc720931",
    language: "en-US"
  }
});

api.get("tv/popular")
// get할 url 입력 시, 처음에 /를 쓰는 것은 절대 경로를 의미하는데  
// /를 쓰고 절대 경로로 접근하게 되면 baseURL를 덮어쓰기 하는 꼴이기 때문에 상대경로로 접근하자. 

export default api;