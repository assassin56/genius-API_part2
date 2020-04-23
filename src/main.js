// UI Logic

import { Genius } from './scripts.js';
// import $ from 'jquery';


$(document).ready(function () {

  $('#songTitle').click(function() {
  const song = $('#songTitle').val();
  $('#songTitle').val("");

  (async () => {
    let Genius = new Genius();
    const response = await Genius.getAPI(song);
    getElements(response);
  })();

  function getElements(response) {
    if (response) {
      $('.showArtist').text('The Artist for ${searchInput} is ${response.hit.primary_artist.name}%');
    } else {
      $('.showArtist').text('There was an error handling your request');
    }
  }

});
});


//response.hit.pimary_artist.name
// "name": "The Beatles",g