const fs = require("fs");
const { skillSettings } = require("./utils/skillSettings");
const { defaultActions } = require("./utils/defaultActions");
const { defaultIntents } = require("./utils/defaultIntents");
const { otherDataWorkspace } = require("./utils/otherDataWorkspace");
const { singleAction, singleIntent } = require("./demo/demo");
const { triviaInputJS } = require("./input/triviaInputJS");
const { actionObject } = require("./utils/defaultActions");

const filePath = "./input/trivia_input.json";

async function readFile() {
  const data = JSON.parse(fs.readFileSync(filePath));
  return data;
}

// const defaultJSONvar = {
//   ...skillSettings,
//   workspace: {
//     actions: defaultActions,
//     intents: defaultIntents,
//     ...otherDataWorkspace,
//   },
// };

// console.log("defaultActions", defaultActions);

// console.log("triviaInputJS", triviaInputJS);

// const getActionsFromJSON = () => {
const customActions = triviaInputJS.map((obj) => ({
  steps: [
    {
      step: obj.step,
      output: {
        generic: [
          {
            values: [
              {
                text_expression: {
                  concat: [
                    {
                      scalar: obj.answer,
                    },
                  ],
                },
              },
            ],
            response_type: "text",
            selection_policy: "sequential",
          },
        ],
      },
      handlers: [],
      resolver: {
        type: "end_action",
      },
      variable: obj.step,
    },
  ],
  title: obj.question,
  action: obj.action,
  handlers: [],
  condition: {
    intent: obj.intent,
  },
  variables: [
    {
      title: obj.answer,
      variable: obj.step,
      data_type: "any",
    },
  ],
  next_action: "action_101",
  topic_switch: {
    allowed_from: true,
    allowed_into: true,
  },
  disambiguation_opt_out: false,
}));

//   // console.log("customActions", customActions);
//   return customActions;
// };

// const getIntentsFromJSON = () => {
const customIntents = triviaInputJS.map((obj) => ({
  intent: obj.intent,
  examples: [
    {
      text: obj.question,
    },
  ],
}));

//   console.log("customIntents", customIntents);
//   return customIntents;
// };

const allActions = [...customActions, singleAction, ...defaultActions];
const allIntents = [...customIntents, singleIntent, ...defaultIntents];

const JSONmerge = {
  ...skillSettings,
  workspace: {
    actions: allActions,
    intents: allIntents,
    ...otherDataWorkspace,
  },
};

function createFiles(res) {
  const jsonFromArrayOfObjects = JSON.stringify(JSONmerge);
  // console.log("jsonFromArrayOfObjects OK");
  fs.writeFileSync("./output/ibm-ready.json", jsonFromArrayOfObjects);
}

const functionsWrapper = () => {
  readFile().then((responses) => createFiles(responses));
  // getActionsFromJSON();
  // getIntentsFromJSON();
};

// Main function, where all the functions are being called
async function main() {
  await functionsWrapper();
}

main();
