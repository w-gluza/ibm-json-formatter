const defaultIntents = [
  {
    intent: "fallback_connect_to_agent",
    examples: [
      {
        text: "Agent help",
      },
      {
        text: "Call agent",
      },
      {
        text: "Can I connect to an agent?",
      },
      {
        text: "I would like to speak to a human",
      },
      {
        text: "I would like to speak to someone",
      },
    ],
    description: "Please transfer me to an agent",
  },
];

module.exports = {
  defaultIntents,
};
