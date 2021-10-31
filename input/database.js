const dataBase = [
  {
    question: "How do I edit a page?",
    answer:
      'Editing most Wikipedia pages is easy, just click the "Edit" tab at the top of a Wikipedia page (or on a section-edit link). This will take you to a new page with a text box containing the editable text of the page you were viewing. In this box you can type in the text that you want to add using wiki markup to format the text and add other elements like images and tables. If you don\'t want to learn the wiki markup syntax, you can enable the VisualEditor (but you must be a registered user), which allows you to edit pages in a user-friendly way. When you have finished editing you should write a short edit summary in the small field below the edit-box describing your changes.',
    category: "main",
    actionId: 102,
    nextActionId: 101,
    stepId: 10002,
    intentId: 100002,
  },
  {
    question: "How do I create a new page?",
    answer:
      "You are required to have a Wikipedia account to create a new article—you can register here. To see other benefits to creating an account, see Why create an account? For creating a new article see Wikipedia:Your first article and Wikipedia:Article development; and you may wish to try the Article Wizard. For creating a new page in your userspace see How do I create a user subpage?; or use the Article Wizard, which has an option for that. Make sure that there is enough context and it is notable.",
    category: "main",
    actionId: 103,
    nextActionId: 102,
    stepId: 10003,
    intentId: 100003,
  },
  {
    question: "Why was my article deleted?",
    answer:
      'If you look at the address where your page was, it should have a red box above it that shows the user who deleted it (in the form "Username (talk|contribs)") and their reason (which appears in italics). If the reason is not helpful, or you disagree with it, you can click on the "talk" link to send them a message and a',
    category: "main",
    actionId: 104,
    nextActionId: 103,
    stepId: 10004,
    intentId: 100004,
  },
  {
    question: "How do I change the name of an article?",
    answer:
      'You move the article using the "move" button (you can see it by clicking the downward-pointing arrow to the right of the "edit" button). But in order to do this, you must have an account that has reached autoconfirmed status, meaning it must be at least four days old and have made at least ten edits. If you are not an autoconfirmed user, or the move is controversial, or the page you wish to rename is move protected, visit Wikipedia:Requested moves. You may also request to have an admin grant you confirmed status if you are a legitimate alternative account of an autoconfirmed user.',
    category: "main",
    actionId: 105,
    nextActionId: 104,
    stepId: 10005,
    intentId: 100005,
  },
  {
    question: "How do I change my username or delete my account?",
    answer:
      "For changing your username see Wikipedia:Changing username. An account cannot be deleted. If an account was deleted, all the edits made by the user could not be properly attributed. You can, however, change your username, and request that your userpage be deleted by adding the code {{db-user}} to the top of the page. See also Wikipedia:Courtesy vanishing.",
    category: "main",
    actionId: 106,
    nextActionId: 105,
    stepId: 10006,
    intentId: 100006,
  },
  {
    question: "How do I cite Wikipedia?",
    answer: "See Wikipedia:Citing Wikipedia for details.",
    category: "main",
    actionId: 107,
    nextActionId: 106,
    stepId: 10007,
    intentId: 100007,
  },
  {
    question: "Who writes the articles on Wikipedia?",
    answer:
      'Almost all articles on Wikipedia are written by multiple editors, not just one. If you click on the "View history" tab at the top of an article, a list will be displayed of all the contributors to the article and when their contribution was made. A more comprehensive history can be access in the "Page Statistics" which can be found in the External tools of the "View History" tab. If your purpose is to cite Wikipedia, see the question above. See Who writes Wikipedia for further details.',
    category: "main",
    actionId: 108,
    nextActionId: 107,
    stepId: 10008,
    intentId: 100008,
  },
  {
    question:
      "Can I rely on Wikipedia for advice on medical, legal, financial, safety, and other critical issues?",
    answer:
      "In a word, no. If you need specific advice (for example, medical, legal, financial or risk management) please seek a professional who is licensed or knowledgeable in that area. That is not to say that you will not find valuable and accurate information in Wikipedia; much of the time you will. However, Wikipedia cannot guarantee the validity of the information found here. The content of any given article may recently have been changed, vandalized or altered by someone whose opinion does not correspond with the state of knowledge in the relevant fields. See Wikipedia:General disclaimer for more cautionary information.",
    category: "main",
    actionId: 109,
    nextActionId: 108,
    stepId: 10009,
    intentId: 100009,
  },
  {
    question: "Who owns Wikipedia?",
    answer: "See who owns Wikipedia for details.",
    category: "main",
    actionId: 110,
    nextActionId: 109,
    stepId: 10010,
    intentId: 100010,
  },
  {
    question: "Why am I having trouble logging in?",
    answer: "See Help:Logging in for details.",
    category: "main",
    actionId: 111,
    nextActionId: 110,
    stepId: 10011,
    intentId: 100011,
  },
  {
    question: "How can I contact Wikipedia?",
    answer: "See Wikipedia:Contact us for information.",
    category: "main",
    actionId: 112,
    nextActionId: 111,
    stepId: 10012,
    intentId: 100012,
  },
];

module.exports = {
  dataBase,
};
