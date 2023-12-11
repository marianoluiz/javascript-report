// dom manipulation

// event delegation

  // it allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descenrdants that match a selector.



  //in this example mano mano tayo nag lalagay sa sinelect natin ng event listener

  //you can comment out muna yung code sa pinaka baba (event delegation sample) para hindi madoble yung console.log 


document.querySelector('#football').addEventListener('click',function(e){
  console.log('football is clicked');

  const target = e.target;
  //btw function(e) is event object, pag triny mo console.log(e); lalabas yung infos about sa event
  //access natin yung target which is nasa loob ng e, e.target; eto yung target element na clinick natin.

  if(target.matches('li')) {
    target.style.backgroundColor = 'lightgrey'
  }
  // method matches checks if target matches na isang li tag; para specific yung maselect natin na gusto natin at maiwasan ma-select ang ibang bagay in rare cases.

  //nangyayari is nag iiba bg color pag clinick natin yung #football
  //napriprint din sa console kung yung string

  //ganon din sa the rest
});

document.querySelector('#basketball').addEventListener('click',function(e){
  console.log('basketball is clicked');

  const target = e.target;

  if(target.matches('li')) {
    target.style.backgroundColor = 'lightgrey'
  }
});

document.querySelector('#boxing').addEventListener('click',function(e){
  console.log('boxing is clicked');

  const target = e.target;

  if(target.matches('li')) {
    target.style.backgroundColor = 'lightgrey'
  }
});

document.querySelector('#tennis').addEventListener('click',function(e){
  console.log('tennis is clicked');

  const target = e.target;

  if(target.matches('li')) {
    target.style.backgroundColor = 'lightgrey'
  }
});

document.querySelector('#golf').addEventListener('click',function(e){
  console.log('golf is clicked');
  const target = e.target;

  if(target.matches('li')) {
    target.style.backgroundColor = 'lightgrey'
  }
});


// we can use delegation to make it easier and faster





document.querySelector('#sports').addEventListener('click', function(e){

  console.log(e.target.getAttribute('id')+ ' is clicked');

  const target = e.target;

  if(target.matches('li')) {
    target.style.backgroundColor = 'lightgrey'
  }
})

//instead na gawan event listener bawat <li>, ganito nalang ginawa natin

//sinelect yung parent tapos sa console.log pala lalabas kung anong element clinick natin.
