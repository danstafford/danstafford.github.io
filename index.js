
var demo = document.getElementById("demo");

fetch("https://api.openbrewerydb.org/breweries?by_state=massachusetts&per_page=3")
  .then((response) => response.json())
  .then((data)=> {
      data.map(function(brewery) {
        demo.innerHTML += `${brewery.name}` + '<br>';
      })
  .catch((error) => console.log(error))
});
