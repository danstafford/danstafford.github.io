
let demo = document.getElementById("demo");

fetch("https://api.openbrewerydb.org/breweries?by_state=massachusetts&per_page=10")
  .then(response => response.json())
  .then(data => {
    data.map(brewery => {
      demo.innerHTML += `${brewery.name}` + '<br>'
      console.log(brewery.name)
    })
  })
  .catch(error => {
    console.error('Error: ' + error);
  });

p1.then(
  value => {console.log(value);}, reason => {console.error(reason);}
);
