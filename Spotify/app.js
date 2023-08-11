const { appendFile } = require("graceful-fs");
const { default: SpotifyWebApi } = require("spotify-web-api-js");

//show and hide dropdown list item on button click  
function showDropdown() {  
    var click = document.getElementById("dropdown");  
    if(click.style.display === "none") {  
       click.style.display = "block";  
    } else {  
       click.style.display = "none";  
    }   
 }
 

/*********************************************************************************************/

var Spotify = require('spotify-web-api-js');
var s = new Spotify();

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('BQC6zazU1OoUjDFvDHqZaogUTLTE_ZjA0raeMMEgyuZDEeYMLINirfejZZBHsEAfpKgg4wOc-Sku1J2ZPuCVzS00VTbMV7ptCb72w4TVs2--Hrfd__uFlPa58P5XNGgCI62nycVWPsMDUo2LGnMmCK8i2oTFy5ul4-cA7oKubv7JKdZl1Qs4m4s5HU-zr5QgjsTiiFuHuh7NGTqWI0DQMy5kNLexpymc863CIkkJe-N4vHllOwNcmW1KAo25YSFph26gLq4RTddo8weQ0g2ysfnMG6Mk23n3tviiv5VK0wCbCQ');

spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
    if (err) console.error(err);
    else console.log('Artist albums', data);
  });
  

// passing a callback - get Elvis' albums in range [20...29]
spotifyApi.getArtistAlbums(
    '43ZHCT0cAZBISjO8DG9PnE',
    { limit: 10, offset: 20 },
    function (err, data) {
      if (err) console.error(err);
      else console.log('Artist albums', data);
    }
  );

  var spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken('BQC6zazU1OoUjDFvDHqZaogUTLTE_ZjA0raeMMEgyuZDEeYMLINirfejZZBHsEAfpKgg4wOc-Sku1J2ZPuCVzS00VTbMV7ptCb72w4TVs2--Hrfd__uFlPa58P5XNGgCI62nycVWPsMDUo2LGnMmCK8i2oTFy5ul4-cA7oKubv7JKdZl1Qs4m4s5HU-zr5QgjsTiiFuHuh7NGTqWI0DQMy5kNLexpymc863CIkkJe-N4vHllOwNcmW1KAo25YSFph26gLq4RTddo8weQ0g2ysfnMG6Mk23n3tviiv5VK0wCbCQ');
  spotifyApi
    .getUserPlaylists() // note that we don't pass a user id
    .then(
      function (data) {
        console.log('User playlists', data);
      },
      function (err) {
        console.error(err);
      }
    );

    /*************************************************************************************** */
    
    function search() {
    const searchbox = document.getElementById("myInput").value.toUpperCase();
    const storesongs = document.getElementById("Musics");
    const songs = document.querySelectorAll("#songs");
    const sname = storesongs.getElementsByTagName("h1");

    for (var i = 0; i < sname.length; i++) {
        let match = songs[i].getElementsByTagName('h1')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                songs[i].style.display = "";
            } else {
                songs[i].style.display = "none";
            }
        }
    }
}

/****************************************************************************************/

