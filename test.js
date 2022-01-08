// alert('hi');

fetch("https://api.openbrewerydb.org/breweries?by_state=massachusetts&per_page=3")
.then( (response) => response.json())
.then((data)=> console.log(data))// output will be the required data
.catch( (error) => console.log(error))

var result = document.getElementById("demo");

var obj = JSON.parse(data);
for (var key in obj) {
    result.innerHTML += "<br/>" + key + ": ";
}

result.innerHTML += "Total = " + obj.total;
