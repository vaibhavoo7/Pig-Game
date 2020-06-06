

var score, roundscore,activeplayer , gameplaying ;
newstart();


//document.querySelector('#score-0').textContent=dice;

document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('.btn-roll').addEventListener('click',function () {
  if (gameplaying) {
    //random number....
    var dice=Math.floor(Math.random() * 6) + 1;
    //display the result.....
    var dicedom = document.querySelector('.dice');
    dicedom.style.display='block';
    dicedom.src='dice-'+dice+'.png';
    if (dice!==1 && dice!==6) {
      roundscore+=dice;
      document.querySelector('#current-'+activeplayer).textContent=roundscore;
    }else {
      nextplayer();
    }

  }

});

document.querySelector('.btn-hold').addEventListener('click',function() {
  if (gameplaying) {
    //add current score to global scores.....
      score[activeplayer] += roundscore;
      //update the UI.....
      document.querySelector('#score-'+activeplayer).textContent= score[activeplayer];
      //check if playerwon the game....
      if (score[activeplayer]>=100) {
        document.querySelector('#name-'+activeplayer).textContent='winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activeplayer+'-panel').classList.remove('winner');
        document.querySelector('#name-'+activeplayer).style.color='red';
        gameplaying = false;
      }else {
        //nextplayer
          nextplayer();
      }

  }




});



function nextplayer() {

    activeplayer===0?activeplayer=1:activeplayer=0;
    roundscore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.dsiplay='none';

}

document.querySelector('.btn-new').addEventListener('click', newstart);
function newstart() {
   score=[0,0];
   roundscore=0;
   activeplayer=0;
   gameplaying=true;



   document.querySelector('.dice').style.display='none';
   document.getElementById('score-0').textContent='0';
   document.getElementById('score-1').textContent='0';
   document.getElementById('current-0').textContent='0';
   document.getElementById('current-1').textContent='0';
   document.getElementById('name-0').textContent='player 1';
   document.getElementById('name-1').textContent='player 2';

}
