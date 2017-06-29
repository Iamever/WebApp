let Mock  = require('mockjs');
let Random = Mock.Random;

module.exports = function() {
  var data = { 
      goodsList1: [],
      goodsList2: []

  };
  
  // var images = [1,2,3].map(x=>Random.image('100x100', Random.color(), Random.word(2,6)));
  var images = Random.image('100x100', Random.color(), Random.word(2,6));

  for (var i = 0; i < 10; i++) {
      
    var content = Random.cparagraph(0,10);

    data.goodsList1.push({
         // id: i, 
         name: Random.cword(8,20),
         // desc: content.substr(0,40),
         // tag: Random.cword(2,6),
         price: Random.integer(10,5000),
         images: images
    })

    data.goodsList2.push({
         // id: i, 
         name: Random.cword(8,20),
         // desc: content.substr(0,40),
         // tag: Random.cword(2,6),
         price: Random.integer(10,5000),
         images: images
    })
  }

  return data
}