// import the Media class:
const Media = require('./Media');
// create your Movie class:
class Movie extends Media{
    constructor(title, year, genre, director, duration, rating){
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }
    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }
    static longestMovie(movies){
        let longestMovie1 = movies[0];
        for(let i = 0; i<movies.length; i++){
            if(movies[i].duration > longestMovie1.duration){
                longestMovie1 = movies[i];
            }
        }
        return longestMovie1;
    }

}
// don't change below
module.exports = Movie;