const fs = require('fs');


const reg = RegExp('.*\.mp4', 'g');

fs.readdir('C://Users/Horlly/Downloads', { encoding: 'utf-8' }, (err, files) => {
  if (err) throw err;
  const file = files.filter(file => file.endsWith('.rtf'), files.length);

  file.forEach(item => {
    moveFile(item)
  })
})

function moveFile(filename) {
  console.log(filename)
  if (filename.endsWith('.mp4')) {
    move(filename, 'C://Users/Horlly/Downloads/Videos')
  } else if (filename.endsWith('.mp3')) {
    move(filename, 'C://Users/Horlly/Downloads/Musics')
  } else if (filename.endsWith('.pdf') || filename.endsWith('.docs') || filename.endsWith('.rtf')) {
    move(filename, 'C://Users/Horlly/Downloads/Documents')
  } else if (filename.endsWith('.zip')) {
    move(filename, 'C://Users/Horlly/Downloads/Compressed')
  }
}

function move(filename, destination) {
  fs.rename(filename, destination, (err) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('File rename')
  })
}

