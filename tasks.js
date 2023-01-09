var fs = require('fs');
const fileName = process.argv[2] || 'database.json';

var fileContents
// Read the file contents
if (fs.existsSync(fileName)) {
  fileContents = fs.readFileSync(fileName, 'utf8');
} else {
  fs.writeFileSync(fileName, "[]")
  fileContents = fs.readFileSync(fileName, 'utf8');
}
// Parse the file contents as JSON
const tasks = JSON.parse(fileContents);


const { title } = require('process');
const { finished } = require('stream');
const { isUndefined } = require('util');

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

// const tasks = [{name:"eat",done:false},{name:"sleep",done:false},{name:"code",done:false},{name:"repeat",done:false}];

function onDataReceived(text) {
  test = text.replace("\n"," ").trim().split(' ');

  if (test[0] === 'quit' || test[0] === 'exit') {
    quit();
  }
  else if(test[0] === 'hello'){
    hello(text);
  }
  else if(test[0] === 'help'){
    help();
  }
  else if(test[0] === "list"){
    printTheList();
  }
  else if(test[0] === "add"){
   addList(test[1],false);
  }
  else if (test[0] === "remove"){
    removeList(test[1]);

  }
  else if (test[0] === "edit"){
    editList(test[1],test[2]);
  }
  else if (test[0] === 'check'){
    checklist(test[1]);
  }
  else if (test[0] === 'uncheck'){
    unChecklist(test[1]);
  }
  
  else if (text[0] === "json") {
    exportToJson();
  } 
  else if (text[0] === "read") {
    read();}
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
    const task = tasks[i];
    let doneMarker = '[ ]';
    if(task.done) {
      doneMarker="[✓]";
    }
    console.log( i + 1 +": " + `${doneMarker}  ${tasks.name}`);

  }

}

function addList(name,done){
  if(!name){
    console.log("error")
  }else{
    tasks.push({name,done});
    var data = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(fileName, data, finished);
  }
    
}

function removeList(text){
  if(!text){
 tasks.splice(-1);}
 else if(text>tasks.length){
  console.log("this number not exist") 
  }else{
    tasks.splice(text-1,1);
  }
   
}

function editList(test1,test2){
  if(!test1){
    console.log("error");
  }
  else if(!test2){
    tasks[tasks.length-1].name = test1;
  }
  else if(test1>0 && test1<tasks.length){
    tasks[test1-1].name=test2;
  }

}

function checklist(index){
    if(!index){
      console.log("error ")
    }else{
      tasks[index-1].done=true;
      var data = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(fileName, data, finished);
    }
}

function unChecklist(index){
  if(!index){
    console.log("error ")
  }else{
    tasks[index-1].done=false;
    var data = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(fileName, data, finished);
  }
}



 /**
* Says hello
  *
  * @returns {void}
  */

function hello(text)
{    
  let words = text.split(" ");
  if(!words[1]){
    console.log("hello!")
  }
  else if(words.length<=2){
    console.log("hello "+words[1].trim()+"!");
  }
  else{
    unknownCommand(text)
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
