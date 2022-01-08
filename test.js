// alert('hi');

var demo = document.getElementById("demo");


fetch("https://api.openbrewerydb.org/breweries?by_state=massachusetts&per_page=3")
.then( (response) => response.json())
.then((data)=> {
      let breweries = data;
      breweries.map(function(brewery) {
      demo.innerHTML = `${brewery.name}`;
      })
.catch( (error) => console.log(error))


  
  
  
  
// const result = JSON.parse(data);

// for (const key in result){
//   if(obj.hasOwnProperty(key)){
//     console.log(`${key} : ${res[key]}`);
//     demo.innerHTML += `${key} : ${res[key]}` + "<br>";
//   }
// }

