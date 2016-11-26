var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

/*app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

/*app.get('/ui/krishnan.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'krishnan.jpg'));
});*/

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'srt-resume.html'));
});
app.get('/ui/blog.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog.html'));
});
app.get('/ui/resume.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'resume.css'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/show.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'show.css'));
});
/*app.get('/ui/srt.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'srt.png'));
});*/
app.get('/ui/krishnan.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'krishnan.jpg'));
});
app.get('/ui/search.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'search.jpg'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
