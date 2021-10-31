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

// console.log("defaultActions", defaultActions);
const singleAction = {
  steps: [
    {
      step: "step_800",
      output: {
        generic: [
          {
            values: [
              {
                text_expression: {
                  concat: [
                    {
                      scalar: "Random answer",
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
      variable: "step_800",
    },
  ],
  title: "Random question goes here?",
  action: "action_28303",
  handlers: [],
  condition: {
    intent: "action_28303_intent_9619",
  },
  variables: [
    {
      title: "Random answer",
      variable: "step_800",
      data_type: "any",
    },
  ],
  next_action: "fallback",
  topic_switch: {
    allowed_from: true,
    allowed_into: true,
  },
  disambiguation_opt_out: false,
};

const singleIntent = {
  intent: "action_28303_intent_9619",
  examples: [
    {
      text: "Random question goes here?",
    },
  ],
};

const allActions = [singleAction, ...defaultActions];
const allIntents = [singleIntent, ...defaultIntents];

console.log("allIntents", allIntents);

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
