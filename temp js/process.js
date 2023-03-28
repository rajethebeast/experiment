// console.log(process.argv);

// let flag = process.argv.indexOf('--user');

// console.log(flag);

process.stdout.write('Ask a ques ');

process.stdin.on('data', answer=>{
    console.log(answer.toString().trim());

    process.exit();
});

