import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null, // 검색한 결과값
    tvResults: null, // 검색한 결과값
    searchTerm: "", // 검색 전 검색창 상태
    loading: false, // 검색을 누르면 loading이 true로 바뀜.
    error: null
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
      />
    );
  }
}