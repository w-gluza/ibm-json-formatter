const fs = require("fs");
const { skillSettings } = require("./utils/skillSettings");
const { defaultActions } = require("./utils/defaultActions");
const { defaultIntents } = require("./utils/defaultIntents");
const { otherDataWorkspace } = require("./utils/otherDataWorkspace");
const { singleAction, singleIntent } = require("./demo/demo");
// const { dataBase } = require("./input/database");

const filePath = "./input/csvjson_90.json";

async function readFile() {
  const data = JSON.parse(fs.readFileSync(filePath));
  return data;
}

function createFiles(dataBase) {
  // console.log("databse", dataBase);
  const maxTitleCharacters = 64; // title cannot be longer than 64 characters
  const maxScalarCharacters = 400; // scalar cannot be longer than 400 characters
  // console.log(dataBase, dataBase);
  const customActions = dataBase.map((obj) => ({
    steps: [
      {
        step: `step_${obj.stepId}`,
        output: {
          generic: [
            {
              values: [
                {
                  text_expression: {
                    concat: [
                      {
                        scalar: obj.answer.substring(0, maxScalarCharacters),
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
        variable: `step_${obj.stepId}`,
      },
    ],
    title: obj.question.substring(0, maxTitleCharacters),
    action: `action_${obj.actionId}`,
    handlers: [],
    condition: {
      intent: `action_${obj.actionId}_intent_${obj.intentId}`,
    },
    variables: [
      {
        title: obj.answer.substring(0, maxTitleCharacters),
        variable: `step_${obj.stepId}`,
        data_type: "any",
      },
    ],
    next_action: `action_${obj.nextActionId}`,
    topic_switch: {
      allowed_from: true,
      allowed_into: true,
    },
    disambiguation_opt_out: false,
  }));

  const customIntents = dataBase.map((obj) => ({
    intent: `action_${obj.actionId}_intent_${obj.intentId}`,
    examples: [
      {
        text: obj.question,
      },
    ],
  }));

  const allActions = [singleAction, ...customActions, ...defaultActions];
  const allIntents = [singleIntent, ...customIntents, ...defaultIntents];

  const JSONmerge = {
    ...skillSettings,
    workspace: {
      actions: allActions,
      intents: allIntents,
      ...otherDataWorkspace,
    },
  };

  const jsonFromArrayOfObjects = JSON.stringify(JSONmerge);
  console.log("jsonFromArrayOfObjects", jsonFromArrayOfObjects);
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
