import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "633facbac011c92ba0a50341dc720931",
    language: "en-US"
  }
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
      // append_to_response의 역할을 잘 생각해보자. => 보통 개별 DB들의 정보(ex_ 사진, 비디오)들을 가지고 올때 사용
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
      // search에서 query는 실제 검색창에 입력하는 것을 지칭한다.
      // encodeURIComponent는 공백 문자, 기호 등을 string으로 인코딩 해주기위한 함수이다.
      // 사실 axios get으로 데이터 요청을 할 때 encoding 하는 부분은 따로 encodeURIComponent 사용하지 않아도 기본적으로 axios에서 지원해주기 때문에 사용할 필요가 없다.
    })
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};