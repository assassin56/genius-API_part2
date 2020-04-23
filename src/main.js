import { Genius } from './scripts.js';
// import $ from 'jquery';


$(document).ready(function () {
  const song = $('#artist').val();
  $('#song').val("");

  (async () => {
    let Genius = new Genius();
    const response = await Genius.getArtistbySong(song);
    getElements(response);
  })();

  function getElements(response) {
    if (response) {
      $('.showArtist').text('The Artist for ${song} is ${response.artist}%');
    } else {
      $('.showArtist').text('There was an error handling your request');
    }
  }

});


//response.hit.pimary_artist.name
// "name": "The Beatles",g