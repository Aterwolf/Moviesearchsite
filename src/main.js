const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjMxYWRjMzZiMzk3MWNjM2UzOTg5OThhZDFmODRjMiIsInN1YiI6IjY1OTY0OThkZWQ5NmJjMmMyM2Y3NjE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7EGWUI2YWojjz5Gghpa9kHKXdanBd5Q373LcUZpwud4'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
  
  //response 라는 변수에 fetch로 불러온 값을 담아둠.

 
//   function searchMovie(){
//     let test = document.getElementById("278");//1개만 반환간으
//     console.log(test);
//     // document.getElementsByClassName
//     //0개 이상 반환가능
//   }
  
// searchMovie();


// class Card{
//   constructor(id, title, overview, poster_path, vote_average){
//     this.id = id,
//     this.title = title,
//     this.overview = overview,
//     this.poster_path = poster_path,
//     this.vote_average = vote_average
//   }
// }