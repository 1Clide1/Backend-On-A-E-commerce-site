# Backend Of An E-commerce Site
  
## Table Of Contents
  
* [Description](#Description)
  
* [Author](#Author)
  
* [Installation](#Installation)
  
* [Usage](#Usage)
  
* [Credits](#Credits)
  
* [License](#License)
  
* [Technology](#Technology)
  
## Description
  
In this project I was more focused on what was going on the backend of things. With that I fleshed out all of the needed models for this backend to function. It was all things that are usually seen in a store site, like categories, products, product tags, etc. I also specified what type of data was being recieved under each possible endpoints. When viewing each method with the help of insomnia or looking at the endpoints through a brower, you would be presented with the reletive data for that endpoint in a json format. It's pretty interesting to look through and this project helped me understand what you could do with a database and with the backend of a server. It gave me ideas on how I could utilize the front end in unique ways to represent that data.
  
## Technology
  
The technologies that are used in this app are node.js, nodemon, dotenv, express, mysql2, sequilize, mysql and javascript.
  
## Author
  
Name: Brandon Diaz
  
Contact email: brandonjustindiaz@yahoo.com
  
GitHub: [1Clide1](https://github.com/1Clide1) 

  
## Installation
  
There are actually a couple ways. Be sure to check the video walkthrough as it will give you a better understanding on how to view it with the first option. FIRST OPTION: This option you will be installing this project locally. You will first have to clone my repo. Once that Is cloned, you need to open with in your ide of choice, I use vs code, so I will be assuming you do too :). After opening in your ide, open the main folder with your integrated terminal. You will first type npm i to install of the dependencies. I recomend you install MySQL extension by cweijan to do this next step. After installing the depenencies, open the db folder go to the schema file, and add the new database to your sql server. Once that is finished, in the intergrated terminal you should be able to type npm run seed and that will give you the seeds needed for that database to be useful. After all the dependencies are installed, along with the database added and seeded it is now ready for you to create the .env file. Just use the template I have provided, all that you have to do is rename the template file to .env. All you would have to do then is enter your username and password. The ones you use for your own mysql server. Now after all that you can type npm start and the project should launch! You can then run the endpoints using your localhost with insomnia. SECOND OPTION: This option is just an interesting bonus. Like I said there is not that much when it comes to the frontend but you can still use the site and the endpoints to get the json data!! I can examples on what you can see as the homepage of the site and you can use the put, post, and delete methods with insomnia using this site and you can check in real time the effects of those methods. If you have JSON formatter extension on goole chrome downloaded you will be able to see the data parsed and get the same effect you would just using insomnia. You can also do this on localhost too!
  
## Usage
  
As of now You can only really use this as a proof of concept or testing grounds. Basically shows you things you can do using the backend of a website.
  
## Credits
  
This project was very interesting to do, I feel like I learned a lot about sql and what you can do with the backend. I gave me a better idea on how models actually look in javascript and how it's made. I also feel like I got a better understanding with what I was doing using express and insomnia. 
  
## License
  
![License](https://img.shields.io/static/v1?label=license&message=MIT&color=yellow) 

  
This project is licensed under the MIT License: To get a better look at [License] visit (https://choosealicense.com/licenses/mit/).
  

      MIT License

      Copyright (c) [2021] []
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
   