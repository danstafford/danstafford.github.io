// alert('hi');

fetch("https://api.openbrewerydb.org/breweries?by_state=massachusetts&per_page=3")
.then( (response) => response.json())
.then((data)=> console.log(data))// output will be the required data
.catch( (error) => console.log(error))

var demo = document.getElementById("demo");

for (const key in res){
  if(obj.hasOwnProperty(key)){
    console.log(`${key} : ${res[key]}`);
    demo.innerHTML += `${key} : ${res[key]}` + "<br>";
  }
}

