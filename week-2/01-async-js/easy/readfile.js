const fs = require('fs');

async function readFile() {
    try {
        const data = await fs.promises.readFile('hello.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

readFile();