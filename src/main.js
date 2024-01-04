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
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options)
  .then(response => response.json()) //then의 값은 다음 then의 프로퍼티로 들어간다.
  .then(function(data){
    console.log(data.results);
  })
  
//배열 매서드 foreach
  
  