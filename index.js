const HTML5ToPDF = require("html5-to-pdf");
const path = require("path");
const modifier = require("./assets/mod");
const fs = require("fs");

const header = "Mr important";
const direccion = "calle 3";

const generateHTML = () => {
  var docText = `<!DOCTYPE html>
  <html>
      <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <script src="../assets/mod.js"></script>
      </head>
      <body>
          <h1> To: ${header}</h1>
          <p>Lorem ${direccion}ipsum dolor sit, amet consectetur adipisicing elit. Temporibus laborum fuga similique corporis itaque odit quibusdam placeat, maiores illo inventore fugit! Consequatur at totam ullam soluta! Quod alias porro expedita?</p>
             
          <img src="" alt="this is suppsed to be an img">
      </body>
  </html>`;

  const location = path.join(__dirname, "assets", "template.html");

  fs.writeFileSync(location, docText, function(err) {
    if (err) {
      return console.error(err);
    }
  });

  return 'success'
  
};

const run = async () => {
  //const createDoc = await generateHTML();
  //console.log(path)
 // if (createDoc == "success") {
   if(true){
    const html5ToPDF = new HTML5ToPDF({
      inputPath: path.join(__dirname, "assets", "basic.html"),
      outputPath: path.join(__dirname, "..", "tmp", "output.pdf"),
      templatePath: path.join(__dirname, "templates", "basic"),
      include: [
        path.join(__dirname, "assets", "basic.css")
      ],
    })
   
    await html5ToPDF.start()
    await html5ToPDF.build()
    await html5ToPDF.close()
    console.log("DONE")
    process.exit(0)
  }
};

// // Use the function in an existing promise chain
// Promise.resolve( 'something' )
// .then( result => {
//   return doSomething( result )
// } )
// .then( result => {
//   // Because async functions are promises under the hood we can treat the run function as a promise
//   return run()
// } )
// .catch( error => console.log(error) );

// Usage in try/catch block
try {
  run();
} catch (error) {
  console.error(error);
}
