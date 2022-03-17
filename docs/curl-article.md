[comment]: <> (# Using curl for testing API requests for technical writers)
[comment]: <> (# Using Curl as an API Documentation Writer)


# Using Curl for Testing API Requests

Curl is a popular command-line tool used by software engineers and web developers worldwide.  Its main function is to 
transfer data to and from a server.  This article covers a basic API GET request using curl and suggests a few formatting 
options for the JSON response. 

## Why use curl?

There are some great products such as [Postman](https://www.postman.com/) and [Paw](https://paw.cloud/) that provide a
polished user-interface and a multitude of options for testing API requests.  Both of these products have a lot of great 
functionality but both require a signup and in the case of Paw, are not free to use.  These products also have a learning curve. For 
executing a simple API request they may require more of a time investment than is desired.

Using curl to test API requests is fast and straightforward.  And unlike Postman or Paw, there is no cost, signup, or 
extraneous options.  As command-line tool curl allows you to make an API request with the most minimal of effort? work?
The API request you execute can be copied and easily shared with web developers.

## Prerequisites

To get the most out of this article, a basic understanding of a few things is helpful.
- Using the command-line
- API basics
- HTTP request methods (GET, POST, UPDATE, etc.)

## Installation

Most Linux, Mac, and newer Windows machines will have curl installed by default. To check if curl is installed on your 
system, open the terminal or console, type this command, and press enter.
```
curl -V
```

After entering this command you should receive an output indicating which version of curl you currently have 
installed.  If you did not receive the version of curl installed on your system, you may need to install it. Please 
refer to the curl documentation to get it running on your machine [https://everything.curl.dev/get](https://everything.curl.dev/get) . 

## Create a GET request

Here we will use curl to make a GET request to the [Dictionary API](https://dictionaryapi.dev/). The Dictionary API 
takes a word as a path parameter and returns a response with the word's definition, synonyms, antonyms, and more.

This is a Dictionary API endpoint where the path parameter <word> is the english word you are looking up.  
```
https://api.dictionaryapi.dev/api/v2/entries/en/<word>
```

We can use curl to get the definition of the word "quintessence".
The command begins with `curl` and then uses the `--request` option to specify this is an HTTP `GET` request. 
```
curl --request GET https://api.dictionaryapi.dev/api/v2/entries/en/quintessence
```

The response from the Dictionary API is returned in JSON format.
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

The JSON response we have received back from the Dictionary API is formatted as a single line and is not in a very readable.  When 
using curl there are several options available to format the results.  

If you are using a Mac or certain Linux distributions you can use `json_pp` which is a utility that formats JSON into a readable format.
```
curl --request GET https://api.dictionaryapi.dev/api/v2/entries/en/quintessence | json_pp
```

If you have [Python](https://www.python.org/downloads/) installed you can use it's [JSON utility](https://docs.python.org/3/library/json.html#module-json.tool) 
to format the response. 
```
curl --request GET https://api.dictionaryapi.dev/api/v2/entries/en/quintessence | python -m json.tool
```

Finally, there is a JSON command line processor called [jq](https://stedolan.github.io/jq/) which has many formatting options.
```
curl --request GET https://api.dictionaryapi.dev/api/v2/entries/en/quintessence | jq '.'
```

The standard output from all three of these options looks somewhat like this.  
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

There are several other curl options that may be useful when making API requests.  

- The `--include` option includes the HTTP response headers with what is printed to the console.  This is useful for 
receiving the HTTP status code of your request and debugging. 

- The `--header` option allows extra headers to be included in the request.

- The `--data` option specifies data to be included in the request. When using JSON as the media type make sure to include 
the header `Content-Type: application/json` to indicate this.


Please take a look at this example curl command below. As a note, the backslash you see in this example allows a command to be 
broken into multiple lines in a Mac or Linux environment.
```
curl --request POST 'https://gorest.co.in/public/v2/users' \
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

You should see that this is a POST request.
```
curl --request POST 'https://gorest.co.in/public/v2/users'
...
```

The`--include` option displays the HTTP response headers. 

There are three headers, the first includes an API key, the second and third specify JSON as the media type that is 
sent and received respectively.  
```
...
--header 'api_key:test@gmail.com' \
--header 'Content-Type:application/json' \
--header 'Accept:application/json' \
...
```

The `--data` option includes the JSON data of the user we are creating with this POST request.
```
...
--data '{
  "name": "Joe Smith",
  "address": "123 Main Street",
  "type": "individual"
}'
```

## Conclusion

Here is the conclusion.


## References

- UPDATE, PATCH, PUT
- curl docs
- Curl has many options and functionality that are worth investigating in this online book https://everything.curl.dev/  


