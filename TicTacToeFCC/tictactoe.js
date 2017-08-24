$(document).ready(function(){
  //Default player turn to x
  var turn = 'X';
 //Array stores values that we will check later for a winner
  var turns = ['#','#','#','#','#','#','#','#','#'];
  //Default computer's turn
  var computersTurn = 'O';
  //Keeps track if it is the computers turn
  var gameOn = false;
 //Change players turn to X and computers turn to O
  var count = 0;
  $('#turnX').click(function(){
    turn = 'O';
    computersTurn = 'X';
      $('#turnX').removeClass('btn-primary');
  $('#turnO').addClass('btn-primary');
  });
  reset();
  $('#turnO').click(function(){
    turn = 'X';
    computersTurn = 'O';
    $('#turnO').removeClass('btn-primary');
    $('#turnX').addClass('btn-primary');
    reset();
  });
  
  function playerTurn(turn, id){
    var spotTaken = $('#' + id).text();
    if (spotTaken === '#'){
      turns[id] = turn;
      $('#' + id).text(turn);
      count++;
      winCondition(turns, turn);
      if (gameOn === false){
        computerTurn();
        winCondition(turns, computersTurn);
      }
    }
  }
  function computerTurn(){
    var taken = false;
    while(taken === false && count !==9){
      var computersMove = ((Math.random()*10).toFixed())
      var move = $('#'+computersMove).text();
      if (move === '#'){
        $('#'+computersMove).text(computerTurn);
        taken = true;
        turns[computersMove] = computerTurn;
      }
    }
  }
  
  function winCondition(currentArray, turnArray){
    if (currentArray===turnArray[0] && currentArray===turnArray[1] && currentArray===turnArray[2]){
      gameOn = true;
      reset();
      alert('Player ' + currentTurn + 'wins!(Top row across 0,1 and 2 spots)');
    }
    else if(currentArray === turnArray[0] && currentArray === turnArray[4] && currentArray === turnArray[8]){
      gameOne = true;
      reset();
      alert("Player " + currentTurn + 'wins!(Diagonal row acrross 0,4 and 8 spots)');
    }
    else if(currentArray === turnArray[0] && currentArray === turnArray[3] && currentArray === turnArray[6]){
      gameOn = true;
      reset();
      alert('Player' + currentTurn + 'wins!(Top row down 0, 3 and 6 spots)');
    }
    else if (currentArray === turnArray[1] && currentArray === turnArray[4] && currentArray === turnArray[7]){
      gameOn = true;
      reset();
      alert("Player" + currentTurn + 'wins!(Top row down 1,4 and 7 spots)');
    }
    else if (currentArray === turnArray[2] && currentArray === turnArray[5] && currentArray === turnArray[8]){
      gameOn = true;
      reset();
      alert('Player' + currentTurn + 'wins!(Top row down 2,5 and 8 spots)');
    }
    else if (currentArray === turnArray[3]  && currentArray === turnArray[4] && currentArray === turnArray[5]){
      gameOn = true;
      reset();
      alert('Player' + currentTurn + 'wins!(Middle row across 3, 4 and 5 spots)');
    }
    else if(currentArray === turnArray[6] && currentArray === turnArray[7] && currentArray === turnArray[8]){
      gameOn = true;
      reset();
      alert('Player' + currentTurn + 'wins!(Bottom row across 6,7 and 8 spots)')
    }
    else if (currentArray === turnArray[2] && currentArray === turnArray[4] && currentArray === turnArray[6]){
      gameOn = true;
      reset();
      alert('Player' + currentTurn "wins! (Diagonal row across 2, 4 and 6)");
    }
    else{
      gameOn = false;
    }
    
  }
  $('.tic').click(function(){
    var slot = $(this).attr('id');
    playerTurn(turn, slot);
  });
  function reset(){
    turns = ['#','#','#','#','#','#','#','#','#'];
    count = 0;
    $('.tic').text('#');
    gameOn = false;
  }
});
