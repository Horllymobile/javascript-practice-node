const readline = require('readline');
//  const process = require('process');
const stream = require('stream');

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
        error: process.stderr
    }
);

rl.question('What is your name?', (name) => {
    rl.question('Where do you live?', (country) => {
        console.log(`Welcome ${name}, from ${country}`);
        rl.close();
    });
});
rl.on('close', () => {
    console.log('Bye Bye');
    process.exit(0);
})
