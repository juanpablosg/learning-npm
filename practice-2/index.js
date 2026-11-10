import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type your URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    console.log(url);
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));

    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });

    fs.readFile("url.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
