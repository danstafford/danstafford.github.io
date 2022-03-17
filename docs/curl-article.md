# Using curl for testing API requests for technical writers

Curl is a popular command-line tool used by software engineers and web developers worldwide.  Its main function is to 
transfer data to and from a server.  This short tutorial covers a basic API GET request and suggests a few formatting 
options for the JSON response. 

## Why use curl?

There are some great products like Postman or Paw https://paw.cloud/ that provide a UI for testing API requests.  While 
these products have a lot of great functionality, they are either not free or require a signup.  Using these products 
also requires a learning curve.  For testing a simple API request they may require more of a time investment than is 
desired.

Using curl to test API requests is fast and straightforward.  Unlike Postman or Paw, there is no cost, signup, or 
extraneous options.  The curl command you write can easily be copied,  shared, and is a tool that is widely used by web 
developers.

## Prerequisites

To get the most out of this tutorial, a basic understanding of a few things is helpful.
- Using the command-line
- API usage
- HTTP request methods (GET, POST, UPDATE, etc.)

## Installation

Most Linux, Mac, and newer Windows machines will have curl installed  by default.  

To check if curl is installed on your system, open the terminal or console, type this command, and press enter.
```
curl -V
```

After entering this command you should have received some output  indicating which version of curl you currently have 
installed.  If you did not receive the version of curl installed on your system, please refer to the curl documentation 
to get curl running on your machine https://everything.curl.dev/get . 

## Create a GET request

Here we will use curl to make a GET request to the Dictionary API.  

The Dictionary API takes a word as a path parameter and returns a response with the word's definition, synonyms, 
antonyms, and more.

This is a Dictionary API endpoint where the path parameter <word> is the english word you are looking up.  
```
https://api.dictionaryapi.dev/api/v2/entries/en/<word>
```

Now we can use curl to get the definition of the word "quintessence".  

The command begins with curl and then uses the request option to specify this is a HTTP GET request. 
```
curl --request GET https://api.dictionaryapi.dev/api/v2/entries/en/quintessence
```

After entering this command the response from the Dictionary API is returned in JSON format.
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

The JSON response we have received back from the Dictionary API is formatted in a single line not in a very readable.  When using curl there are several options available to format the results.  

If you are using a Mac or certain Linux distributions you can use json_pp which is a utility that formats JSON into a readable format.
```
curl --request GET https://api.dictionaryapi.dev/api/v2/entries/en/quintessence | json_pp
```

If you have python installed https://www.python.org/downloads/ you can use it's JSON utility  to format the response.  https://docs.python.org/3/library/json.html#module-json.tool . 
```
curl --request GET https://api.dictionaryapi.dev/api/v2/entries/en/quintessence | python -m json.tool
```

Finally there is a JSON command line processor called jq https://stedolan.github.io/jq/ which has many formatting options.
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



## Other useful flags

There are several other curl options that may be useful when making API requests.  Please take a look at the example curl command below.  

```
curl --location --request POST 'galaxy-apis-101.glitch.me/customer' \
--header 'csm_key: test@gmail.com' \
--header 'Content-Type: application/json' \
--data '{
  "name": "Joe Smith",
  "address": "123 Main Street",
  "type": "individual"
}'
```

Header flag can be used to specify the response format?
```
--header 'Content-Type: application/json'
```
--include
--data

alternate flags -X vs --request

## Authentication


?

## Further Learning

- UPDATE, PATCH, PUT
- Curl has many options and functionality that are worth investigating in this online book https://everything.curl.dev/  




Alternatives

- Fetch API tut
- Postman - it is better
