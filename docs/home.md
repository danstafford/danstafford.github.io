---
answer: 42
question: What is your favorite number?
---

# Headline

> An awesome project.

```php
echo "hello"
```

## Color
```js
var {{ favorite.color }}
```

## Test
{{ test }}

## Author
{{ author.name }}

## Question/Answer
{{ question }}
{{ answer }}

## Test HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test</title>
  </head>
  <body>

    <h1>Breweries</h1>
    <p id="demo"></p>
    <script src="index.js"></script>
  
  </body>
</html>
```

## Test JS
```js
var demo = document.getElementById("demo");

fetch("https://api.openbrewerydb.org/breweries?by_state=massachusetts&per_page=3")
  .then((response) => response.json())
  .then((data)=> {
      data.map(function(brewery) {
        demo.innerHTML += `${brewery.name}` + '<br>';
      })
  .catch((error) => console.log(error))
});
```

## Result
![](breweries.png)






# Introduction
This is a quick tutorial on how to use the [Javascript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
In this tutorial we will create up a basic HTML web page and Javascript (JS) file that will retrieve and display 
results from the [Open Brewery DB](https://www.openbrewerydb.org/) API.

# Prerequisites
Basic knowledge of writing HTML and JS.

[comment]: <> (# Instructions)

## Step 1: HTML Boilerplate
Create an HTML file called `test.html` and add the following HTML boilerplate code.
This is the basic HTML code for a webpage.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test</title>
  </head>
  <body>
  </body>
</html>
```

## Step 2: Add some HTML tags
Between the body tags `<body></body>` add a h1 header tag `<h1>` and a paragraph tag `<p>` with the id attribute of "demo" `id="demo"`.
The paragraph tag is where the data we will fetch in the next step will appear.  
We will also add a `<script>` tag with the `src` attribute equal to `test.js`.
This is the name of the JS file where we will add our `fetch()` function.
```html
<h1>Breweries</h1>
<p id="demo"></p>
<script src="test.js"></script>
```


## Step 3: Use the Fetch API to retrieve data
Create a Javascript file called `test.js` in the same directory as the `test.html` file.
Here we will get the HTML element `demo` and assign it to a variable.
```js
let demo = document.getElementById("demo");
```

Finally, we can use the Fetch API to retrieve data from Open Brewery DB and print the results to the page.
```js
// Here we are passing the URL of the JSON data to the `fetch()` function.
// The Open Brewery DB endpoint is filtering the results by state and limiting the results returned to 3.
fetch("https://api.openbrewerydb.org/breweries?by_state=massachusetts&per_page=3")
  // The fetch() function returns a promise that resolves with a Response object of the HTML response.
  // The json() method itself also returns a promise and resolves with the JSON data.

  .then(response => response.json())
  .then(data => {
      // Here we are looping through the JSON data array and adding the name of each brewery to the 'demo' HTML tag.
      data.map(function(brewery) {
        demo.innerHTML += `${brewery.name}` + '<br>'
      })
});
```



For a more in-depth explanation of the Fetch API please refer to the official documentation [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).




## From the official docs.
> The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation 
> of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, 
> which returns a second promise that resolves with the result of parsing the response body text as JSON.





















