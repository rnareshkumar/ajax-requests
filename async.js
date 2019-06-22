window.onload = function(){

  function get(url){
    return new Promise(function(resolve, reject){
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", url, true);
      xhttp.onload = function(){
        if (xhttp.status == 200){
          resolve(JSON.parse(xhttp.response));
        } else{
          reject(xhttp.statusText);
        }
      };
      xhttp.onerror = function(){
        reject(xhttp.statusText);
      };
      xhttp.send();
  });
 }

 var promise = get("data/artists.json");
 promise.then(function(artists){
   console.log(artists)
   return get("data/music.json");
 }).then(function(music){
   console.log(music)
 }).catch(function(error){
   console.log(error);
 });

};
