This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I uploaded the build version of this project on github page.
You can check the live version of this project at https://armanrozika.github.io/build-star-wars

This project was made as an assignment/test for front end developer position at loket.com

I am using swapi.co API to fetch the data. User can browse star-wars character and the page will load more data if scroll has reach bottom of the page (infinite scroll if you wish). User can also view the detail of character by click on the character list. Also, user can filter character based on films.

One important thing to note, that swapi.co API doesn't provide character list filtered by attribute (films, vehicle, etc) as default. The API does provide list of people based on films, but as a url/API endpoint, not as a ready use data, meaning I have to make more call to the API to receive character list (one by one, because it will be bad for user experience if I wait all the data to be  fetched). Thus, when you filter character by films, the character list will appear one by one.

