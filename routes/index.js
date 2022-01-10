const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send(`
  <h1>Hello!</h1>
  <h2>Commands to try to see the data</h2>
  <h2>/id just means any number 1-9</h2>
  <h3>/api/tags</h3>  
  <h3>/api/tags/id</h3>  
  <h3>/api/products</h3> 
  <h3>/api/products/id</h3> 
  <h3>/api/categories</h3>
  <h3>/api/categories/id</h3>
  <h2>You can use insomnia in real time to update the data check the video in the readme file to get an understanding on what you can post, update, and delete on each endpoint.</h2>
   `)
});

module.exports = router;