var express = require('express');
const axios = require('axios');
var router = express.Router();
const apiKey = 'e44ea36b'
const url = `http://www.omdbapi.com/?apikey=${apiKey}&`

/* GET users listing. */
router.get('/', function(req, res, next) {
  let search = req.query.search;
  if(search.length ===0){
    res.send({Error : "Don't Be lazy... Enter at least a lettter"});
  }
  else{
    let modifiedUrl = url+ `s=${search}`;
    axios.get(modifiedUrl)
    .then(response=>{
     
      res.send(response.data)
    })
    .catch((err)=>res.send(err));
  }
 
  
});
router.get('/:imdbId', function(req, res, next) {
  let imdbId = req.params.imdbId;
  let modifiedUrl = url +`i=${imdbId}`;
  
  axios.get(modifiedUrl)
  .then(response=>{
    
    res.send(response.data)
  })
  .catch((err)=>res.send(err));
});

module.exports = router;
