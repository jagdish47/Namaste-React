# What is React ?

React is a Javascript based UI-development Library.
Facebook and an open-source community runs it. <br>
React is a libray which is widely use in web development.
react first appear in May 2013 and now most used front-end library.

# Difference between the Library and Framework ?

The Library and Fremework are code which is written by someone else to use them to solve common problem. <br>
**Library** is like you can customize you code according to you.
example - if you are building a new house so you can customize according to you which thing place to where like library is you can customize things according to you.

**Framwork** Framework is full fledge package you can't customize according to you. you can place code where they alredy defined.
exapmple-like you buy a house which is already build.

# What is Emmet ?

“Emmet is a plug in for many popular text editors which greatly improves HTML & CSS workflow:”
Using emmet you can improve you coding speed it generate all the necessary code / initial code which is importante.

# What is CDN ?

A CDN is a content delivery network. <br>
CDN is a geographically distributed group of servers which work together to provide fast delivery of Internet content.
A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

A properly configured CDN may also help protect websites against some common malicious attacks, such as Distributed Denial of Service (DDOS) attacks.

Whenever you upload you website on server than a copy to website will delivery to all the server which store in catch file of server so when a user come to website than it connect with nearest server. which make website fast and it make website more secure. CDN is not much expensive.

# What is Cross-Origin ?

Cross-Origin Resource Sharing (CORS) is a mechanism that allows web pages to make requests to a server from a different domain than the one that served the web page. This is done to prevent web pages from making requests to a different domain that could potentially be malicious or compromise user data.

CORS works by adding HTTP headers to server responses that instruct web browsers on how to handle cross-origin requests. Web browsers will only allow web pages to make requests to a different domain if the server responds with the appropriate CORS headers, or if the server is on a list of trusted domains that the web browser has been configured to allow.

CORS is an important security feature that helps protect web users from malicious websites that might try to steal user data or perform other malicious actions by making requests to other websites on behalf of the user.

# What is async and defer?

**Script** <br>
When browser starting parsing the html file it starts parsing code when browser come to script than html parsing stops and download script file and parse it after compliting the parsing than it again starts parsing the html file.

**Async** <br>
By including a script with the async attribute, the script is downloaded in parallel with the interpretation of the HTML. When the script is downloaded, it's executed, blocking the rendering until it finishes.

In this approach, the execution order of the scripts isn't guaranteed as it would totally depend on which one is downloaded first, which may vary sometimes. So for example if you load the following scripts in the same order

**Defer**
Finally, the deferred script will be downloaded asynchronously and in parallel with the HTML parsing, however, its execution is deferred until the whole HTML document has been parsed. In this case, if multiple scripts are loaded, the same loading order will be respected when executing it.

# What is diference between React and ReactDOM ?

React is JavaScript Library for building user interface. <br>
ReactDOM is JavaScript Library to interact with DOM.

# What is difference between react.development.js and react.production.js files via CDN

The **development** build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.
<br>
The **production** build, on the other hand, runs in production mode which means this is the code running on your client's machine. The production build runs uglify and builds your source files into one or multiple minimized files. It also extracts CSS and images and of course any other sources you're loading with Webpack.
