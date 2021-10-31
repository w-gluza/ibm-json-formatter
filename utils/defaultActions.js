const defaultActions = [
  {
    steps: [
      {
        step: "step_001",
        output: {
          generic: [
            {
              values: [
                {
                  text: "I'm afraid I don't understand. Please rephrase your question.",
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
        variable: "step_001",
        condition: {
          lte: [
            {
              system_variable: "no_action_matches_count",
            },
            {
              scalar: 3,
            },
          ],
        },
        next_step: "step_002",
      },
      {
        step: "step_002",
        output: {
          generic: [
            {
              values: [
                {
                  text: "",
                },
              ],
              response_type: "text",
              selection_policy: "sequential",
            },
          ],
        },
        handlers: [],
        resolver: {
          type: "invoke_another_action_and_end",
          invoke_action: {
            action: "fallback",
            parameters: null,
            result_variable: "step_002_result_1",
          },
        },
        variable: "step_002",
        condition: {
          gt: [
            {
              system_variable: "no_action_matches_count",
            },
            {
              scalar: 3,
            },
          ],
        },
      },
    ],
    title: "No action matches",
    action: "anything_else",
    handlers: [],
    condition: {
      expression: "anything_else",
    },
    variables: [
      {
        title:
          "I am afraid I do not understand what you are asking, please re-p",
        variable: "step_001",
        data_type: "any",
      },
      {
        variable: "step_002",
        data_type: "any",
      },
      {
        variable: "step_002_result_1",
        data_type: "any",
      },
    ],
    disambiguation_opt_out: true,
  },
  {
    steps: [
      {
        step: "step_001",
        output: {
          generic: [
            {
              values: [
                {
                  text: "I'm afraid I don't understand. I can connect you to an agent.",
                },
              ],
              response_type: "text",
              selection_policy: "sequential",
            },
          ],
        },
        handlers: [],
        resolver: {
          type: "connect_to_agent",
          response: {
            transfer_info: {
              target: {},
            },
            agent_available: {
              message: "Let's send you to an available agent.",
            },
            agent_unavailable: {
              message:
                "There are no agents available at this time. When one becomes available, we'll connect you.",
            },
            message_to_human_agent: "",
          },
        },
        variable: "step_001",
        condition: {
          eq: [
            {
              system_variable: "fallback_reason",
            },
            {
              scalar: "Step validation failed",
            },
          ],
        },
        next_step: "step_002",
      },
      {
        step: "step_002",
        output: {
          generic: [
            {
              values: [
                {
                  text: "Sorry I couldn't assist you. I will connect you to an agent right away.",
                },
              ],
              response_type: "text",
              selection_policy: "sequential",
            },
          ],
        },
        handlers: [],
        resolver: {
          type: "connect_to_agent",
          response: {
            transfer_info: {
              target: {},
            },
            agent_available: {
              message: "Let's send you to an available agent.",
            },
            agent_unavailable: {
              message:
                "There are no agents available at this time. When one becomes available, we'll connect you.",
            },
            message_to_human_agent: "",
          },
        },
        variable: "step_002",
        condition: {
          eq: [
            {
              system_variable: "fallback_reason",
            },
            {
              scalar: "Agent requested",
            },
          ],
        },
        next_step: "step_003",
      },
      {
        step: "step_003",
        output: {
          generic: [
            {
              values: [
                {
                  text: "I am afraid I do not understand what you are asking, let me connect you to an agent.",
                },
              ],
              response_type: "text",
              selection_policy: "sequential",
            },
          ],
        },
        handlers: [],
        resolver: {
          type: "connect_to_agent",
          response: {
            transfer_info: {
              target: {},
            },
            agent_available: {
              message: "Let's send you to an available agent.",
            },
            agent_unavailable: {
              message:
                "There are no agents available at this time. When one becomes available, we'll connect you.",
            },
            message_to_human_agent: "",
          },
        },
        variable: "step_003",
        condition: {
          eq: [
            {
              system_variable: "fallback_reason",
            },
            {
              scalar: "No action matches",
            },
          ],
        },
      },
    ],
    title: "Fallback",
    action: "fallback",
    handlers: [],
    condition: {
      intent: "fallback_connect_to_agent",
    },
    variables: [
      {
        title: "I'm afraid I don't understand. I can connect you to an agent.",
        variable: "step_001",
        data_type: "any",
      },
      {
        title:
          "Sorry I couldn't assist you. I will connect you to an agent righ",
        variable: "step_002",
        data_type: "any",
      },
      {
        title:
          "I am afraid I do not understand what you are asking, let me conn",
        variable: "step_003",
        data_type: "any",
      },
    ],
    next_action: "anything_else",
    disambiguation_opt_out: true,
  },
  {
    steps: [
      {
        step: "step_001",
        output: {
          generic: [
            {
              values: [
                {
                  text: "Welcome, how can I assist you?",
                },
              ],
              response_type: "text",
              selection_policy: "sequential",
            },
          ],
        },
        handlers: [],
        resolver: {
          type: "continue",
        },
        variable: "step_001",
      },
    ],
    title: "Greet customer",
    action: "welcome",
    handlers: [],
    condition: {
      expression: "welcome",
    },
    variables: [
      {
        variable: "step_001",
        data_type: "any",
      },
    ],
    next_action: "action_103", // it needs to lead to real action
    disambiguation_opt_out: true,
  },
];

module.exports = {
  defaultActions,
};
