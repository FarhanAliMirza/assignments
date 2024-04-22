const fs = require('fs');

// Read the content from file.txt
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Remove extra spaces
    const contentWithoutSpaces = data.replace(/\s+/g, ' ');

    // Print the content before and after removing spaces
    console.log('Content before removing spaces:');
    console.log(data);
    console.log('Content after removing spaces:');
    console.log(contentWithoutSpaces);
});