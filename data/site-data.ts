export type Service = {
  title: string;
  description: string;
};

export type Teacher = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type SchoolClass = {
  slug: string;
  title: string;
  level: string;
  status: "ongoing" | "upcoming";
  schedule: string;
  duration: string;
  fee: string;
  startDate: string;
  image: string;
  description: string;
  outcomes: string[];
  paymentOptions: {
    provider: string;
    accountName: string;
    accountNumber: string;
  }[];
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/teachers", label: "Teachers" },
  { href: "/classes", label: "Classes" },
  { href: "/contact", label: "Contact" },
];

export const visionText =
  "To be a trusted English education center that empowers learners with language skills for local and global opportunities.";

export const missionItems = [
  "Deliver high-quality and practical English programs.",
  "Support every learner with caring teachers and active classes.",
  "Build confidence, communication skills, and lifelong learning habits.",
];

export const services: Service[] = [
  {
    title: "English for General Purpose",
    description:
      "Build confident daily communication through speaking, listening, and practical conversation activities.",
  },
  {
    title: "English for Academic",
    description:
      "Improve academic writing, reading, presentation skills, and exam readiness for school and university success.",
  },
  {
    title: "English for Young Learner",
    description:
      "Fun and interactive lessons for children that develop vocabulary, pronunciation, and confidence from an early age.",
  },
];

export const teachers: Teacher[] = [
  {
    name: "Ms. Dara",
    role: "General English Instructor",
    bio: "Focuses on real-life communication and helps learners become confident in speaking and listening.",
    image: "/images/viber_image_2026-03-01_11-11-10-667.jpg",
  },
  {
    name: "Mr. Sopheak",
    role: "Academic English Lecturer",
    bio: "Specializes in academic writing, critical reading, and exam preparation for high school and university students.",
    image: "/images/viber_image_2026-03-01_11-11-14-248.jpg",
  },
  {
    name: "Ms. Lina",
    role: "Young Learner Teacher",
    bio: "Creates energetic classes with games and stories so children can enjoy learning English naturally.",
    image: "/images/viber_image_2026-03-01_11-11-15-776.jpg",
  },
  {
    name: "Mr. Vannak",
    role: "IELTS and Academic Coach",
    bio: "Guides learners in academic pathway planning, writing structure, and speaking confidence.",
    image: "/images/viber_image_2026-03-01_11-11-16-484.jpg",
  },
];

export const classes: SchoolClass[] = [
  {
    slug: "general-english-evening",
    title: "General English Evening Class",
    level: "Intermediate",
    status: "ongoing",
    schedule: "Monday, Wednesday, Friday • 6:30 PM - 8:00 PM",
    duration: "10 weeks",
    fee: "$120",
    startDate: "Feb 15",
    image: "/images/viber_image_2026-03-01_11-11-20-303.jpg",
    description:
      "This class helps students communicate confidently in daily life and workplace contexts. Lessons are practical and activity-based.",
    outcomes: [
      "Speak more naturally in daily conversations.",
      "Improve grammar and pronunciation through guided practice.",
      "Use vocabulary for travel, work, and social interaction.",
    ],
    paymentOptions: [
      {
        provider: "ABA Bank",
        accountName: "FLC Education",
        accountNumber: "001 245 778",
      },
      {
        provider: "Wing",
        accountName: "FLC Education",
        accountNumber: "012 345 678",
      },
    ],
  },
  {
    slug: "academic-english-weekend",
    title: "Academic English Weekend Class",
    level: "Upper-Intermediate",
    status: "upcoming",
    schedule: "Saturday, Sunday • 7:00 PM - 9:00 PM",
    duration: "12 weeks",
    fee: "$180",
    startDate: "Mar 7",
    image: "/images/viber_image_2026-03-01_11-11-23-139.jpg",
    description:
      "Designed for high school and university students who want stronger writing, reading, and presentation skills.",
    outcomes: [
      "Write better paragraphs and essays.",
      "Read and summarize academic materials effectively.",
      "Prepare for school and university assessments with confidence.",
    ],
    paymentOptions: [
      {
        provider: "ACLEDA Bank",
        accountName: "FLC Education",
        accountNumber: "111 998 444",
      },
      {
        provider: "TrueMoney",
        accountName: "FLC Education",
        accountNumber: "092 551 224",
      },
    ],
  },
  {
    slug: "young-learners-afternoon",
    title: "Young Learners Afternoon Class",
    level: "Beginner",
    status: "upcoming",
    schedule: "Tuesday, Thursday • 4:30 PM - 6:00 PM",
    duration: "8 weeks",
    fee: "$95",
    startDate: "Mar 14",
    image: "/images/viber_image_2026-03-01_11-11-26-623.jpg",
    description:
      "A fun program for children with songs, stories, and speaking games to build confidence in English from early stages.",
    outcomes: [
      "Build vocabulary for school and daily life.",
      "Improve listening and pronunciation habits.",
      "Develop confidence through interactive activities.",
    ],
    paymentOptions: [
      {
        provider: "Wing",
        accountName: "FLC Education",
        accountNumber: "012 888 145",
      },
      {
        provider: "ABA Bank",
        accountName: "FLC Education",
        accountNumber: "007 665 991",
      },
    ],
  },
];
