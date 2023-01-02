const { link } = require("fs");
const { removeListener } = require("process");

/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

const tasks = ["eat" , "sleep" , "code" , "repeat"]

function onDataReceived(text) {



  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.startsWith('hello')) {
    hello(text);
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === "list\n"){
    printTheList();
  }
  else if(text.startsWith("add ")){
    addList(text);
  }
  else if (text.startsWith("remove")){
    removeList(text);
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}

function printTheList(){

  for(let i =  0 ; i<tasks.length ; i++){
    console.log(i+1 +")" + tasks[i]);

  }

}

function addList(text){
    let name=text.split(' ');
    if(name.length == 2 && name[0].length == 3){
      tasks.push(name[1]);
    }
}

function removeList(text){


  let words=text.split(' ');
  if(words.length == 1 && words[0] === 'remove\n'){
    tasks.splice(-1);
  }
  else if(words.length == 2 && words[0] === 'remove'){

    tasks.splice(words[1]-1, 1); 

  }
  else{
    unknownCommand(text);
  }
}


 /**
* Says hello
  *
  * @returns {void}
  */

function hello(text)
{    

  text = text.replace('\n', '').trim();
  let words=text.split(' ');
  if(words.length == 1 && words[0].length == 5){
    console.log('hello!')
  }
  else if(words.length == 2 && words[0].length == 5){
    console.log('hello ' + words[1] + '!');
  }
  else{
    unknownCommand(text);
  }
     
}
    
   



/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){

  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * put help to list all possible command
 *
 * @returns {void}
 */

 function help() {

  console.log(
    "press\n\n help. To list all possible commands.\n hello. to say hello!\n hello name to say hello name!\n quit or exit. To quit or exit the application.\n -------------------------"
  );
}








// The following line starts the application
startApp("Achraf Al Rachini")
