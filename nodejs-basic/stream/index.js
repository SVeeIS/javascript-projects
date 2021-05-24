/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

 const fs = require('fs');
 const path = require('path');
  
 const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
     highWaterMark: 10
 });
  
 const writableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));
 
 readableStream.on('readable', () => {
     try {
         const output = `${readableStream.read()}\n`;
         writableStream.write(output);
         console.log(output)
     } catch(error) {
         // catch the error when the chunk cannot be read.
     }
 });
  
 readableStream.on('end', () => {
     console.log('Done');
 });
  