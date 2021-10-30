const fs = require("fs");
// const { skillSettings } = require("./utils/skillSettings");

const filePath = "./input/trivia_input.json";

async function readFile() {
  const data = JSON.parse(fs.readFileSync(filePath));
  return data;
}

function createFiles(res) {
  const jsonFromArrayOfObjects = JSON.stringify(res);
  fs.writeFileSync("./output/ibm-ready.json", jsonFromArrayOfObjects);
}

const functionsWrapper = () => {
  readFile().then((responses) => createFiles(responses));
};

// Main function, where all the functions are being called
async function main() {
  await functionsWrapper();
}

main();
