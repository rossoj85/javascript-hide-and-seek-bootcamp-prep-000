function getFirstSelector(x){
  return document.querySelector(x)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('.ranked-list')
/* here set the list items to a ariable. Remember that they are liek arrays
this is useful in the next step bcause now I can get their length*/
  for(var i=0;i<lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+n
  }
}


//node.children[0] returns the first child of the of the no
function deepestChild(){
 let node = document.querySelector('#grand-node');
 let nextNode = node.children[0]

 // we use while loop cause we don't know how many times it will have gto run
 while(nextNode) {
   node = nextNode
   nextNode=node.children[0]
   }
return node
}
