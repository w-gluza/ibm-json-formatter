const { ibmInfo } = require("./ibmInfo.js");

const skillSettings = {
  name: ibmInfo.NAME,
  type: "dialog",
  status: "Available",
  created: ibmInfo.CREATED,
  updated: ibmInfo.UPDATED,
  language: "en",
  skill_id: ibmInfo.SKILL_ID,
  workspace: {},
  description: "",
  workspace_id: ibmInfo.WORKSPACE_ID,
  dialog_settings: {
    actions: true,
  },
};

module.exports = {
  skillSettings,
};
