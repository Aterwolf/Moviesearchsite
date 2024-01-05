// 배열 메소드중에 foreach, map, filter, reduce, find 중 2개 사용하기
// 화살표 함수를 한번이상 사용하기
// DOM 제어하기
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjMxYWRjMzZiMzk3MWNjM2UzOTg5OThhZDFmODRjMiIsInN1YiI6IjY1OTY0OThkZWQ5NmJjMmMyM2Y3NjE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7EGWUI2YWojjz5Gghpa9kHKXdanBd5Q373LcUZpwud4'
  }
};
//특정객체에 있는 프로퍼티에 접근할때 쓰는 방법 = .
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  //then의 값은 다음 then의 프로퍼티로 들어간다.
  //fetch로 받아온 값은 json으로 변환해줘야 쓸수 있다.
  .then(data => {
    const dataArray = data.results;
    console.log(dataArray); //dataArray값을 출력
    dataArray.forEach(function(movie){
      console.log(`${movie.title} - ${movie.release_date}`);
    });// dataArray 내 일부 값을 확인

    // DOM 조작: 선택한 영화 목록을 HTML에 추가
    const movieListElement = document.getElementById('movieList');
    //index.html에서 id가 movieList라는 이름으로 된 녀석을 부름
    dataArray.forEach(function(movie){
      const movieItem = document.createElement('div');
      //movieItem 밑에 div를 하나 만들어줌
      movieItem.classList.add('movie-card'); //만들어진 div에 css를 입히기 위해 클래스 추가
      movieItem.innerHTML = `<img src= "https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster"
      <h2>${movie.title}</h2><p>${movie.overview}</p><br><p>Rating:${movie.vote_average}</p>`;
      //div 안에 내용 추가
      movieListElement.appendChild(movieItem);  //부모에게 반환
    });
  })





//배열 매서드 foreach

