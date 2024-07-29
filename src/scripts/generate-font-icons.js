const svgtofont = require('svgtofont');
const path = require('path');
 
svgtofont({
  src: path.resolve(process.cwd(), '../../assets/icons'), // svg path
  dist: path.resolve(process.cwd(), '../../assets/generated-fonts'), // output path
  fontName: 'svgtofont', // font name
  css: true, // Create CSS files.
  startUnicode: 0xea01, // unicode start number
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  },  
}).then(() => {
  console.log('done!');
});