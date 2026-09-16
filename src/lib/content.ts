export const brand = {
  name: "Bina Horizon Association",
  short: "Bina Horizon",
  slogan: "Talented for Impact",
  line: "Empowering Girls to Rise Beyond Boundaries",
  founder: "Wandia Remedy",
  founderRole: "Founder & Visionary Leader",
  principle: "Grounded in purpose. Designed for impact.",
  colours: "Brown for Grounding · Gold for Excellence",
  declaration:
    "When a girl rises beyond her boundaries, an entire generation rises with her.",
  vision:
    "To transform the lives of 1 million young African women over the next 10 years, empowering them with the wisdom, practical skills, and faith required to lead, innovate, and shape global communities.",
  mission:
    "To cultivate a global ecosystem of purpose-driven young women—equipping them with holistic education, transformative mentorship, and practical economic skills anchored in moral and spiritual excellence.",
};

export const nav = [
  { href: "/", label: "Index", index: "00" },
  { href: "/about", label: "The Name", index: "01" },
  { href: "/programs", label: "The Work", index: "02" },
  { href: "/values", label: "The Five R’s", index: "03" },
  { href: "/join", label: "Join the Horizon", index: "04" },
] as const;

export const nameMeaning = {
  bina: {
    word: "Bina",
    origin: "Hebrew & Sanskrit",
    meaning: "Understanding, wisdom, discernment",
    copy: "Bina is the inner work — intellectual growth, knowledge, and insight. It is how a young woman learns to see clearly, decide well, and lead with a mind that is both sharp and kind.",
  },
  horizon: {
    word: "Horizon",
    origin: "The line that keeps moving",
    meaning: "Limitless possibility, aspiration, growth",
    copy: "Horizon is the outer work — the belief that no girl should be asked to shrink to the size of her circumstances. She is invited to look further, then walk there.",
  },
};

export const values = [
  {
    letter: "R",
    key: "responsibility",
    title: "Responsibility",
    subtitle: "Stewardship & Action",
    copy: "Taking full ownership of personal growth, community development, and leadership to drive sustainable positive change.",
  },
  {
    letter: "R",
    key: "realization",
    title: "Realization",
    subtitle: "Potential & Purpose",
    copy: "Discovering and activating divine potential to turn individual ability into collective impact.",
  },
  {
    letter: "R",
    key: "reverence",
    title: "Reverence",
    subtitle: "Faith & Respect",
    copy: "Showing respect for oneself, others, and God; honoring human dignity and cultivating spiritual grounding.",
  },
  {
    letter: "R",
    key: "rectitude",
    title: "Rectitude",
    subtitle: "Integrity & Moral Excellence",
    copy: "Acting with uncompromising honesty, accountability, and moral excellence in every endeavor.",
  },
  {
    letter: "R",
    key: "radiant",
    title: "Radiant Purpose",
    subtitle: "Living God’s Purpose",
    copy: "Aligning talent, career, and daily life with faith, core values, and impactful service to humanity.",
  },
] as const;

export const objectives = [
  {
    title: "Creative Empowerment",
    copy: "Artistic and creative mastery in decoration, makeup artistry, beading, Ankara styling, dressmaking, and fashion design — self-expression that can also become a livelihood.",
  },
  {
    title: "Life Skills & Leadership",
    copy: "Public speaking, strategic decision-making, critical thinking, problem-solving, teamwork, and governance. The work of becoming someone others can trust.",
  },
  {
    title: "Financial Literacy & Enterprise",
    copy: "Budgeting, saving, seed investment planning, and business development — practical independence, not slogans about it.",
  },
  {
    title: "Holistic Well-being",
    copy: "Physical, emotional, mental, and spiritual health. Resilience, personal identity, and a self-worth that does not wait for permission.",
  },
];

export const programs = [
  {
    n: "01",
    title: "Leadership & Mentorship",
    image: "/images/mentor.jpg",
    copy: "Executive one-on-one coaching, peer leadership, purpose work, and career guidance. Mentorship here is not a panel and a handshake. It is a long conversation with someone who stays.",
  },
  {
    n: "02",
    title: "Digital Literacy & STEM",
    image: "/images/study.jpg",
    copy: "Microsoft Office, digital marketing, AI-tools awareness, and creative software. The future already assumes these skills. We refuse to let girls be late to a room they should own.",
  },
  {
    n: "03",
    title: "Creative Arts & Trade",
    image: "/images/textile.jpg",
    copy: "Hands-on workshops in makeup, Ankara design, beauty curation, beading, and event décor. Beauty as craft. Craft as income. Income as choice.",
  },
  {
    n: "04",
    title: "Financial Education & Enterprise",
    image: "/images/craft.jpg",
    copy: "Micro-business management, accounting basics, savings circles, and venture planning. Money is taught as a tool of dignity, not a mystery reserved for someone else.",
  },
  {
    n: "05",
    title: "Health & Holistic Well-being",
    image: "/images/presence.jpg",
    copy: "Mental health awareness, emotional resilience, wellness practices, and spiritual nurture. A girl cannot carry a generation if no one helps her carry herself.",
  },
  {
    n: "06",
    title: "Community & Cultural Exchange",
    image: "/images/community.jpg",
    copy: "Social impact projects, cross-cultural exposure, and community service. The horizon is not a private view. It is a shared line.",
  },
];

export const sdgs = [
  { code: "04", title: "Quality Education", area: "Education & Mentorship" },
  { code: "08", title: "Decent Work", area: "Economic Empowerment" },
  { code: "05", title: "Gender Equality", area: "Arts, Culture & Gender" },
  { code: "17", title: "Partnerships", area: "Sustainability & Scale" },
];

export const governance = [
  {
    title: "Founder & Visionary Leader",
    person: "Wandia Remedy",
    copy: "Strategic vision, brand alignment, and the directional spine of the movement.",
  },
  {
    title: "Executive Committee",
    person: "Stewardship",
    copy: "Operational management, financial care, curriculum quality, and compliance.",
  },
  {
    title: "Mentors & Field Coordinators",
    person: "The work on the ground",
    copy: "Skills training, spiritual guidance, workshop delivery, and community engagement.",
  },
  {
    title: "Volunteers & Ambassadors",
    person: "The widening circle",
    copy: "Local outreach, event logistics, and the quiet labour that makes a gathering feel like home.",
  },
];

export const membership = {
  eligibility:
    "Open to young women and girls committed to personal growth, empowerment, and upholding Bina Horizon’s core values.",
  benefits:
    "Direct access to structured mentorship, digital literacy courses, creative trade workshops, enterprise incubators, and a supportive network.",
  responsibilities:
    "Active participation, championing community upliftment, living by the 5 R’s, and mentoring younger peers.",
};

export const roles = [
  "Young woman seeking membership",
  "Mentor",
  "Volunteer / Ambassador",
  "Partner / Patron",
] as const;
