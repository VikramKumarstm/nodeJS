const { log } = require('console');
const fs = require('fs');

//Read File

Asynchronous Reading
fs.readFile('vikram.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file :", err);
        return;
    }
    console.log("File contents :\n", data);
    
})

// Synchronous Reading
try {
    const data = fs.readFileSync('vikram.txt', 'utf-8');
    console.log("File contents :\n", data);
    
} catch (error) {
    console.error("Error reading file :", err);
    
}
