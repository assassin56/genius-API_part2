// UI Logic

import { Genius } from './scripts.js';
import $ from 'jquery';


$(document).ready(function () {


  $('#songTitle').submit(function (event) {
    event.preventDefault();
    const song = $('#songInput').val();
    console.log(song);
    // $('#songInput').val("");


    (async () => {
      let myGenius = new Genius(); 
      const response = await myGenius.getAPI(song);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        // console.table(response.response.hits[0].result.primary_artist);
       
        $('.showArtist').text(`The Artist for "${song}" is ${response.response.hits[0].result.primary_artist.name}`);
      } else {
        $('.showArtist').text('There was an error handling your request');
     
    }
  }

  });
});


//response.hit.pimary_artist.name
// "name": "The Beatles",g