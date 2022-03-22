# Using curl for Testing API Requests

Curl is a popular command line tool that is used by software engineers and web developers worldwide.  Its main function is to 
transfer data to and from a server.  This article provides a brief introduction to curl, an example REST API request, and 
suggests a few formatting options for the JSON response.

## Why use curl?

There are many API testing products such as [Postman](https://www.postman.com/), [Swagger](https://inspector.swagger.io/builder),
and [Paw](https://paw.cloud/) that are easy to use, cleanly designed, and full of useful features. Curl is 
not a direct replacement for these products, but it is a useful tool that has some advantages. Using curl to 
test API requests is fast and straightforward. As a command line tool, curl allows API 
requests to be made directly from your computer and in a format that can easily can be copied and shared. Unlike 
some API testing products, there is no cost, signup, or extraneous functionality.

## Prerequisites

Knowledge of the following topics will be helpful before reading this article.
- Using the command line
- A basic understanding of the four main parts of a [REST API](https://www.freecodecamp.org/news/rest-api-tutorial-rest-client-rest-service-and-api-calls-explained-with-code-examples/) request:
  - The endpoint - this is the URL of the server where the resource is located
  - The [HTTP request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) - GET, POST, DELETE, POST, etc.
  - The request headers - information included with the request or response such as an API key or response format
  - The request body (data) - additional data to be sent with the request


## Installation

Most Mac, Linux, and newer Windows machines will have curl installed by default. To check if curl is installed on your 
system, open the terminal or console, type this command, and press enter.
```
curl -V
```

After entering this command, you should receive an output indicating which version number of curl you currently have 
installed.  If you did not receive a version number, please refer to the curl documentation for machine specific installation 
instructions [https://everything.curl.dev/get](https://everything.curl.dev/get). 

## Create a GET request

Here is an example where we can use curl to make a GET request to the [Dictionary API](https://dictionaryapi.dev/). 

The Dictionary API endpoint takes a word as the path parameter `<word>` and returns its definition and other data.
```
https://api.dictionaryapi.dev/api/v2/entries/en/<word>
```

Here is a curl command where we get the response for the word "quintessence".
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

## Format the results

The JSON response we have received back from the Dictionary API is formatted into a single line that is not easy to read.  To 
improve this, there are several options available to format the results.

For Mac or certain Linux distributions, using the `json_pp` utility is one formatting option.
```
curl --request GET https://api.dictionaryapi.dev/api/v2/entries/en/quintessence | json_pp
```

If [Python](https://www.python.org/downloads/) is installed on the machine, its [JSON utility](https://docs.python.org/3/library/json.html#module-json.tool) 
can be used to format the response. 
```
curl --request GET https://api.dictionaryapi.dev/api/v2/entries/en/quintessence | python -m json.tool
```

Finally, there is a JSON command line processor called [jq](https://stedolan.github.io/jq/), which requires an installation, but has many formatting options.
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


## Other curl options

There are several other curl options that are frequently used for API requests.  

- The `--include` option includes the HTTP response headers with the output that is printed to the console.  This is useful for 
receiving the [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) of the request. 

- The `--header` option allows extra headers to be included in the request.

- The `--data` option specifies data to be included in the request. When JSON is the media type being used as the data, make sure to include 
the header `Content-Type: application/json` to indicate this.

Here is an example curl command that uses the three options described above. This command makes a `POST` request to a 
fictional endpoint. Please also notice the backslashes that break this command into multiple lines and make it easier to read.

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

On the first line of this curl command the `--request` option is used and specifies that this is a `POST` request. It
is followed by the `--include` option which displays the HTTP response headers.
```
curl --request POST 'https://example/v2/users' \
--include \
...
```

There are three instances of the `--header` option being used in this command. The first includes an API key, the second specifies JSON as the media type that is 
being sent, and the third specifies JSON as the media type of the response. 
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

The goal of this article was to provide an initial look at using curl for testing API requests. There is 
much more to learn about this topic.  Please see the [additional resources](#additional-resources) 
below for a few curl links and a small list of free APIs that are useful for testing.

## Additional resources

- Curl manual [https://curl.se/docs/manpage.html](https://curl.se/docs/manpage.html)
- Curl online book [https://everything.curl.dev/](https://everything.curl.dev/)
- Free APIs
  - [https://swapi.dev/](https://swapi.dev/)
  - [https://dictionaryapi.dev/](https://dictionaryapi.dev/)
  - [https://openweathermap.org/api](https://openweathermap.org/api)
  - [https://petstore.swagger.io/](https://petstore.swagger.io/)
- API testing products
  - [https://www.postman.com/](https://www.postman.com/)
  - [https://inspector.swagger.io/builder](https://inspector.swagger.io/builder)
  - [https://paw.cloud/](https://paw.cloud/)
