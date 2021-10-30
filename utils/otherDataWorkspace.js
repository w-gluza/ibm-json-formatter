const otherDataWorkspace = {
  entities: [],
  metadata: {
    api_version: {
      major_version: "v2",
      minor_version: "2018-11-08",
    },
  },
  variables: [],
  counterexamples: [],
  system_settings: {
    topic_switch: {
      enabled: true,
      messages: {
        confirm_return: {
          text: "Return to previous topic?",
        },
        confirm_switch: {
          text: "Switch from the current topic?",
        },
      },
      question_steps_threshold: 2,
    },
    disambiguation: {
      prompt: "Did you mean:",
      enabled: true,
      randomize: true,
      max_suggestions: 5,
      suggestion_text_policy: "title",
      none_of_the_above_prompt: "None of the above",
    },
    intent_classification: {
      training_backend_version: "v2",
    },
    spelling_auto_correct: true,
  },
  learning_opt_out: false,
};

module.exports = {
  otherDataWorkspace,
};
