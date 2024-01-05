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
  //then의 값은 다음 then의 프로퍼티로 들어간다. 즉 response.json이 다음then의 data로 들어간것
  //fetch로 받아온 값은 json으로 변환해줘야 쓸수 있다.
  .then(data => {
    let dataArray = data.results;
    console.log(dataArray); //dataArray값을 출력
    dataArray.forEach(function (movie) {
      // console.log(`${movie.title} - ${movie.release_date}`);
    });// dataArray 내 일부 값을 확인

    //사이트내에 API로 받아온 값중 제목, 사진, 내용, 평점만 출력하게 div를 생성해서 css를 입힘.
    // DOM 조작: 선택한 영화 목록을 HTML에 추가
    const movieListElement = document.getElementById('movieList');
    //index.html에서 id가 movieList라는 이름으로 된 녀석을 부름
    dataArray.forEach(function (movie) {
      const movieCard = document.createElement('div');
      //movieItem 밑에 div를 하나 만들어줌
      movieCard.setAttribute("id", `${movie.id}`); // 만들어진 div에 id를 입히기 위해 id 추가(+문자열에 변수값을 넣고싶을때는 ``을 사용)
      movieCard.setAttribute("class", "movie-card"); //만들어진 div에 css를 입히기 위해 클래스 추가
      movieCard.innerHTML = `
      <img src= "https://image.tmdb.org/t/p/w500${movie.poster_path}">
      <h2>${movie.title}</h2>
      <p>${movie.overview}</p>
      <br><p>Rating:${movie.vote_average}</p>`;
      //div 안에 내용 추가
      movieListElement.appendChild(movieCard);  //부모에게 반환
    });

    //입력칸에 제목을 입력하고 검색을 누르면 입력한 내용에 해당되는 영화만 출력

    let inputData = document.getElementById('inputtext');
    const clickSearch = document.getElementById('inputbtn');

    clickSearch.addEventListener('click', function () {
      const searchResult = dataArray.filter(function (movie) {
        return movie.title.toUpperCase().includes(inputData.toUpperCase());// toUppercase() 문자열을 대문자로 변환하여 같은지 비교
      })
        .map(function (movie) {
          return movie.id;
        })
      console.log(searchResult);

      const movieItems = document.getElementsByClassName('movie-card');
      for (const movieCard of movieItems) {
        const movieItemId = movieCard.getAttribute(`${movie.id}`);
        if (!searchResult.includes(movieItemId)) {
          movieCard.style.display = 'none';
        } else {
          movieCard.style.display = 'block';
        }
      }
    })

    // dataArray.forEach(function(movie){
    //   const movieID = document.getElementById(`${movie.id}`);

    //   if(!searchResult.includes(movie.id)){
    //     movieCard.style.display = 'none';
    //   }else{
    //     movieCard.style.display = 'block';
    //   }
    // })

  
    const clickCard = document.getElementById('id');
    clickCard.addEventListener('click',function(){
      const clickedMovieId = movie.id;
      window.alert(`${clickedMovieId}`);
    })
    

  })//inputdata에서 받은 값으로 dataArray를 filter로 돌려준 값에 해당되는 id를 가진 div를 숨겨준다.


//영화카드를 클릭하면 사진의 ID값을 나타내줌

//다시 오면 해야할일
// 버튼 만들기와 검색어 입력 값 확인하기
