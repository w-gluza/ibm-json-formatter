const fs = require("fs");
const { skillSettings } = require("./utils/skillSettings");
const { defaultActions } = require("./utils/defaultActions");
const { defaultIntents } = require("./utils/defaultIntents");
const { otherDataWorkspace } = require("./utils/otherDataWorkspace");

const filePath = "./input/trivia_input.json";

async function readFile() {
  const data = JSON.parse(fs.readFileSync(filePath));
  return data;
}

const defaultJSONvar = {
  ...skillSettings,
  workspace: {
    actions: defaultActions,
    intents: defaultIntents,
    ...otherDataWorkspace,
  },
};

console.log("defaultJSONvar", defaultJSONvar);

function createFiles(res) {
  const jsonFromArrayOfObjects = JSON.stringify(defaultJSONvar);
  console.log("jsonFromArrayOfObjects OK");
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
