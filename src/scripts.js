// Business Logic

export class Genius {
 
  async getAPI() {
    try {
      let response = await fetch(`http://api.genius.com/search?q=${searchInput}&access_token=${process.env.API_KEY}`);
      

      let jsonResponse;
      if (response.ok && response.status == 200) {
        jsonResponse = await response.json();
      } else {
        jsonResponse = false;
      }
      // console.log(jsonResponse);
      return jsonResponse;
    } catch(error) {
      return false; // or error message?
    }
  }
}