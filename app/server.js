const express = require('express');
const app = express();
const bodyParser = require ('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(function(req, res){
    res.send('hello world');
} )


app.listen(8080, function() {
    console.log('api server 8080 port')
})



const rp = require('request-promise');
const cheerio = require('cheerio');


const options = {
    uri: `http://boards.4chan.org/biz/catalog`,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64)'
      },
    // function (error, response, html) {
    //     if (!error && response.statusCode == 200) {
    //         var $ = cheerio.load(html);
    //         return $('div.teaser').text();
    //     }
    // }
    
};

  rp(options)
  .then((data) => {
    var $ = cheerio.load(data, {
        normalizeWhitespace: true,
        xmlMode: true,
        decodeEntities: true

    });
    
    var captured = $('script').get()[2].children[0].data;
    var count = (captured.match(/ bitcoin /g) || []).length;

    console.log(count)
  })
  .catch((err) => {
    console.log(err);
  });

