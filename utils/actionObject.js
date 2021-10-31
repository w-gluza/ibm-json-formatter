const actionObject = {
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
                      scalar: "Random answer goes here",
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

module.exports = {
  actionObject,
};
