const { log } = require('console');
const fs = require('fs');

//Read File

// // Asynchronous Reading
// fs.readFile('vikram.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error("Error reading file :", err);
//         return;
//     }
//     console.log("File contents :\n", data);
    
// })

// // Synchronous Reading
// try {
//     const data = fs.readFileSync('vikram.txt', 'utf-8');
//     console.log("File contents :\n", data);
    
// } catch (error) {
//     console.error("Error reading file :", err);
    
// }

// Asynchronous Writing File
// fs.writeFile('output.txt', 'Some temp text', (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//     }
//     console.log("File written successfully.");
// })


// synchronous Writing File
// try {
//     fs.writeFileSync('syncOutput.txt', 'Hello!');
//     console.log('File written successfully.');
    
// } catch (error) {
//     console.error('Error writing file:', error);
    
// }

// Appending to Files
// Asynchronous Appending

// fs.appendFile('output.txt', "\n Added something", (err) => {
//     if (err) {
//         console.error("Error :", err);
        
//     }
//     console.log("content added successfully.");
    
// })

// synchronous Appending
try {
    fs.appendFileSync('output.txt', '..added something new')
    console.log("content added sucessfully.");
    
} catch (error) {
    console.error(error);
    
}
