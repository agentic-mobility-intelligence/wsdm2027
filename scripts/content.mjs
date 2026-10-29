// Shared editorial content from the supplied proposal and the organizers' updates.
// Set confirmed information here, then run: node scripts/build.mjs
export const event = {
  shortName: 'AMI’27',
  name: 'Agentic Mobility Intelligence',
  subtitle: 'From Mobility Data Mining to Closed-Loop Agentic Systems',
  status: 'confirmed',
  date: '19 February 2027',
  time: '13:30–17:00',
  timezone: 'Hong Kong time (UTC+8)',
  // Adopt the latest workshop-paper deadlines allowed by WSDM 2027 (23:59 AoE).
  submissionDate: '30 November 2026',
  notificationDate: '18 December 2026',
  deadlinesSourceUrl: 'https://www.wsdm-conference.org/2027/cfworkshops.html',
  submissionUrl: '',
  contact: { name: 'Weigang Lu', email: 'weiganglu314@outlook.com' },
};

export const themes = [
  { number: '01', label: 'Theme I', title: 'Mobility data mining and user modeling', topics: ['Geo-location, trajectory, and mobility behavior mining, including user activity and preference modeling.', 'Traffic, demand, travel-time, and mobility forecasting for downstream recommendation and decision making.', 'Large-scale graph and spatiotemporal learning for mobility data.'], summaryTopics: ['Geo-location and trajectory mining; activity, behavior, and preference modeling.', 'Traffic, demand, and travel-time prediction; mobility forecasting for decisions.', 'Large-scale graph and spatiotemporal learning.'] },
  { number: '02', label: 'Theme II', title: 'Recommendation and agentic systems for mobility', topics: ['Recommendation, matching, routing, and repositioning for mobility platforms.', 'Agentic recommender systems and intelligent driver, passenger, fleet, delivery, and platform agents.', 'Interactive and agentic mobility assistants for contextual, sequential, and personalized decision making.'], summaryTopics: ['Platform recommendation, matching, routing, and repositioning.', 'Agentic recommender systems; driver, passenger, fleet, delivery, and platform agents.', 'Interactive and agentic mobility assistants for contextual, sequential, personalized decisions.'] },
  { number: '03', label: 'Theme III', title: 'Interaction, feedback, and closed-loop mobility systems', topics: ['Human–agent and multi-agent interaction, communication, coordination, and competition.', 'Behavioral responses to recommendations and feedback between algorithmic decisions and future mobility states.', 'Closed-loop evaluation through simulation, counterfactual analysis, online experimentation, and real-world deployment.'], summaryTopics: ['Human–agent and multi-agent interaction: communication, coordination, and competition.', 'Behavioral responses and feedback between recommendations and future mobility states.', 'Closed-loop evaluation: simulation, counterfactual analysis, online experiments, and deployment.'] },
];

// Display emphasis for the full CFP topics and condensed homepage summaries.
export const topicKeywords = [
  'trajectory',
  'mobility forecasting',
  'graph and spatiotemporal learning',
  'matching, routing, and repositioning',
  'Agentic recommender systems',
  'agentic mobility assistants',
  'Human–agent and multi-agent interaction',
  'Behavioral responses',
  'Closed-loop evaluation',
];

export const workshop = {
  heroIntroduction: 'Exploring how mobility recommendations, human responses, and agent decisions shape shared transportation systems.',
  introduction: [
    'AMI’27 explores how mobility systems can learn and make decisions when recommendations change user behavior and the conditions for future decisions. Navigation, ride-hailing, and delivery platforms make this challenge concrete: a recommendation that works for one user may have different effects when many users follow it. Understanding these feedback effects requires connecting mobility data mining with recommendation, user modeling, and agentic decision making.',
    'The workshop brings together researchers and practitioners working across these fields, from learning mobility patterns to deploying interactive services. It connects to WSDM’s interests in data mining, recommender systems, and user behavior on large-scale digital platforms. Contributions can address individual components or complete systems, provided they examine the implications for decisions or interaction.',
  ],
  focusQuestions: [
    'When do agentic capabilities improve mobility decisions?',
    'How do users and agents respond to recommendations?',
    'How can we evaluate the resulting system-level effects?',
  ],
  loopDescription: 'The system mines mobility data and recommends actions or makes platform decisions. Humans and other agents respond, changing the shared mobility environment. The system observes these changes and learns for the next decision.',
  definition: 'AMI is defined by the coupling between sequential decisions, participant responses, and future operating conditions, rather than by an LLM interface or a particular architecture.',
  objectives: [
    { title: 'Connect mining, decisions, and interaction', text: 'Develop a shared research agenda linking mobility mining, recommendation, participant behavior, and closed-loop learning.' },
    { title: 'Establish when agents add value', text: 'Identify evaluation principles that compare agents and conventional recommenders on decision quality, behavioral feedback, and system-wide outcomes.' },
    { title: 'Support shared research resources', text: 'Explore benchmarks, datasets, simulation environments, and industry collaborations, and share a public synthesis of the workshop.' },
  ],
  audience: 'We welcome researchers and practitioners in data mining, recommendation, user modeling, agentic and multi-agent systems, and mobility applications.',
  participation: 'The half-day, in-person workshop combines invited talks, contributed talks, posters, and a panel.',
  speakerAnnouncement: 'Prof. Lei Chen (HKUST(GZ)) will give an invited talk. Additional speakers and panelists will be announced.',
};

// Speaker confirmed by the organizers. The title, abstract, and exact slot are pending.
// Profile and portrait: https://personal.hkust-gz.edu.cn/Chenlei/
// Planned focus and timing follow the supplied invitation, not a final talk abstract.
export const invitedSpeaker = {
  name: 'Lei Chen',
  honorific: 'Prof.',
  institution: 'The Hong Kong University of Science and Technology (Guangzhou)',
  role: 'Chair Professor · Dean of Information Hub',
  image: 'lei-chen.webp',
  homepage: 'https://personal.hkust-gz.edu.cn/Chenlei/',
  biography: 'Prof. Chen works on data management and database systems, including data-driven AI and spatiotemporal data. His expertise connects mobility data analysis with the workshop’s questions about effective real-world decisions.',
  talkTitle: 'Title to be announced',
  focus: 'The talk is expected to explore how data mining and spatiotemporal intelligence can support reliable, adaptive decisions in dynamic mobility environments. Topics may include decision-making with incomplete information, evolving mobility patterns, and learning from behavioral feedback when interventions influence future observations.',
  timing: {
    start: '13:40',
    end: '14:00',
    duration: '20 minutes, including Q&A',
    placement: 'After the opening remarks, before Session 01: Mobility Data Mining & User Modeling.',
  },
};

const organizerProfiles = {
  'Weigang Lu': { honorific: 'Prof.', homepage: 'https://weiganglu.github.io/HomePage/', homepageLabel: 'Homepage' },
  'Zheng Liang': { honorific: 'Dr.', homepage: 'https://scholar.google.com/citations?user=w3EPRs8AAAAJ&hl=en', homepageLabel: 'Google Scholar' },
  'Hong Kam Lo': { honorific: 'Prof.', homepage: 'https://cehklo.people.ust.hk/', homepageLabel: 'Homepage' },
  'Changyi Ma': { honorific: 'Prof.', homepage: 'https://cym-mc.github.io/', homepageLabel: 'Homepage' },
  'Zhiwen Zhang': { honorific: 'Prof.', homepage: 'https://sai.jlu.edu.cn/info/1094/5349.htm', homepageLabel: 'Homepage' },
  'Qinggang Zhang': { honorific: 'Prof.', homepage: 'https://qing145.github.io/', homepageLabel: 'Homepage' },
};

// Institution names follow https://sai.jlu.edu.cn/en/About/Instruction.htm
// and https://gsc.hkust.edu.hk/; biography details follow the supplied proposal.
export const organizers = [
  { name: 'Weigang Lu', initials: 'WL', image: 'weigang-lu.webp', institution: 'Northwest University', department: 'School of Computer Science', email: 'weiganglu314@outlook.com', contact: true, bio: "Weigang Lu is a Full Professor at the School of Computer Science, Northwest University. He received his Ph.D. in Computer Science from Xidian University in 2025. Previously, he was a Postdoctoral Fellow in the Department of Civil and Environmental Engineering at The Hong Kong University of Science and Technology (HKUST). His research focuses on semi-supervised learning and graph neural networks. He has published in venues including NeurIPS, SIGKDD, AAAI, ICDE, WWW, and IEEE TKDE. He serves as a reviewer for leading journals and conferences and has served as a Session Chair for WWW 2026 and AAAI 2026." },
  { name: 'Zheng Liang', initials: 'ZL', image: 'zheng-liang.webp', institution: 'The Hong Kong University of Science and Technology', department: 'Department of Civil and Environmental Engineering', email: 'liangz@ust.hk', bio: "Zheng Liang is a Research Engineer at the GREAT Smart Cities Institute at The Hong Kong University of Science and Technology (HKUST). He received his Ph.D. in Civil Engineering (Transportation) in 2023. He obtained a Bachelor of Engineering in Traffic Engineering from Huazhong University of Science and Technology and a dual Bachelor of Economics in Finance Investments from Zhongnan University of Economics and Law in 2018. His research focuses on choice behavior, walkability, machine learning models, big-data analysis, transportation network design, and optimization. He has published in leading transportation journals and conferences." },
  { name: 'Qinggang Zhang', initials: 'QZ', image: 'qinggang-zhang.webp', institution: 'Jilin University', department: 'School of Artificial Intelligence', email: 'qinggangzhang@jlu.edu.cn', bio: "Qinggang Zhang is a Professor at the School of Artificial Intelligence, Jilin University, which he joined in May 2026. He received his Ph.D. from the Department of Computing, The Hong Kong Polytechnic University, and his bachelor’s degree from the School of Computer Science, Northwestern Polytechnical University. His research focuses on large language models, intelligent agents, retrieval-augmented generation, and LLM security and trustworthiness. In the past three years, he has published more than 20 papers as first or corresponding author in venues including NeurIPS, ICLR, ICML, KDD, ACL, WWW, IEEE TKDE, and ACM TOIS." },
  { name: 'Zhiwen Zhang', initials: 'ZZ', image: 'zhiwen-zhang.webp', institution: 'Jilin University', department: 'School of Artificial Intelligence', email: 'zhangzhiwen@jlu.edu.cn', bio: "Zhiwen Zhang is a Professor at the School of Artificial Intelligence, Jilin University. He received his Ph.D. from the University of Tokyo. Previously, he worked as a senior scientist in Japan and a guest researcher at Tohoku University’s International Research Institute of Disaster Science. His research focuses on spatiotemporal data mining, trajectory modeling, multimodal data fusion, and disaster-risk analytics. He has led a project funded by the JSPS Grant-in-Aid for Early-Career Scientists and published in KDD, IEEE TKDE, TMC, T-ITS, and TVCG. He has also served on program committees and as a reviewer for major conferences and journals." },
  { name: 'Changyi Ma', initials: 'CM', image: 'changyi-ma.webp', institution: 'Jilin University', department: 'School of Artificial Intelligence', email: 'changyima@jlu.edu.cn', bio: "Changyi Ma is an Associate Professor at the School of Artificial Intelligence, Jilin University. She received her Ph.D. from The Chinese University of Hong Kong in 2022, supervised by Professor Shuguang Cui (IEEE Fellow) and Professor Wenye Li. Her research focuses on machine learning, data mining, and continual learning. She has published in leading conferences and journals in machine learning and data mining. As first author, she received the Best Short Paper Nomination Award at CIKM 2021." },
  { name: 'Hong Kam Lo', initials: 'HL', image: 'hong-kam-lo.webp', institution: 'The Hong Kong University of Science and Technology', department: 'Department of Civil and Environmental Engineering', email: 'cehklo@ust.hk', bio: "Hong Kam Lo is Chair Professor of Civil and Environmental Engineering and Founding Director of the GREAT Smart Cities Institute at The Hong Kong University of Science and Technology (HKUST). He received his Ph.D. in Civil Engineering from The Ohio State University in 1991. After working at Oak Ridge National Laboratory and the University of California, Berkeley, he joined HKUST in 1996 and became Associate Professor in 2001, Professor in 2007, and Chair Professor in 2014. His research focuses on intelligent transportation systems, smart cities, and sustainability. He developed Hong Kong’s first agent-based dynamic transportation model, adopted by industry for network service planning, and his research on signalized roundabouts has also been implemented. He works with government and industry partners and serves as founding editor-in-chief of Transportmetrica B: Transport Dynamics and managing editor of the Journal of Intelligent Transportation Systems. His awards include the triennial World Conference on Transport Research Award and the School of Engineering Research Excellence Award." },
].map(organizer => ({ ...organizer, ...organizerProfiles[organizer.name] }));

export const schedule = [
  { start: '13:30', end: '13:40', type: 'Welcome', title: 'What is Agentic Mobility Intelligence?', detail: 'Opening remarks and introduction to the workshop’s central research question.' },
  { start: invitedSpeaker.timing.start, end: invitedSpeaker.timing.end, type: 'Invited talk', title: `Invited Talk I · ${invitedSpeaker.honorific} ${invitedSpeaker.name}`, detail: 'HKUST(GZ). Title to be announced. Tentative slot; includes Q&A.' },
  { start: '14:00', end: '14:30', type: 'Session 01', title: 'Mobility Data Mining & User Modeling', detail: 'Three contributed talks, 10 minutes each including questions.' },
  { start: '14:30', end: '15:00', type: 'Session 02', title: 'Recommendation & Agentic Systems for Mobility', detail: 'Three contributed talks, 10 minutes each including questions.' },
  { start: '15:00', end: '15:30', type: 'Break & posters', title: 'Coffee, conversations & posters', detail: 'Meet the authors and discuss systems, datasets and early-stage ideas.', break: true },
  { start: '15:30', end: '15:50', type: 'Invited talk', title: 'Invited Talk II', detail: 'Speaker and title to be announced. Includes questions.' },
  { start: '15:50', end: '16:20', type: 'Session 03', title: 'Interaction, Feedback & Closed-Loop Mobility Systems', detail: 'Three contributed talks, 10 minutes each including questions.' },
  { start: '16:20', end: '16:50', type: 'Panel', title: 'From Prediction to Intervention', detail: 'What changes when mobility systems become agentic? A moderated discussion with audience questions.' },
  { start: '16:50', end: '17:00', type: 'Closing', title: 'A shared research agenda', detail: 'Closing discussion and community roadmap.' },
];
