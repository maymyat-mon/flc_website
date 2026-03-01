export type EditableService = {
  title: string;
  description: string;
  image: string;
};

export type EditableTeacher = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type EditableContact = {
  address: string;
  phone: string;
  email: string;
  telegram: string;
};

export type SiteContent = {
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutParagraphOne: string;
  aboutParagraphTwo: string;
  visionText: string;
  missionItems: string[];
  services: EditableService[];
  teachers: EditableTeacher[];
  contact: EditableContact;
};

export const defaultSiteContent: SiteContent = {
  heroTitle: "Nurturing Learners, Building English Confidence",
  heroSubtitle:
    "A modern English school experience inspired by premium corporate style with strong learning outcomes and student support.",
  aboutTitle: "About FLC Education",
  aboutParagraphOne:
    "FLC Education is a student-centered language school that supports children, teenagers, and adults in reaching their English goals. We combine structured content, practical speaking tasks, and ongoing coaching to help every learner progress.",
  aboutParagraphTwo:
    "Our classes focus on communication, academic readiness, and confidence. With a caring teaching team and modern learning environment, we build strong foundations for future success.",
  visionText:
    "To be a trusted English education center that empowers learners with language skills for local and global opportunities.",
  missionItems: [
    "Deliver high-quality and practical English programs.",
    "Support every learner with caring teachers and active classes.",
    "Build confidence, communication skills, and lifelong learning habits.",
  ],
  services: [
    {
      title: "English for General Purpose",
      description:
        "Build confident daily communication through speaking, listening, and practical conversation activities.",
      image: "/images/english_for_general.jpg",
    },
    {
      title: "English for Academic",
      description:
        "Improve academic writing, reading, presentation skills, and exam readiness for school and university success.",
      image: "/images/english-for-academic.jpg",
    },
    {
      title: "English for Young Learner",
      description:
        "Fun and interactive lessons for children that develop vocabulary, pronunciation, and confidence from an early age.",
      image: "/images/english-for-young-learner.jpg",
    },
  ],
  teachers: [
    {
      name: "Saya Ye'",
      role: "General English Instructor",
      bio: "Focuses on real-life communication and helps learners become confident in speaking and listening.",
      image: "/images/sayarYe.jpg",
    },
    {
      name: "Saya Nyi Nyi",
      role: "Academic English Lecturer",
      bio: "Specializes in academic writing, critical reading, and exam preparation for high school and university students.",
      image: "/images/sayarNyiNyi.jpg",
    },
    {
      name: "Saya John Win",
      role: "Young Learner Teacher",
      bio: "Creates energetic classes with games and stories so children can enjoy learning English naturally.",
      image: "/images/default-profile.svg",
    },
  ],
  contact: {
    address: "No.18, U Tun Linn Chan St., Kamaryut, Hledan, Yangon, Myanmar",
    phone: "09 519 5131, 09 789 877 165",
    email: "flceducation92@gmail.com",
    telegram: "FLC Messenger",
  },
};
