let Mock  = require('mockjs');
let Random = Mock.Random;

module.exports = function() {
  var data = { 
      goodsList0: [],
      goodsList1: []

  };
  
  // var images = [1,2,3].map(x=>Random.image('100x100', Random.color(), Random.word(2,6)));
  var images = Random.image('100x100', Random.color(), Random.word(2,6));

  for (var i = 0; i < 10; i++) {
      
    var content = Random.cparagraph(0,10);

    data.goodsList0.push({
         // id: i, 
         name: Random.cword(8,20),
         // desc: content.substr(0,40),
         // tag: Random.cword(2,6),
         price: Random.integer(10,5000),
         images: images
    })

    
  }
  var images = Random.image('100x100', Random.color(), Random.word(2,6));
  for(var j = 0;j<6;j++){
    data.goodsList1.push({
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