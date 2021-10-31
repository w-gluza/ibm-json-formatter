const singleAction = {
  steps: [
    {
      step: "step_1001",
      output: {
        generic: [
          {
            values: [
              {
                text_expression: {
                  concat: [
                    {
                      scalar: "Random step 1001 and intent 100 001",
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
      variable: "step_1001",
    },
  ],
  title: "Aaaa random question goes here?",
  action: "action_101",
  handlers: [],
  condition: {
    intent: "action_101_intent_100001",
  },
  variables: [
    {
      title: "A random answer",
      variable: "step_1001",
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
  intent: "action_101_intent_100001",
  examples: [
    {
      text: "Random question goes here?",
    },
  ],
};

module.exports = {
  singleIntent,
  singleAction,
};
