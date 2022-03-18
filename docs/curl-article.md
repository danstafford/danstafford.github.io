# Using Curl for Testing API Requests

Curl is a popular command-line tool that is used by software engineers and web developers worldwide.  Its main function is to 
transfer data to and from a server.  This article provides a brief introduction to curl, an example API request, and 
suggests a few formatting options for the JSON response.

## Why use curl?

There are many API testing products such as [Postman](https://www.postman.com/), [Swagger](https://inspector.swagger.io/builder),
and [Paw](https://paw.cloud/) that are easy to use, cleanly designed, and are full of features. Curl is 
not a direct replacement for these products, but it is a useful tool that has some advantages. Using curl to 
test API requests is fast and straightforward.  As a command-line tool, curl allows you to make an API 
request right from your computer and in a format that can easily can be copied and shared cross-platform. And unlike 
some API testing products, there is no cost, signup, or extraneous functionality.

## Prerequisites

To get the most out of this article, having some knowledge of these topics is helpful:
- Using the command-line
- A basic understanding of [APIs](https://en.wikipedia.org/wiki/API)
- [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## Installation

Most Linux, Mac, and newer Windows machines will have curl installed by default. To check if curl is installed on your 
system, open the terminal or console, type this command, and press enter.
```
curl -V
```

After entering this command you should receive an output indicating which version of curl you currently have 
installed.  If you did not receive a curl version number, please refer to the curl documentation to get it installed and running on 
your machine [https://everything.curl.dev/get](https://everything.curl.dev/get) . 

## Create a GET request

Here we will use curl to make a simple GET request to the [Dictionary API](https://dictionaryapi.dev/). The Dictionary API 
takes a word as a path parameter and returns a response with that word's definition, synonyms, antonyms, and more.

This is a Dictionary API endpoint where the path parameter <word> is the english word you are requesting the definition for.  
```
https://api.dictionaryapi.dev/api/v2/entries/en/<word>
```

We can now create a curl command to get the definition of the word "quintessence".
The command begins with `curl`, uses the `--request` option, and specifies that this is an HTTP `GET` request. 
```
curl --request GET https://api.dictionaryapi.dev/api/v2/entries/en/quintessence
```

The response from the Dictionary API is returned in JSON media type.
```
[{"word":"quintessence","phonetic":"/kwɪn.ˈtɛs.əns/","phonetics":[{"text":"/kwɪn.ˈtɛs.əns/","audio":""}],"meanings":
[{"partOfSpeech":"noun","definitions":[{"definition":"A thing that is the most perfect example of its type; the most 
perfect embodiment of something; epitome, prototype.","synonyms":[],"antonyms":[]},{"definition":"A pure substance.",
"synonyms":[],"antonyms":[]},{"definition":"The essence of a thing in its purest and most concentrated form.","synonyms"
:[],"antonyms":[]},{"definition":"The fifth alchemical element, or essence, after earth, air, fire, and water","synonyms"
:[],"antonyms":[]},{"definition":"A hypothetical form of dark energy postulated to explain observations of an accelerating 
universe.","synonyms":[],"antonyms":[]}],"synonyms":[],"antonyms":[]},{"partOfSpeech":"verb","definitions":[{"definition":
"To reduce to its purest and most concentrated essence.","synonyms":[],"antonyms":[]}],"synonyms":[],"antonyms":[]}],
"license":{"name":"CC BY-SA 3.0","url":"https://creativecommons.org/licenses/by-sa/3.0"},"sourceUrls":
["https://en.wiktionary.org/wiki/quintessence"]}]
```

## Formatting the results

The JSON response we have received back from the Dictionary API is formatted as a single line and is not in a very readable state.  When 
using curl there are several options available to format the results.  

If you are using a Mac or certain Linux distributions, using the `json_pp` utility is a formatting option.
```
curl --request GET https://api.dictionaryapi.dev/api/v2/entries/en/quintessence | json_pp
```

If you have [Python](https://www.python.org/downloads/) installed on your machine you can use its [JSON utility](https://docs.python.org/3/library/json.html#module-json.tool) 
to format the response. 
```
curl --request GET https://api.dictionaryapi.dev/api/v2/entries/en/quintessence | python -m json.tool
```

Finally, there is a JSON command line processor called [jq](https://stedolan.github.io/jq/), which also requires an installation, but has many formatting options.
```
curl --request GET https://api.dictionaryapi.dev/api/v2/entries/en/quintessence | jq '.'
```

The standard output from all three of these formatting options will look somewhat like this.  
```
[
   {
      "license" : {
         "name" : "CC BY-SA 3.0",
         "url" : "https://creativecommons.org/licenses/by-sa/3.0"
      },
      "meanings" : [
         {
            "antonyms" : [],
            "definitions" : [
               {
                  "antonyms" : [],
                  "definition" : "A thing that is the most perfect example of its type; the most perfect embodiment of something; epitome, prototype.",
                  "synonyms" : []
               },
               {
                  "antonyms" : [],
                  "definition" : "A pure substance.",
                  "synonyms" : []
               },
               {
                  "antonyms" : [],
                  "definition" : "The essence of a thing in its purest and most concentrated form.",
                  "synonyms" : []
               },
               {
                  "antonyms" : [],
                  "definition" : "The fifth alchemical element, or essence, after earth, air, fire, and water",
                  "synonyms" : []
               },
               {
                  "antonyms" : [],
                  "definition" : "A hypothetical form of dark energy postulated to explain observations of an accelerating universe.",
                  "synonyms" : []
               }
            ],
            "partOfSpeech" : "noun",
            "synonyms" : []
         },
         {
            "antonyms" : [],
            "definitions" : [
               {
                  "antonyms" : [],
                  "definition" : "To reduce to its purest and most concentrated essence.",
                  "synonyms" : []
               }
            ],
            "partOfSpeech" : "verb",
            "synonyms" : []
         }
      ],
      "phonetic" : "/kwÉªn.ËtÉs.Éns/",
      "phonetics" : [
         {
            "audio" : "",
            "text" : "/kwÉªn.ËtÉs.Éns/"
         }
      ],
      "sourceUrls" : [
         "https://en.wiktionary.org/wiki/quintessence"
      ],
      "word" : "quintessence"
   }
]
```


## Other useful curl options

There are several other curl options that are useful when making API requests.  

- The `--include` option includes the HTTP response headers with the output that is printed to the console.  This is useful for 
receiving the HTTP status code of your request. 

- The `--header` option allows extra headers to be included in the request.

- The `--data` option specifies data to be included in the request. When using JSON as the media type make sure to include 
the header `Content-Type: application/json` to indicate this.

  
Here is an example curl command using the options described above.  As a side note, we are using a fictional endpoint in 
this example. You may also notice we are using backslashes to break the command into multiple lines.  Using backslashes can help make a 
curl command easier to read.
```
curl --request POST 'https://example/v2/users' \
--include \
--header 'api_key:test@gmail.com' \
--header 'Content-Type:application/json' \
--header 'Accept:application/json' \
--data '{
  "name": "Joe Smith",
  "address": "123 Main Street",
  "type": "individual"
}'
```

On the first line of this curl command the `--request` option is used to specify that this is a `POST` request. It
is followed by the `--include` option which displays the HTTP response headers.
```
curl --request POST 'https://example/v2/users' \
--include \
...
```

There are three instances of the `--header` option being used in this command. The first includes an API key, the second specifies JSON as the media type that is 
being sent, and the third specifies the media type of the response. 
```
...
--header 'api_key:test@gmail.com' \
--header 'Content-Type:application/json' \
--header 'Accept:application/json' \
...
```

The `--data` option includes the JSON data we are sending with this POST request.
```
...
--data '{
  "name": "Joe Smith",
  "address": "123 Main Street",
  "type": "individual"
}'
```

## Conclusion

Hopefully this article provided you with an introductory understanding of using curl for testing API requests. There is 
much more to learn about using curl that is not covered here.  Please see the [additional resources](#additional-resources) 
below some useful links and a small list of free APIs that are useful for testing API tools.

## Additional resources

- Curl manual [https://curl.se/docs/manpage.html](https://curl.se/docs/manpage.html)
- Everything curl online book [https://everything.curl.dev/](https://everything.curl.dev/)
- HTTP response status codes [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- Free APIs
  - [https://swapi.dev/](https://swapi.dev/)
  - [https://dictionaryapi.dev/](https://dictionaryapi.dev/)
  - [https://openweathermap.org/api](https://openweathermap.org/api)
  - [https://petstore.swagger.io/](https://petstore.swagger.io/)
- Other API testing tools
  - [Postman](https://www.postman.com/)
  - [Swagger Inspector](https://inspector.swagger.io/builder)
  - [Paw](https://paw.cloud/)