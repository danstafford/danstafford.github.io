// alert('hi');

fetch("http://dummy.restapiexample.com/api/v1/employees")
.then( (response) => response.json())
.then((data)=> console.log(data))// output will be the required data
.catch( (error) => console.log(error))



document.getElementById("demo").innerHTML = data;
