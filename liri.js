require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var keys = require("./keys.js");
var bandsintown = require('bandsintown')("codingbootcamp");
var Spotify = require("node-spotify-api");


var spotify = new Spotify(keys.spotify);


userCommand = process.argv[2]


//Switch statement to determine user input
switch(userCommand) {
case "concert-this":
concertThis();
break;

case "spotify-this-song":
spotifyThis();
break;

case "movie-this":
movieThis();
break;

case "do-what-it-says":
doWhat();
break;

}


//function for concert-this----------------
function concertThis () {

    var nodeArgs = process.argv;

    // Create an empty variable for holding the movie name
    var concertName = "";

    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 3; i < nodeArgs.length; i++) {

     if (i > 3 && i < nodeArgs.length) {
            concertName = concertName +  " " + nodeArgs[i];         
        } else {
            concertName += nodeArgs[i];
          }
            
    }

    
    var concertURL = "https://rest.bandsintown.com/artists/" + concertName + "/events?app_id=codingbootcamp"

    axios
    .get(concertURL)
    .then(function(response) {
     console.log(response)
     for (i = 0; i < response.data.length; i++) {

     console.log(response.data[i].venue.name);
     console.log("-----------------------------------------------------")
     console.log(response.data[i].venue.country + ", " + response.data[i].venue.city + ", " + response.data[i].venue.region)
     console.log("-----------------------------------------------------")
     console.log(moment(response.data[i].datetime).format('MMMM Do YYYY, h:mm:ss a'));
     
   
     

     }

     console.log(response.data[0].venue)
    })

    .catch(function(error) {
        if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
        } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
        } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        }
        console.log(error.config);
    });

    }




//function for spotify-this-----------------
function spotifyThis () {

   var nodeArgs = process.argv

   var songName = "";

   for (i = 3; i < nodeArgs.length; i++){

     songName = songName + nodeArgs[i] + "";

   }

 //var songURL ="" + songName +;

   axios
    .get(songURL)
    .then(function(response) {
     console.log(response)
    })

    .catch(function(error) {
        if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
        } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
        } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        }
        console.log(error.config);
    });

}




//function for movie-this------------------
function movieThis () {

    var nodeArgs = process.argv;

    // Create an empty variable for holding the movie name
    var movieName = "";
    
    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 3; i < nodeArgs.length; i++) {
    
  
         movieName = movieName + nodeArgs[i] + "+";
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);

    axios.get(queryUrl).then(
    function(response) {
        // console.log(response)
        console.log("Title: " + response.data.Title)
        console.log("-----------------------------------------------------")
        console.log("Year: " + response.data.Year)
        console.log("-----------------------------------------------------")
        console.log("Rated: " + response.data.Rated)
        console.log("-----------------------------------------------------")
        console.log("Imbd: " + response.data.imdbRating)
        console.log("-----------------------------------------------------")
        console.log("RT Score: " + response.data.Ratings[1].Value)
        console.log("-----------------------------------------------------")
        console.log("Country: " + response.data.Country)
        console.log("-----------------------------------------------------")
        console.log("Language: " + response.data.Language)
        console.log("-----------------------------------------------------")
        console.log("Plot: " + response.data.Plot)
        console.log("-----------------------------------------------------")
        console.log("Actors: " + response.data.Actors)
        
    })
    .catch(function(error) {
        if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
        } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
        } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        }
        console.log(error.config);
    });

     
    }
    



//function for do-what-it-says--------------------------
function doWhat() {


}