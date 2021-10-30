const fs = require("fs");
const { skillSettings } = require("./utils/skillSettings");


function readFile() {
  fs.readFile("./input/database.json", "utf8", (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      // parse JSON string to JSON object
      const databases = JSON.parse(data);

      // print all databases
      databases.forEach((db) => {
        console.log(`${db.name}: ${db.type}`);
      });
    }
  });
}

console.log("skillSettings", skillSettings);
// convert JSON object to a string
const data = JSON.stringify(ibmFriendlyJSON);

function createFiles() {
  // write file to disk
  fs.writeFile("./output/ibm-ready.json", data, "utf8", (err) => {
    if (err) {
      console.log(`Error writing file: ${err}`);
    } else {
      console.log(`File is written successfully!`);
    }
  });
}

// Main function, where all the functions are being called
async function main() {
  await readFile();
  await createFiles();
}

main();
