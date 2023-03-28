const readline = require('readline');
const util = require('util');

let RL = readline.createInterface(process.stdin, process.stdout);

RL.question('Tell me name ',(name)=>{

    RL.setPrompt(`${name} how old r u? `);
    RL.prompt();
    RL.on('line',(age)=>{
        if(age<18){
            util.log(`${name.trim()} cannot proceed`);
            RL.close();
        }else{
            util.log(`${name.trim()} great that u r ${age} years old.`);
            RL.close();
        }
    });
});