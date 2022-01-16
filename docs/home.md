# Using the Javascript Fetch API

Here is a short tutorial on how to use the Javascript Fetch API.
In this tutorial we will create a basic HTML webpage and Javascript file that will use the Fetch API's fetch() method to retrieve and display
data from the [Open Brewery DB](https://www.openbrewerydb.org/) API.

## What is the Fetch API and why use it?
The Fetch API is a native Javascript API and a modern alternative to Javascript's older solution to asynchronous data, `XMLHttpRequest`. 
It takes advantage of Javascript's [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object 
and allows for writing clean, readable code and easier error handling.

>The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.
>It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
> 
>-- <cite>[Mozilla Developer Network web docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)</cite> 

## Prerequisites
Basic knowledge of HTML, Javascript, and Javascript Promises.

## Step 1: Create and prepare the HTML file
Create an HTML file called `test.html` and add the following HTML boilerplate code.
This is the basic HTML code for a webpage with a title and header of "Massachusetts Breweries".
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Massachusetts Breweries</title>
  </head>
  <body>
    <h1>Massachusetts Breweries</h1>
  </body>
</html>
```

Within the `<body>` tag add a `<p>` tag with the id attribute of `demo`.
This is where the data we will fetch from the Open Brewery DB API will be displayed. 
We will also add a `<script>` tag with the `src` attribute equal set to `test.js`.
This is the name of the JS file where we will add our `fetch()` function in the next step.
```html
<p id="demo"></p>
<script src="test.js"></script>
```

Your HTML file should now look like this.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Massachusetts Breweries</title>
  </head>
  <body>
    <h1>Massachusetts Breweries</h1>
    <p id="demo"></p>
	<script src="test.js"></script>
  </body>
</html>
```

## Step 3: Using fetch() and displaying the data
Create a Javascript file called `test.js` in the same directory as the `test.html` file.
Here we will get the HTML element `demo` and assign it to a variable.
```js
let demo = document.getElementById("demo");
```

We can now use the fetch() function to retrieve data from Open Brewery DB.
The fetch() function takes the Open Brewery DB URL as a parameter and returns a promise that resolves with an HTML Response object.
You can also see we are using the query parameters `by_state` and `per_page` to filter the results by the state of Massachusetts and limiting the number of results returned to 10.
```js
fetch("https://api.openbrewerydb.org/breweries?by_state=massachusetts&per_page=10")
```

Now we can use the then() function which will run on the completion of the fetch() function.
It will return another Promise object and has a json() callback function.
This will parse the results into JSON format.
```js
fetch("https://api.openbrewerydb.org/breweries?by_state=massachusetts&per_page=10")
  .then(response => response.json())
```

We can now chain another then() function to use the JSON data.
Here we are using the map() function to loop through the JSON data and add the name of each brewery to the 'demo' HTML tag we created earlier.
```js
fetch("https://api.openbrewerydb.org/breweries?by_state=massachusetts&per_page=10")
  .then(response => response.json())
  .then(data => {
    data.map(brewery => {
      demo.innerHTML += `${brewery.name}` + '<br>'
    })
  })
```

Finally, we can print any errors that we have encountered to the console.
```js
fetch("https://api.openbrewerydb.org/breweries?by_state=massachusetts&per_page=10")
  .then(response => response.json())
  .then(data => {
    data.map(brewery => {
      demo.innerHTML += `${brewery.name}` + '<br>'
    })
  })
  .catch(error => {
    console.error(error);
  });
```

## Results
And that is it!
You are using the Fetch API to asynchronously load and display a list of 10 breweries from Massachusetts.

>![breweries](breweries.png)

## Resources
Of course there is more to the Fetch API than we have covered here. 
Here are some good resources for further learning.

- For a more in-depth explanation of the Fetch API please refer to the [Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- [https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)
- [https://developers.google.com/web/updates/2015/03/introduction-to-fetch](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)

















