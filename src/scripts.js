// Business Logic

export class Genius {

  async getAPI(song) {
    try {
      let response = await fetch(`http://api.genius.com/search?q=${song}&access_token=${process.env.API_KEY}`);
      // let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${song}&appid=${process.env.API_KEY2}`);
      // https://api.discogs.com/artists/1?callback=callbackname
      // let response = await fetch(`api.discogs.com/artists/1?q=${song}&access_token=${process.env.API_KEY3}`);

      //response.hit.pimary_artist.name
      // "name": "The Beatles",g


      let jsonResponse;
      if (response.ok && response.status == 200) {
        jsonResponse = await response.json();
      } else {
        jsonResponse = false;
      }
      console.log(jsonResponse);
      return jsonResponse;
    } catch (error) {
      return false; // or error message?
    }

  }
}