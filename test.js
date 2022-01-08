// alert('hi');

fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
.then( (response) => response.json())
.then((data)=> console.log(data))// output will be the required data
.catch( (error) => console.log(error))



document.getElementById("demo").innerHTML = data;
