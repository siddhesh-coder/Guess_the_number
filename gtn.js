function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInt = getRandomInt(1, 100);
 // Parse user input

function check(put) {
  let userNum;
  let score = 0;
  let temp = 0;
  while(true){
  userNum = prompt("Input your number:");
  userNum = parseInt(userNum);

    if(userNum > 100 || userNum < 0){
      console.log("Your number should lay between 1 to 100");
      break;
    }
    
  if (put === userNum) {
    console.log("Yes you guess right number");
    break;
  } else if (put < userNum) {
    temp += 1;
    console.log("Your number is greater than random number");
  } else {
    temp += 1;
    console.log("Your number is smaller than random number");
  }   
  };
  score = 100 - temp;
    console.log("your score for this game is:"+score);
}


check(randomInt);
console.log("Random Number is:"+randomInt);
