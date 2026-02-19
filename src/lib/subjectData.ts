import mathImg from "@/assets/subjects/mathematics.jpg";
import englishImg from "@/assets/subjects/english.jpg";
import scienceImg from "@/assets/subjects/science.jpg";
import socialImg from "@/assets/subjects/social-studies.jpg";
import itImg from "@/assets/subjects/it.jpg";
import spanishImg from "@/assets/subjects/spanish.jpg";
import geographyImg from "@/assets/subjects/geography.jpg";
import historyImg from "@/assets/subjects/history.jpg";
import businessImg from "@/assets/subjects/business.jpg";
import officeImg from "@/assets/subjects/office.jpg";
import biologyImg from "@/assets/subjects/biology.jpg";
import chemistryImg from "@/assets/subjects/chemistry.jpg";
import physicsImg from "@/assets/subjects/physics.jpg";
import accountsImg from "@/assets/subjects/accounts.jpg";
import economicsImg from "@/assets/subjects/economics.jpg";
import edpmImg from "@/assets/subjects/edpm.jpg";
import agricultureImg from "@/assets/subjects/agriculture.jpg";

export type SubjectInfo = {
  name: string;
  slug: string;
  description: string;
  category: "Science" | "Business" | "Arts";
  image: string;
  topics: string[];
  learningOutcomes: string[];
  assessmentMethod: string;
  duration: string;
  prerequisites: string;
};

export const gradeData: Record<string, SubjectInfo[]> = {
  "Grade 10": [
    {
      name: "Mathematics", slug: "mathematics", description: "Algebra, geometry, statistics, and problem-solving fundamentals.",
      category: "Science", image: mathImg,
      topics: ["Number Theory & Computation", "Algebra & Functions", "Geometry & Trigonometry", "Statistics & Probability", "Consumer Arithmetic", "Sets & Relations"],
      learningOutcomes: ["Solve complex algebraic equations", "Apply geometric reasoning to real-world problems", "Analyze and interpret statistical data", "Use mathematical models for decision-making"],
      assessmentMethod: "Continuous assessment (40%) + Final exam (60%)", duration: "5 hours/week", prerequisites: "Basic arithmetic proficiency"
    },
    {
      name: "English Language", slug: "english-language", description: "Reading comprehension, grammar, writing, and communication skills.",
      category: "Arts", image: englishImg,
      topics: ["Reading Comprehension", "Narrative & Expository Writing", "Grammar & Sentence Structure", "Summary Writing", "Argumentative Essays", "Literary Analysis"],
      learningOutcomes: ["Write clear and structured essays", "Analyze texts critically", "Communicate effectively in formal and informal settings", "Develop strong vocabulary and grammar skills"],
      assessmentMethod: "Continuous assessment (40%) + Final exam (60%)", duration: "5 hours/week", prerequisites: "None"
    },
    {
      name: "Integrated Science", slug: "integrated-science", description: "Introduction to core scientific concepts across biology, chemistry, and physics.",
      category: "Science", image: scienceImg,
      topics: ["Living Organisms", "Matter & Energy", "Forces & Motion", "Earth & Space", "Human Body Systems", "Environmental Science"],
      learningOutcomes: ["Understand fundamental scientific principles", "Conduct basic laboratory experiments", "Apply scientific method to investigations", "Relate science to everyday life"],
      assessmentMethod: "Practical assessment (30%) + Theory exam (70%)", duration: "4 hours/week", prerequisites: "None"
    },
    {
      name: "Social Studies", slug: "social-studies", description: "Caribbean history, governance, geography, and societal structures.",
      category: "Arts", image: socialImg,
      topics: ["Caribbean Identity", "Government & Politics", "Economic Development", "Social Issues", "Regional Integration", "Human Rights"],
      learningOutcomes: ["Understand Caribbean social and political systems", "Analyze current affairs critically", "Appreciate cultural diversity", "Develop civic responsibility"],
      assessmentMethod: "School-based assessment (40%) + Final exam (60%)", duration: "3 hours/week", prerequisites: "None"
    },
    {
      name: "Information Technology", slug: "information-technology", description: "Computer literacy, digital tools, and introductory programming.",
      category: "Science", image: itImg,
      topics: ["Computer Hardware & Software", "Word Processing & Spreadsheets", "Database Management", "Web Development Basics", "Internet & Networking", "Digital Citizenship"],
      learningOutcomes: ["Use productivity software proficiently", "Create basic web pages", "Understand computer networks", "Practice safe and ethical use of technology"],
      assessmentMethod: "Practical project (40%) + Theory exam (60%)", duration: "3 hours/week", prerequisites: "None"
    },
    {
      name: "Spanish", slug: "spanish", description: "Basic Spanish language skills: grammar, vocabulary, and conversation.",
      category: "Arts", image: spanishImg,
      topics: ["Greetings & Introductions", "Family & Daily Life", "Food & Culture", "Travel & Directions", "Grammar Fundamentals", "Reading & Listening Comprehension"],
      learningOutcomes: ["Hold basic conversations in Spanish", "Read and understand simple texts", "Write short paragraphs", "Appreciate Hispanic cultures"],
      assessmentMethod: "Oral assessment (30%) + Written exam (70%)", duration: "3 hours/week", prerequisites: "None"
    },
    {
      name: "Geography", slug: "geography", description: "Physical and human geography with a focus on the Caribbean region.",
      category: "Arts", image: geographyImg,
      topics: ["Map Reading & Interpretation", "Weather & Climate", "Landforms & Processes", "Population & Settlement", "Natural Resources", "Caribbean Geography"],
      learningOutcomes: ["Read and interpret maps and satellite imagery", "Understand weather patterns and climate change", "Analyze population trends", "Assess environmental challenges"],
      assessmentMethod: "School-based assessment (40%) + Final exam (60%)", duration: "3 hours/week", prerequisites: "None"
    },
    {
      name: "History", slug: "history", description: "Caribbean and world history, social movements, and political developments.",
      category: "Arts", image: historyImg,
      topics: ["Indigenous Peoples", "Colonialism & Slavery", "Emancipation & Independence", "20th Century Caribbean", "Political Movements", "Cultural Heritage"],
      learningOutcomes: ["Analyze historical sources and evidence", "Understand cause and effect in history", "Evaluate different historical perspectives", "Connect past events to present realities"],
      assessmentMethod: "School-based assessment (40%) + Final exam (60%)", duration: "3 hours/week", prerequisites: "None"
    },
    {
      name: "Principles of Business", slug: "principles-of-business", description: "Foundations of business operations, entrepreneurship, and economics.",
      category: "Business", image: businessImg,
      topics: ["Business Environment", "Internal Organization", "Production", "Marketing", "Finance & Accounting", "Entrepreneurship"],
      learningOutcomes: ["Understand how businesses operate", "Analyze market dynamics", "Create basic business plans", "Understand financial statements"],
      assessmentMethod: "School-based assessment (40%) + Final exam (60%)", duration: "3 hours/week", prerequisites: "None"
    },
    {
      name: "Office Administration", slug: "office-administration", description: "Office management, communication, and organizational skills.",
      category: "Business", image: officeImg,
      topics: ["Office Procedures", "Communication", "Records Management", "Meetings & Events", "Customer Service", "Office Technology"],
      learningOutcomes: ["Manage office operations efficiently", "Communicate professionally", "Organize records and documents", "Use office technology effectively"],
      assessmentMethod: "School-based assessment (40%) + Final exam (60%)", duration: "3 hours/week", prerequisites: "None"
    },
  ],
  "Grade 11": [
    {
      name: "Mathematics", slug: "mathematics", description: "Advanced mathematics including calculus, trigonometry, and data analysis.",
      category: "Science", image: mathImg,
      topics: ["Advanced Algebra", "Calculus Introduction", "Trigonometry", "Vectors", "Advanced Statistics", "Linear Programming"],
      learningOutcomes: ["Solve advanced mathematical problems", "Apply calculus to real-world scenarios", "Analyze complex data sets", "Use mathematical reasoning for proofs"],
      assessmentMethod: "Continuous assessment (40%) + Final CSEC exam (60%)", duration: "6 hours/week", prerequisites: "Grade 10 Mathematics"
    },
    {
      name: "English Language", slug: "english-language", description: "Advanced comprehension, essay writing, and critical analysis.",
      category: "Arts", image: englishImg,
      topics: ["Advanced Essay Writing", "Critical Analysis", "Literature Response", "Persuasive Writing", "Research Skills", "Oral Presentation"],
      learningOutcomes: ["Write sophisticated analytical essays", "Critically evaluate complex texts", "Present arguments coherently", "Conduct research effectively"],
      assessmentMethod: "Continuous assessment (40%) + Final CSEC exam (60%)", duration: "5 hours/week", prerequisites: "Grade 10 English"
    },
    {
      name: "Biology", slug: "biology", description: "Cell biology, ecology, genetics, and human physiology.",
      category: "Science", image: biologyImg,
      topics: ["Cell Biology & Biochemistry", "Genetics & Evolution", "Human Physiology", "Ecology & Environment", "Plant Biology", "Microbiology"],
      learningOutcomes: ["Understand cellular processes", "Explain genetic inheritance patterns", "Analyze ecosystems and biodiversity", "Conduct biological investigations"],
      assessmentMethod: "Practical assessment (30%) + Theory CSEC exam (70%)", duration: "5 hours/week", prerequisites: "Integrated Science"
    },
    {
      name: "Chemistry", slug: "chemistry", description: "Atomic structure, reactions, organic chemistry, and lab techniques.",
      category: "Science", image: chemistryImg,
      topics: ["Atomic Structure & Bonding", "Chemical Reactions", "Acids, Bases & Salts", "Organic Chemistry", "Electrochemistry", "Industrial Chemistry"],
      learningOutcomes: ["Understand chemical bonding and reactions", "Perform titrations and lab experiments", "Analyze organic compounds", "Apply chemistry to industrial processes"],
      assessmentMethod: "Practical assessment (30%) + Theory CSEC exam (70%)", duration: "5 hours/week", prerequisites: "Integrated Science"
    },
    {
      name: "Physics", slug: "physics", description: "Mechanics, electricity, waves, and modern physics concepts.",
      category: "Science", image: physicsImg,
      topics: ["Mechanics & Motion", "Energy & Work", "Waves & Optics", "Electricity & Magnetism", "Thermal Physics", "Modern Physics"],
      learningOutcomes: ["Apply Newton's laws to real scenarios", "Understand electrical circuits", "Analyze wave phenomena", "Solve physics problems mathematically"],
      assessmentMethod: "Practical assessment (30%) + Theory CSEC exam (70%)", duration: "5 hours/week", prerequisites: "Integrated Science & Mathematics"
    },
    {
      name: "Principles of Accounts", slug: "principles-of-accounts", description: "Financial statements, bookkeeping, and accounting principles.",
      category: "Business", image: accountsImg,
      topics: ["Double Entry Bookkeeping", "Financial Statements", "Bank Reconciliation", "Depreciation", "Partnership Accounts", "Company Accounts"],
      learningOutcomes: ["Prepare financial statements", "Record business transactions accurately", "Analyze financial performance", "Understand accounting standards"],
      assessmentMethod: "School-based assessment (40%) + Final CSEC exam (60%)", duration: "4 hours/week", prerequisites: "Basic Mathematics"
    },
    {
      name: "Economics", slug: "economics", description: "Micro and macroeconomics, trade, and Caribbean economic issues.",
      category: "Business", image: economicsImg,
      topics: ["Demand & Supply", "Market Structures", "National Income", "Money & Banking", "International Trade", "Caribbean Economic Issues"],
      learningOutcomes: ["Analyze market forces", "Understand monetary and fiscal policy", "Evaluate trade agreements", "Assess economic development strategies"],
      assessmentMethod: "School-based assessment (40%) + Final CSEC exam (60%)", duration: "3 hours/week", prerequisites: "None"
    },
    {
      name: "Information Technology", slug: "information-technology", description: "Advanced IT concepts, databases, and web development.",
      category: "Science", image: itImg,
      topics: ["Database Design", "Advanced Web Development", "Programming Logic", "Network Security", "Multimedia", "IT Project Management"],
      learningOutcomes: ["Design and implement databases", "Build interactive websites", "Write basic programs", "Implement security measures"],
      assessmentMethod: "Practical project (40%) + Theory CSEC exam (60%)", duration: "4 hours/week", prerequisites: "Grade 10 IT"
    },
    {
      name: "EDPM", slug: "edpm", description: "Electronic document preparation and management using modern tools.",
      category: "Business", image: edpmImg,
      topics: ["Document Formatting", "Desktop Publishing", "Presentations", "Data Processing", "Digital Communication", "File Management"],
      learningOutcomes: ["Create professional documents", "Design presentations and publications", "Manage digital files efficiently", "Use modern productivity tools"],
      assessmentMethod: "Practical assessment (60%) + Theory exam (40%)", duration: "3 hours/week", prerequisites: "Basic computer skills"
    },
    {
      name: "Agricultural Science", slug: "agricultural-science", description: "Crop production, animal husbandry, and sustainable agriculture.",
      category: "Science", image: agricultureImg,
      topics: ["Soil Science", "Crop Production", "Animal Husbandry", "Agricultural Economics", "Pest Management", "Sustainable Farming"],
      learningOutcomes: ["Understand soil composition and management", "Apply crop production techniques", "Manage livestock effectively", "Practice sustainable agriculture"],
      assessmentMethod: "Practical assessment (40%) + Theory CSEC exam (60%)", duration: "4 hours/week", prerequisites: "Integrated Science"
    },
  ],
};

export const getSubject = (grade: string, slug: string): SubjectInfo | undefined => {
  const gradeKey = grade === "10" ? "Grade 10" : "Grade 11";
  return gradeData[gradeKey]?.find(s => s.slug === slug);
};
