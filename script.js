const numberOfFilms = +prompt('скільки фільмів ви вже подивились?', " ");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const quet1 = ('останній переглянутий фільм?', "");
const quet2 = ('яка оцінка його?', "");

personalMovieDB.movies[quet1] = quet2;

const quet3 = ('останній переглянутий фільм?', "");
const quet4 = ('яка оцінка його?', "");

personalMovieDB.movies[quet3] = quet4;
console.log(personalMovieDB);