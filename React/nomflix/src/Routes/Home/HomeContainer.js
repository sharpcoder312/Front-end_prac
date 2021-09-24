import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true // error가 생긴다면 loading 또한 false로 바뀜
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying(); // promise(api에서 date return)가 끝날 때까지 await을 이용하여 기다림.
      const {
        data: { results: upcoming }
      } = await moviesApi.upcoming();
      const {
        data: { results: popular }
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch { // error를 catch
      this.setState({
        error: "Can't find movie information."
      });
    } finally {
      this.setState({
        loading: false // 항상 결과는 loading값은 false여야한다.
      });
    }
  } // 요청(playing, upcoming, popular) 수가 많지 않기에 DidMount함수 내에 한번에 처리했지만 상태값의 수가 많아진다면 
  // 각각의 요청을 분리된 함수(ex - getUpcoming())로 만들어 DidMount함수 내에서 this를 통해 따로 요청할 수도 있겠다. 

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    // console.log(this.state) try catch finally에 대한 state를 확인하기 위함.
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}