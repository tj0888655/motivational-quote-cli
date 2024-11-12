const axios = require('axios');



getQuote('https://zenquotes.io/api/random/');




function getQuote(url)
{
  axios.get(url)
  .then(function (e) {
    console.log(
      "------------------------------------ Here's a motivational quote for you: -------------------------------------\n" 
      + 
      `\n           "${e.data[0].q}"\n                      - ${e.data[0].a}\n`
      +
      "\n---------------------------------------------------------------------------------------------------------------");
  })
  .catch(function () {
    console.log('Could not fetch quote, Try again later');
  });
}