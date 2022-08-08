/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/



function checkLength(usnm){
  if(usnm.length >= 3 && usnm.length <= 11){
    return true;
  }
  else{
    return false;
  }
}

function checkFirstChar(usnm){
  for(let i = 0; i < 10 ; i++){
  if(usnm[0] === `${i}`){
    return false;}

  else{continue;}
  
}
return true; 
}

function checkType(usnm){
  for (let i = 0; i < usnm.length; i++){
    if (usnm[i] === typeof('!')){
      return false;
    }
    else{
      continue;
    }
  return true;
  }
}

function validUsername(username) {
  if ( checkLength(username) && checkFirstChar(username) && checkType(username)){
  return true;
  }
  else{
    return false;
  }
}



let test = 'Mrwhiskerz'

console.log(checkLength(test));




/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  return;
}

module.exports = { validUsername, validPassword };
