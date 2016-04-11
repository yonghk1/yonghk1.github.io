$(document).ready(function(){

//var ring = $('<div id="ring"></div>');
//var x = $('<div id="x">X</div>');

var b1 = $('#b1');
var b2 = $('#b2');
var b3 = $('#b3');
var b4 = $('#b4');
var b5 = $('#b5');
var b6 = $('#b6');
var b7 = $('#b7');
var b8 = $('#b8');
var b9 = $('#b9');




function blink() {
    $('#press').fadeIn(500);
    $('#press').fadeOut(500);
}
setInterval(blink, 1000);



var turn = 1;


function bigGrid(){
  $('#press').click(function(){
    $('#bigGrid').show();
    $('#start').hide();
  })
}
bigGrid();

function move(){

  $('div.board').on('click',function(){
    if(turn % 2 ===0){
    if($(this).empty())
      $(this).append('<div class="ring"></div>');
      checkWinner();
      $(this).unbind('click');
      turn++;
      checkTurns();

  }else{
    if($(this).empty())
      $(this).append('<div class="x">X</div>')
      checkWinner();
      $(this).unbind('click');
      turn++;
      checkTurns();
    }


})
}
move();

function checkWinner(){
  if($(b1).children().first().hasClass('ring') && $(b2).children().first().hasClass('ring') && $(b3).children().first().hasClass('ring')){
    alert('Ring Wins!');
    window.location.reload(true);
  } else if ($(b4).children().first().hasClass('ring') && $(b5).children().first().hasClass('ring') && $(b6).children().first().hasClass('ring')){
    alert('Ring Wins!');
    window.location.reload(true);
  } else if ($(b7).children().first().hasClass('ring') && $(b8).children().first().hasClass('ring') && $(b9).children().first().hasClass('ring')){
    alert('Ring Wins!');
    window.location.reload(true);
  }
  if($(b1).children().first().hasClass('ring') && $(b4).children().first().hasClass('ring') && $(b7).children().first().hasClass('ring')){
    alert('Ring Wins!');
    window.location.reload(true);
  } else if($(b2).children().first().hasClass('ring') && $(b5).children().first().hasClass('ring') && $(b8).children().first().hasClass('ring')){
    alert('Ring Wins!');
    window.location.reload(true);
  } else if($(b3).children().first().hasClass('ring') && $(b6).children().first().hasClass('ring') && $(b9).children().first().hasClass('ring')){
    alert('Ring Wins!');
    window.location.reload(true);
  }
  if($(b1).children().first().hasClass('ring') && $(b5).children().first().hasClass('ring') && $(b9).children().first().hasClass('ring')){
    alert('Ring Wins!');
    window.location.reload(true);
  } else if($(b3).children().first().hasClass('ring') && $(b5).children().first().hasClass('ring') && $(b7).children().first().hasClass('ring')){
    alert('Ring Wins!');
    window.location.reload(true);
  }

  if($(b1).children().first().hasClass('x') && $(b2).children().first().hasClass('x') && $(b3).children().first().hasClass('x')){
    alert('X Wins!');
    window.location.reload(true);
  } else if ($(b4).children().first().hasClass('x') && $(b5).children().first().hasClass('x') && $(b6).children().first().hasClass('x')){
    alert('X Wins!');
    window.location.reload(true);
  } else if ($(b7).children().first().hasClass('x') && $(b8).children().first().hasClass('x') && $(b9).children().first().hasClass('x')){
    alert('X Wins!');
    window.location.reload(true);
  }
  if($(b1).children().first().hasClass('x') && $(b4).children().first().hasClass('x') && $(b7).children().first().hasClass('x')){
    alert('X Wins!');
    window.location.reload(true);
  } else if($(b2).children().first().hasClass('x') && $(b5).children().first().hasClass('x') && $(b8).children().first().hasClass('x')){
    alert('X Wins!');
    window.location.reload(true);
  } else if($(b3).children().first().hasClass('x') && $(b6).children().first().hasClass('x') && $(b9).children().first().hasClass('x')){
    alert('X Wins!');
    window.location.reload(true);
  }
  if($(b1).children().first().hasClass('x') && $(b5).children().first().hasClass('x') && $(b9).children().first().hasClass('x')){
    alert('X Wins!');
    window.location.reload(true);
  } else if($(b3).children().first().hasClass('x') && $(b5).children().first().hasClass('x') && $(b7).children().first().hasClass('x')){
    alert('X Wins!');
    window.location.reload(true);
  } else{
    checkTie();
  }

}


function checkTurns(){
  if(turn%2===0){
    $('h2').text("Ring\'s turn to play!")
  } else {
  $('h2').text("X\'s turn to play!")
  }
}

function checkTie(){
  if(turn === 9){
    alert('It\'s a tie!')
    window.location.reload(true);
  }
}




})










