# Yakmos
[Not Live Yet](https://github.com/bcwaters/yakmos)

#### Yakmos Chrome Extension
A universal comment box for any url

## Stack
Frontend built with React

Express backend with MongoDb

## How it works

- The chrome extension injects the Yakmos ReactApp into document.body. When the app is injected is will make a call to the Yakmos Rest Server which returns the comments for the current page.

- Yakmos.com will be a home page which functions similiar to extension. Example: if a user wants to add yakmos comment to their url they simply provide yakmos.com/generatedLink. The generated link returns a Screenshot of url provided with comments overlayed.

- *considering going serverless  and setting up the database calls as a microservice with AWS Lamba 

## How to run the server

clone the repo and run ```npm install ```

To run the server use ``` npm run start ```

note: make sure to add something to the mongoDB collection

## How to run the chrome extension

In chrome url bar enter: chrome://extensions

Turn on developer mode on top right

Press Load unpacked on top left

Select the directory: path/to/localRepo/chromeExtensionBuild

you can try the extension at these sites if you are curious.

[http://minusmail.com](http://minusmail.com)

[http://devwaters.com](http://devwaters.com)



