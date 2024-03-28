const fs = require('fs');


function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


function writeFile(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}


function modifyContent(content) {
    return content.toUpperCase();
}

async function processFiles(inputFile, outputFile) {
    try {
        
        const data = await readFile(inputFile);
        
        
        const modifiedData = modifyContent(data);
        
        
        await writeFile(outputFile, modifiedData);
        
        console.log('File processing completed successfully.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}


const [,, inputFile, outputFile] = process.argv;
if (inputFile && outputFile) {
    processFiles(inputFile, outputFile);
} 
else {
    console.error('Usage: node script.js input.txt output.txt');
}
