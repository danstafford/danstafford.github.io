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
