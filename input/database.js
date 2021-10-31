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
    question: "Why am I having trouble logging in?",
    answer: "See Help:Logging in for details.",
    category: "main",
    actionId: 110,
    nextActionId: 109,
    stepId: 10010,
    intentId: 100010,
  },
  {
    question: "How can I contact Wikipedia?",
    answer: "See Wikipedia:Contact us for information.",
    category: "main",
    actionId: 111,
    nextActionId: 110,
    stepId: 10011,
    intentId: 100011,
  },
  {
    question:
      'Wikipedia is an online free-content encyclopedia that you can edit and contribute to. Wikipedia co-founder Jimmy Wales has described Wikipedia as "an effort to create and distribute a free encyclopedia of the highest possible quality to every single person on the planet in their own language." Wikipedia exists to bring knowledge to everyone who seeks it.',
    answer:
      'Wikipedia is an online free-content encyclopedia that you can edit and contribute to. Wikipedia co-founder Jimmy Wales has described Wikipedia as "an effort to create and distribute a free encyclopedia of the highest possible quality to every single person on the planet in their own language." Wikipedia exists to bring knowledge to everyone who seeks it.',
    category: "overview",
    actionId: 112,
    nextActionId: 111,
    stepId: 10012,
    intentId: 100012,
  },
  {
    question: "Who owns Wikipedia?",
    answer:
      "Wikipedia's tech framework is supported by a non-profit parent organization, the Wikimedia Foundation Inc, which also supports Wikipedia's sister projects, including Wiktionary (a wiki dictionary), Wikibooks (textbooks), and others, and owns all of their domain names.",
    category: "overview",
    actionId: 113,
    nextActionId: 112,
    stepId: 10013,
    intentId: 100013,
  },
  {
    question: "Who is responsible for the articles on Wikipedia?",
    answer:
      'You can learn who is responsible for the most recent versions of any given page by clicking on the "View history" link.',
    category: "overview",
    actionId: 114,
    nextActionId: 113,
    stepId: 10014,
    intentId: 100014,
  },
  {
    question: "How can I contact the project?",
    answer:
      "Given the massively collaborative nature of the project, there is no single point of contact. If you send an e-mail to an individual board or staff member, they will likely just forward it to the group of Wikipedia volunteers who answer reader inquiries. You can reach those volunteers yourself, by e-mailing info-en@wikimedia.org.",
    category: "overview",
    actionId: 115,
    nextActionId: 114,
    stepId: 10015,
    intentId: 100015,
  },
  {
    question:
      "Should I create an account? Can't I just edit articles anonymously?",
    answer:
      "Editors with user names enjoy several benefits. Among them is the positive reputation that goes with quality work. Wikipedians with an established history are respected especially with regard to neutralizing article disputes. In addition, Wikipedians sometimes find collaborating with unregistered users frustrating, because it is more difficult to contact them with questions, concerns, or suggestions.",
    category: "overview",
    actionId: 116,
    nextActionId: 115,
    stepId: 10016,
    intentId: 100016,
  },
  {
    question: "How do you know if the information is correct?",
    answer:
      "Given that anyone can edit any article, it is, of course, possible for biased, out-of-date, or incorrect information to be posted. However, because there are so many other people reading the articles and monitoring contributions using the Recent Changes page, incorrect information is usually corrected quickly. Thus, the overall accuracy of the encyclopedia is improving all the time. You are encouraged to help by correcting articles, validating content, and providing useful references.",
    category: "overview",
    actionId: 117,
    nextActionId: 116,
    stepId: 10017,
    intentId: 100017,
  },
  {
    question:
      "How do you prevent people from ruining articles? (Defacement or vandalism)",
    answer:
      'All changes to a page are registered in a "page history", so any defacement can be replaced by an older version of the page. And, in general, recent changes to Wikipedia are automatically listed on a special page for that purpose.',
    category: "overview",
    actionId: 118,
    nextActionId: 117,
    stepId: 10018,
    intentId: 100018,
  },
  {
    question:
      "Site X seems to be violating Wikipedia's copyright. Do you guys know about this?",
    answer:
      "All text on Wikipedia is licensed under the Creative Commons Attribution/Share-Alike License (CC-BY-SA), and in most cases, also the GNU Free Documentation License (GFDL). Over 100 sites using Wikipedia for content have been identified, and categorized by their degree of compliance, at Wikipedia:CC-BY-SA Compliance and Wikipedia:GFDL Compliance. Wikipedia:Mirrors and forks has more information, including what to do if someone is violating the CC-BY-SA license or the GFDL.",
    category: "overview",
    actionId: 119,
    nextActionId: 118,
    stepId: 10019,
    intentId: 100019,
  },
  {
    question: "Which wiki software does Wikipedia run on?",
    answer:
      "Wikipedia and the other Wikimedia projects use the MediaWiki software to facilitate collaborative editing and storage of page histories.",
    category: "overview",
    actionId: 120,
    nextActionId: 119,
    stepId: 10020,
    intentId: 100020,
  },
  {
    question: "What if two people edit the same article at the same time?",
    answer: "See Help:Edit conflict.",
    category: "overview",
    actionId: 121,
    nextActionId: 120,
    stepId: 10021,
    intentId: 100021,
  },
  {
    question: "How big is Wikipedia?",
    answer:
      "Wikipedia currently has 6,403,183 articles in total in the English version alone.",
    category: "overview",
    actionId: 122,
    nextActionId: 121,
    stepId: 10022,
    intentId: 100022,
  },
  {
    question: "What can I do about libelous content or an invasion of privacy?",
    answer:
      "By design, Wikipedia is quite easy to edit so you can simply revert wrong or hurtful information yourself. However, because every revision is logged, special steps are required to remove this information from the historical record.",
    category: "overview",
    actionId: 123,
    nextActionId: 122,
    stepId: 10023,
    intentId: 100023,
  },
  {
    question: "What is Wikipedia?",
    answer:
      "Wikipedia is an encyclopedia which is free to use and edit. It is available in many different languages and on many devices. The content of Wikipedia is free to reproduce under the Creative Commons Attribution-Sharealike 3.0 Unported License (CC-BY-SA) and the GNU Free Documentation License (GFDL), except for some images.",
    category: "readers",
    actionId: 124,
    nextActionId: 123,
    stepId: 10024,
    intentId: 100024,
  },
  {
    question: "Who writes Wikipedia?",
    answer:
      "Wikipedia is written and edited by volunteers from around the world. If you wish to help, you can start by visiting our introduction for contributors.",
    category: "readers",
    actionId: 125,
    nextActionId: 124,
    stepId: 10025,
    intentId: 100025,
  },
  {
    question: "How to access Wikipedia?",
    answer:
      "It is possible to access Wikipedia with several different methods, including options for older devices and modern apps for various platforms.",
    category: "readers",
    actionId: 126,
    nextActionId: 125,
    stepId: 10026,
    intentId: 100026,
  },
  {
    question: "Is Wikipedia censored?",
    answer:
      "Wikipedia uses the minimum of censorship. Generally, only gratuitous explicit (pornographic) images are removed. The community of Wikipedia editors determine what text and images are displayed, so there may be material that offends some people. There may be those who are offended, shocked or disgusted by medical images, nudity, religious imagery and controversial images.",
    category: "readers",
    actionId: 127,
    nextActionId: 126,
    stepId: 10027,
    intentId: 100027,
  },
  {
    question: "How do I search Wikipedia?",
    answer:
      "There is a search box in the upper-right corner of the screen, with the word Search in it. Just type what you are looking for into the search box and press ↵ Enter.",
    category: "readers",
    actionId: 128,
    nextActionId: 127,
    stepId: 10028,
    intentId: 100028,
  },
  {
    question: "How do I do research with Wikipedia?",
    answer:
      "Wikipedia can be a great tool for learning and researching information. However, as with all reference works, not everything in Wikipedia is accurate, comprehensive, or unbiased.",
    category: "readers",
    actionId: 129,
    nextActionId: 128,
    stepId: 10029,
    intentId: 100029,
  },
  {
    question: "What is the license agreement on the contents of Wikipedia?",
    answer:
      "Wikipedia articles are all free content and their text is covered by the Creative Commons Attribution-Sharealike 3.0 Unported License (CC-BY-SA) and in most cases the GNU Free Documentation License (GFDL). See Wikipedia:Copyrights.",
    category: "readers",
    actionId: 130,
    nextActionId: 129,
    stepId: 10030,
    intentId: 100030,
  },
  {
    question: "May I mirror entire sections of the Wikipedia to my site?",
    answer:
      "Yes, you may mirror or quote the text as much as you wish, as long as you fulfill the requirements of the CC-BY-SA or GNU Free Documentation License. See Wikipedia:Copyrights.",
    category: "readers",
    actionId: 131,
    nextActionId: 130,
    stepId: 10031,
    intentId: 100031,
  },
  {
    question:
      "If I link a word from my site to Wikipedia, am I required to use the GNU FDL for my site?",
    answer:
      "No. Linking is not an act regulated by copyright, so the CC-BY-SA and GNU FDL does not apply.",
    category: "readers",
    actionId: 132,
    nextActionId: 131,
    stepId: 10032,
    intentId: 100032,
  },
  {
    question: "Can I get Wikipedia on CD, or download it for offline use?",
    answer:
      "The entire text of the English Wikipedia (as of January 2012) can be downloaded in the OpenZIM format, which can be read using the free Kiwix software, available for Mac, Windows, Linux, and Sugar.",
    category: "readers",
    actionId: 133,
    nextActionId: 132,
    stepId: 10033,
    intentId: 100033,
  },
  {
    question: "How do I cite a Wikipedia article in a paper?",
    answer:
      "Cite it as you would any other web page in accordance with the normal citation practice the publication you are submitting the paper to follows. Citing the individual authors is not necessary, but you should at least include the date on which you retrieved the article (and ideally the full timestamp from the history).",
    category: "readers",
    actionId: 134,
    nextActionId: 133,
    stepId: 10034,
    intentId: 100034,
  },
  {
    question: "What should I do when I find a factual error in Wikipedia?",
    answer:
      "You should correct it. Wikipedia is written by volunteers who believe knowledge should be free for everyone, and the community is always ready to welcome new volunteers.",
    category: "readers",
    actionId: 135,
    nextActionId: 134,
    stepId: 10035,
    intentId: 100035,
  },
  {
    question: "Why do I see commercial ads at Wikipedia?",
    answer:
      "Wikipedia is funded by donations and does not display advertisements on any of our articles. If you see ads, then something at your end or in between must be placing them. Some browser extensions or plugins can do it, for example, Codec-C, Genieo, and InfoAtoms. Codec-C is marketed as needed to play videos.",
    category: "readers",
    actionId: 136,
    nextActionId: 135,
    stepId: 10036,
    intentId: 100036,
  },
  {
    question: "What does wiki mean?",
    answer:
      'The term "wiki" is derived from the word wikiwiki, which is the Hawaiian word for "quick". A wiki is a web site which allows people to contribute content; see our article on wikis for more information about this.',
    category: "schools",
    actionId: 137,
    nextActionId: 136,
    stepId: 10037,
    intentId: 100037,
  },
  {
    question: "Is Wikipedia accurate and reliable?",
    answer:
      "Wikipedia's objective is to become a compendium of published knowledge about notable subjects. The reliability of Wikipedia articles is limited by the external sources on which they are supposed to rely, as well as by the ability of Wikipedia's editors to understand those sources correctly and their willingness to use them properly. Therefore, articles may or may not be reliable, and readers should always use their own judgment. Students should never use information in Wikipedia (or any other online encyclopedia) for formal purposes (such as school essays) until they have verified and evaluated the information based on external sources. For this reason, Wikipedia, like any encyclopedia, is a great starting place for research but not always a great ending place.",
    category: "schools",
    actionId: 138,
    nextActionId: 137,
    stepId: 10038,
    intentId: 100038,
  },
  {
    question:
      "What prevents someone from contributing false or misleading information?",
    answer:
      "Wikipedia's content control mechanisms are reactive rather than preventive: anyone can go to almost any page and change the information to make it false or misleading. Although the majority of edits attempt to improve the encyclopedia, vandalism is frequent.",
    category: "schools",
    actionId: 139,
    nextActionId: 138,
    stepId: 10039,
    intentId: 100039,
  },
  {
    question: "Can students cite Wikipedia in assignments?",
    answer:
      "It depends on what teachers accept. Just in case, you shouldn't copy an article word for word. The best policy for all writing is to have more than one source. Wikipedia can be an excellent starting place for further research.",
    category: "schools",
    actionId: 140,
    nextActionId: 139,
    stepId: 10040,
    intentId: 100040,
  },
  {
    question: "Is it a safe environment for young people?",
    answer:
      "Wikipedia has similar safety issues to other equally open environments. Participation in Wikipedia requires children to know basic Internet safety practices.",
    category: "schools",
    actionId: 141,
    nextActionId: 140,
    stepId: 10041,
    intentId: 100041,
  },
  {
    question: "What is free media?",
    answer:
      "Free media (also called free information, among other terms) is a kind of information which can be used and modified by anyone. Free refers to freedom, not price. The concept of freedom in computing began in earnest when Richard Stallman published the GNU Manifesto in 1985. MediaWiki is a free software software package that supports a free encyclopedia.",
    category: "schools",
    actionId: 142,
    nextActionId: 141,
    stepId: 10042,
    intentId: 100042,
  },
  {
    question: "Why do people contribute to free projects?",
    answer:
      "Few surveys have developed reliable answers to why people contribute to free works like Wikipedia. Some sort of public interest or community spirit is often part of the motive. Free projects offer an opportunity to contribute to something that has lasting value and that will continue to grow. Free publishing allows writers and software developers to apply their skills outside of a strictly business environment. Casual writers and editors sometimes participate as a hobby or as a learning experience. Classrooms may evaluate and post information as a learning activity. Volunteering is also one of the few ways writers and Web designers can gain experience and exposure without already having any.",
    category: "schools",
    actionId: 143,
    nextActionId: 142,
    stepId: 10043,
    intentId: 100043,
  },
  {
    question:
      "Beyond information from the encyclopedia, what can students learn from Wikipedia?",
    answer:
      "Most young people will likely at some point become involved in interactive online activities. For educators, young people's involvement with Wikipedia provides an opportunity to survey their understanding of online safety, and to teach appropriate practices. Educators can use Wikipedia as a way of teaching students to develop hierarchies of credibility that are essential for navigating and conducting research on the Internet.",
    category: "schools",
    actionId: 144,
    nextActionId: 143,
    stepId: 10044,
    intentId: 100044,
  },
  {
    question: "Can a school group set up its own wiki?",
    answer:
      "Yes. The MediaWiki software which powers Wikipedia is a free software package and copies can be acquired gratis, which means anyone who knows how to use it and who has access to a server computer may set up their own wiki project. Due to the nature of free software, the MediaWiki software can be modified by anyone with the technical skill to do so to better fit their needs, and these changes can be redistributed to help others who might desire the same changes.",
    category: "schools",
    actionId: 145,
    nextActionId: 144,
    stepId: 10045,
    intentId: 100045,
  },
  {
    question: "Where can I learn more about Wikipedia?",
    answer:
      "Visit Wikipedia:About for more information about us, as well as the Community Portal or some of our FAQs. The main page is also available.",
    category: "schools",
    actionId: 146,
    nextActionId: 145,
    stepId: 10046,
    intentId: 100046,
  },
  {
    question: "How can I contribute?",
    answer: "For how to volunteer, see Wikipedia:Contributing to Wikipedia.",
    category: "contributing",
    actionId: 147,
    nextActionId: 146,
    stepId: 10047,
    intentId: 100047,
  },
  {
    question: "Do I have to register to edit pages?",
    answer:
      "No. Anyone can edit without any kind of registration (except disruptive users who have been banned)",
    category: "contributing",
    actionId: 148,
    nextActionId: 147,
    stepId: 10048,
    intentId: 100048,
  },
  {
    question: "What is the point of getting a user ID?",
    answer:
      "You don't need to be registered to contribute, but getting an account allows you to: Choose an appropriate username, which will be reserved just for you on Wikipedia and other Wikimedia projects. Create your own user page, to collaborate, share information about yourself, or just practice editing and publishing in your own sandbox. Communicate with other editors via your own talk page. You can also opt in to exchanging emails with other users.",
    category: "contributing",
    actionId: 149,
    nextActionId: 148,
    stepId: 10049,
    intentId: 100049,
  },
  {
    question: "Is there a minimum age requirement to contribute or register?",
    answer:
      "No. Anyone of any age may edit articles or register. Wikipedia does not even require that users disclose their age when registering!",
    category: "contributing",
    actionId: 150,
    nextActionId: 149,
    stepId: 10050,
    intentId: 100050,
  },
  {
    question: "Do I have to use my real name?",
    answer:
      "Real names are not required; some Wikipedians use real names, some don't.",
    category: "contributing",
    actionId: 151,
    nextActionId: 150,
    stepId: 10051,
    intentId: 100051,
  },
  {
    question: "How do I change my own username?",
    answer:
      "If the username change is simple and you have a confirmed email address, use Global user account rename request. For other cases, use the appropriate request page listed below.",
    category: "contributing",
    actionId: 152,
    nextActionId: 151,
    stepId: 10052,
    intentId: 100052,
  },
  {
    question: "What is the difference between a page and an article?",
    answer:
      'The term "page" encompasses all the material on Wikipedia, including encyclopedia topics, talk pages, documentation, and special pages such as Recent Changes. "Article" is a narrower term referring to a page containing an encyclopedia entry. Thus, all articles are pages, but not all pages are articles. See Wikipedia:What is an article for more.',
    category: "contributing",
    actionId: 153,
    nextActionId: 152,
    stepId: 10053,
    intentId: 100053,
  },
  {
    question: "What is an orphan?",
    answer:
      "An orphan is an article that no other article links to. Such articles can be found on Wikipedia, but it is preferable that another article should link to each article.",
    category: "contributing",
    actionId: 154,
    nextActionId: 153,
    stepId: 10054,
    intentId: 100054,
  },
  {
    question: "What is a stub?",
    answer:
      "A stub on Wikipedia is a very short article, usually of one paragraph or less. Many excellent articles started out as short stubs. Likewise, our hope is that existing stubs will be expanded into proper articles.",
    category: "contributing",
    actionId: 155,
    nextActionId: 154,
    stepId: 10055,
    intentId: 100055,
  },
  {
    question: "What is disambiguation?",
    answer:
      "Disambiguation in Wikipedia is the process of resolving conflicts that arise when a potential article title is ambiguous, most often because it refers to more than one subject covered by Wikipedia, either as the main topic of an article, or as a subtopic covered by an article in addition to the article's main topic. For example, Mercury can refer to a chemical element, a planet, a Roman god, and many other things.",
    category: "contributing",
    actionId: 156,
    nextActionId: 155,
    stepId: 10056,
    intentId: 100056,
  },
  {
    question: "What is a minor edit? When should I use it?",
    answer:
      'When editing a page, a logged-in user has the option to flag an edit as "minor." Use of this flag is largely a matter of personal taste. A general rule of thumb is that an edit that corrects spelling or formatting, performs minor rearrangements of text, or tweaks only a few words, should generally be flagged as a "minor edit".',
    category: "contributing",
    actionId: 157,
    nextActionId: 156,
    stepId: 10057,
    intentId: 100057,
  },
  {
    question: "Where do I find more information beyond this FAQ?",
    answer:
      "You can start by reading the introduction at Wikipedia:Introduction. The main help page is Help:Contents. See also the Wikipedia department directory.",
    category: "contributing",
    actionId: 158,
    nextActionId: 157,
    stepId: 10058,
    intentId: 100058,
  },
  {
    question: "Are there any rules or guidelines I should be aware of?",
    answer:
      "See Wikipedia:Policies and guidelines, which includes: standard forms for page names: Wikipedia:Article titles dealing with different things with the same name: Wikipedia:Disambiguation",
    category: "contributing",
    actionId: 159,
    nextActionId: 158,
    stepId: 10059,
    intentId: 100059,
  },
  {
    question:
      'What is "Recent Changes", and what do the abbreviations used there mean?',
    answer:
      "Recent Changes lists all the edits that have been made over a given time period. See Wikipedia:Recent Changes for info.",
    category: "contributing",
    actionId: 160,
    nextActionId: 159,
    stepId: 10060,
    intentId: 100060,
  },
  {
    question: "What do I do if I find two articles on the same subjects?",
    answer:
      "You could merge them yourself if you are feeling bold. Pick the most suitable page name (which may not necessarily be one of the existing ones!). If you're not sure which name to use, or whether the two articles should really be merged, use the procedure at Help:Merging. You can also make a mention of the problem on the list of Wikipedia:Proposed mergers.",
    category: "contributing",
    actionId: 161,
    nextActionId: 160,
    stepId: 10061,
    intentId: 100061,
  },
  {
    question:
      "What is the ideal/maximum length of an article? When should an article be split into smaller pieces?",
    answer:
      "Each Wikipedia article is in a process of evolution and is likely to continue growing. Other editors will add to articles when you are done with them. Wikipedia has practically unlimited storage space; however, long articles may be more difficult to read, navigate, and comprehend.",
    category: "contributing",
    actionId: 162,
    nextActionId: 161,
    stepId: 10062,
    intentId: 100062,
  },
  {
    question: "Can we debate or talk about the subjects here?",
    answer:
      "This is an encyclopedia that strives to present subjects from the neutral point of view. Debate intended to convince someone else of your point of view on a certain subject may take place on the Wikipedia:IRC channels. Discussion intended to improve articles is welcome here, however; it takes place in the Talk: pages attached to every article.",
    category: "contributing",
    actionId: 163,
    nextActionId: 162,
    stepId: 10063,
    intentId: 100063,
  },
  {
    question:
      "I've found vandalism, or I've damaged a page by mistake! How can I restore it?",
    answer:
      "There are several ways to revert edits. A reversion can be carried out manually by editing the page to delete wrongly added text or restore wrongly deleted text. You can do this by copying and pasting text from a past version.",
    category: "contributing",
    actionId: 164,
    nextActionId: 163,
    stepId: 10064,
    intentId: 100064,
  },
  {
    question: "Which languages can I use?",
    answer:
      "On the English Wikipedia, use English, unless you're mentioning a name or abbreviation that has no known English translation. If you want to write using other languages there are many other Wikipedias in different languages",
    category: "contributing",
    actionId: 165,
    nextActionId: 164,
    stepId: 10065,
    intentId: 100065,
  },
  {
    question: "Should I use American English or British English?",
    answer:
      "People contribute to the English language Wikipedia in every possible variety and dialect of formal written English. The English language Wikipedia particularly welcomes contributions from editors whose first language is not English. Still, it is generally good form to keep usage consistent within a given article. The official policy is to use British spelling when writing about British topics, and American for topics relating to the United States.",
    category: "contributing",
    actionId: 166,
    nextActionId: 165,
    stepId: 10066,
    intentId: 100066,
  },
  {
    question: "How do I check spelling on a page?",
    answer:
      "When editing a larger article, it may be more convenient to paste the text into your favorite text editor or word processor first, to edit and check the spelling there, and then paste your corrected text back into Wikipedia editor to complete your contribution. You can also use an online spelling checker such as Spellonline.",
    category: "contributing",
    actionId: 167,
    nextActionId: 166,
    stepId: 10067,
    intentId: 100067,
  },
  {
    question: "Why are some links red?",
    answer:
      "This indicates that a page with that name has not yet been started.",
    category: "contributing",
    actionId: 168,
    nextActionId: 167,
    stepId: 10068,
    intentId: 100068,
  },
  {
    question: "What about the pale blue links?",
    answer:
      "Those are external links; i.e. those that link to pages outside Wikipedia.",
    category: "contributing",
    actionId: 169,
    nextActionId: 168,
    stepId: 10069,
    intentId: 100069,
  },
  {
    question: "What happens when two users edit a page at the same time?",
    answer:
      "This is called an edit conflict, and only happens when two users try to edit the same part of a page. You'll get a conflict screen that displays both versions in separate windows, along with a summary highlighting the differences (typically showing the edits of both users, except those which both have made exactly the same), and instructions on how you should proceed. It's virtually impossible to lose any data.",
    category: "contributing",
    actionId: 170,
    nextActionId: 169,
    stepId: 10070,
    intentId: 100070,
  },
  {
    question:
      "What happens if my computer or browser crashes mid-edit, or if the server does not respond?",
    answer:
      "In case of a crash you'll lose your edit. To some extent, you can guard against this by editing in a text editor, for major work (but note that with regard to a system crash this does not help, unless you save frequently to disk).",
    category: "contributing",
    actionId: 171,
    nextActionId: 170,
    stepId: 10071,
    intentId: 100071,
  },
  {
    question:
      "How do I learn about changes to certain topics without having to go there from time to time?",
    answer:
      'If you are a logged-in user, on every page you will see either a link that says "Watch this article", or a small five-pointed star next to "View history". If you click on it, the article will be added to your personal watchlist. Your watchlist will show you the latest changes on your watched articles.',
    category: "contributing",
    actionId: 172,
    nextActionId: 171,
    stepId: 10072,
    intentId: 100072,
  },
  {
    question: "What file formats should I use for pictures/videos?",
    answer:
      "For images, use JPEG for photographs, and SVG for drawings and logos. PNG can also be used. Use GIF for inline animations. For video, Ogg Theora is currently the only recommended format.",
    category: "contributing",
    actionId: 173,
    nextActionId: 172,
    stepId: 10073,
    intentId: 100073,
  },
  {
    question: "What file format should I use for sound?",
    answer:
      "Multiple encodings are encouraged. WAV and Ogg Vorbis are allowed, but MP3 is not.",
    category: "contributing",
    actionId: 174,
    nextActionId: 173,
    stepId: 10074,
    intentId: 100074,
  },
  {
    question: "One of the contributors is being unreasonable. Help!",
    answer: "See Wikipedia:Etiquette and Wikipedia:Dispute resolution.",
    category: "contributing",
    actionId: 175,
    nextActionId: 174,
    stepId: 10075,
    intentId: 100075,
  },
  {
    question:
      "I've made a suggestion on an article's talk page, but have not gotten any responses. How long should I wait before implementing my suggested change?",
    answer:
      "Per Wikipedia:Be bold, there's no need to wait at all. Simply make your change. If someone else disagrees with it, they can always revert the change, and then you can talk the issue out with that person.",
    category: "contributing",
    actionId: 176,
    nextActionId: 175,
    stepId: 10076,
    intentId: 100076,
  },
  {
    question:
      'Can I change the default number of contributions displayed in the "My contributions" list?',
    answer:
      "Currently, no. You can, however, change the setting on the page and bookmark the resulting page.",
    category: "contributing",
    actionId: 177,
    nextActionId: 176,
    stepId: 10077,
    intentId: 100077,
  },
  {
    question: "Why was the article I created deleted?",
    answer:
      "New articles are deleted for not following Wikipedia policies and guidelines. If your article was deleted, future contributions from you are still welcome.",
    category: "contributing",
    actionId: 178,
    nextActionId: 177,
    stepId: 10078,
    intentId: 100078,
  },
  {
    question: "Why was the edit I made removed?",
    answer:
      "There are a variety of reasons (some common reasons). The first thing you should do is look at the history page for the article you edited. This will tell you who changed it, when they changed it, and hopefully a short reason why they changed it. If it says something like see talk, then you should look at the talk page for the article.",
    category: "contributing",
    actionId: 179,
    nextActionId: 178,
    stepId: 10079,
    intentId: 100079,
  },
  {
    question: "Should I translate pages across the various Wikipedias?",
    answer:
      "Yes, it's a good idea to cross-pollinate. Please give credit to the contributors of the original article by noting that you have done so, with a link to the original, in the edit summary or at the article's talk page. See Wikipedia:Translation for further information.",
    category: "contributing",
    actionId: 180,
    nextActionId: 179,
    stepId: 10080,
    intentId: 100080,
  },
  {
    question: "What about using machine translation?",
    answer:
      "Machine translation is useful for obtaining the general idea of a text in an unfamiliar language, but it produces poor translations and should not be used on its own",
    category: "contributing",
    actionId: 181,
    nextActionId: 180,
    stepId: 10081,
    intentId: 100081,
  },
  {
    question:
      "How can I tell if an article exists in another language Wikipedia?",
    answer:
      "We try to build links between different language pages – that's one way of seeing if an article exists elsewhere. If you don't see the language links at the left of a page, go looking for the corresponding article(s) on foreign Wikipedias.",
    category: "contributing",
    actionId: 182,
    nextActionId: 181,
    stepId: 10082,
    intentId: 100082,
  },
  {
    question:
      "Is it OK to link to other sites, as long as the material is not copied onto Wikipedia?",
    answer:
      "External links are certainly allowed. Properly used, they increase the usability of Wikipedia. Keep in mind, however, that Wikipedia is not a web directory; external links should support the content of the article, not replace it. An article should be more than a container for external links, and the content should not require the reader to leave the site to understand the subject.",
    category: "contributing",
    actionId: 183,
    nextActionId: 182,
    stepId: 10083,
    intentId: 100083,
  },
  {
    question:
      "I have, or can get, special permission to copy an image or article to Wikipedia. Is it OK to do that?",
    answer:
      "The text of Wikipedia is covered by the Creative Commons Attribution/Share-Alike License (CC-BY-SA) and, in most cases, the GNU Free Documentation License (GFDL) (unversioned, with no invariant sections, front-cover texts, or back-cover texts). Images are covered by various free licenses (see the Wikimedia Foundation Licensing Policy).",
    category: "contributing",
    actionId: 184,
    nextActionId: 183,
    stepId: 10084,
    intentId: 100084,
  },
  {
    question:
      "I have an out-of-copyright image (or text) that is reproduced in an in-copyright book. Can I scan / type it into Wikipedia?",
    answer:
      "Providing they haven't altered the image then they can't claim a copyright on it. If it was in the public domain before they used it, it's still in the public domain afterward.",
    category: "contributing",
    actionId: 185,
    nextActionId: 184,
    stepId: 10085,
    intentId: 100085,
  },
  {
    question: "Does using a GIF image in Wikipedia violate its patent?",
    answer:
      "No. The patent of the LZW compression algorithm used with the GIF format has expired.",
    category: "contributing",
    actionId: 186,
    nextActionId: 185,
    stepId: 10086,
    intentId: 100086,
  },
  {
    question: "How do I donate to Wikipedia?",
    answer: "See http://wikimediafoundation.org/fundraising.",
    category: "contributing",
    actionId: 187,
    nextActionId: 186,
    stepId: 10087,
    intentId: 100087,
  },
  {
    question: "Can I really change whatever I want on Wikipedia?",
    answer:
      "Yes, you can on almost any page. There are some pages on Wikipedia that are protected, so that only administrators can modify them. This includes pages like the Main Page, which are permanently protected, or normal articles which are temporarily protected during the resolution of an edit war. Some pages are also semi-protected, so that anonymous and new users cannot edit them, to reduce vandalism.",
    category: "contributing",
    actionId: 188,
    nextActionId: 187,
    stepId: 10088,
    intentId: 100088,
  },
  {
    question: "How do I get a count of my edits?",
    answer:
      "There are a number of tools called edit counters that can display the total count of your edits as well as the number of edits in various namespaces. Your edit count, including deleted edits, is displayed when you enter your preferences.",
    category: "contributing",
    actionId: 189,
    nextActionId: 188,
    stepId: 10089,
    intentId: 100089,
  },
  {
    question: "Where can I get feedback?",
    answer:
      "For useful feedback or constructive criticism of your article, see Wikipedia:Requests for feedback.",
    category: "contributing",
    actionId: 190,
    nextActionId: 189,
    stepId: 10090,
    intentId: 100090,
  },
  {
    question: "How do I edit a page?",
    answer:
      'To edit the whole page at once, click the "edit this page" tab at the top. To edit just one section, click the "edit" link to the right of the section heading. To edit on Wikipedia, you type in a special markup language called wikitext.',
    category: "editing",
    actionId: 191,
    nextActionId: 190,
    stepId: 10091,
    intentId: 100091,
  },
  {
    question: "How do I make links?",
    answer:
      "Edit any page to see how wikilinks are made. (The edit-view is safe, and encouraged.) The most basic syntax you'll see in the wikitext is that the words of the link are surrounded by double square brackets: [[page name]].",
    category: "editing",
    actionId: 192,
    nextActionId: 191,
    stepId: 10092,
    intentId: 100092,
  },
  {
    question: "How do I make a link appear different from a page name?",
    answer:
      "Use a piped link to separate the page name from the way the link will appear: [[ page name | displayed text ]]",
    category: "editing",
    actionId: 193,
    nextActionId: 192,
    stepId: 10093,
    intentId: 100093,
  },
  {
    question: "How do I insert a new line?",
    answer:
      "Normally, Wikipedia doesn't start a new line when you press the Enter key. If you press the Enter key twice, Wikipedia will start a new paragraph. To force a single new line (for instance, when you want to insert a poem) insert the HTML element <br /> after the line.",
    category: "editing",
    actionId: 194,
    nextActionId: 193,
    stepId: 10094,
    intentId: 100094,
  },
  {
    question: "How do I rename a page?",
    answer:
      "Registered users with a little bit of editing history under their belts can move a page; this moves the page content and edit history to a new title, and creates a redirect page at the old title. This method is better than just copying and pasting the content by hand, as it preserves the article's history, as required by Wikipedia's license.",
    category: "editing",
    actionId: 195,
    nextActionId: 194,
    stepId: 10095,
    intentId: 100095,
  },
  {
    question: "How do I delete a page?",
    answer:
      "First off, please don't blank articles (remove all the text from them). Such changes will most likely get reverted soon afterwards, so they are pointless, too. The procedure for deletions is explained at Wikipedia:Deletion policy. Articles that should be deleted are most commonly nominated at Wikipedia:Articles for deletion.",
    category: "editing",
    actionId: 196,
    nextActionId: 195,
    stepId: 10096,
    intentId: 100096,
  },
  {
    question: "How do I edit a redirect page?",
    answer:
      'The easiest way to edit the redirected page is to click on the link you see at the top of the page after being redirected: "redirected from ...".',
    category: "editing",
    actionId: 197,
    nextActionId: 196,
    stepId: 10097,
    intentId: 100097,
  },
];
module.exports = {
  dataBase,
};
