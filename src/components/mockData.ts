export interface Alumni {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  graduationYear: number;
  degree: string;
  department: string;
  email: string;
  profileImage: string;
  skills: string[];
  match: number;
  achievements: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  category: 'Job' | 'Internship';
  description: string;
  requirements: string[];
  postedDate: string;
  applicants: number;
  isUserCreated?: boolean;
}

export interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  fee: string;
  description: string;
  speakers: string[];
  attendees: number;
  registrationDeadline: string;
  status: 'Open' | 'Closed';
}

export interface Campaign {
  id: number;
  name: string;
  description: string;
  category: string;
  supporters: number;
  raised: number;
  goal: number;
  progress: number;
  endDate: string;
}

export const mockAlumni: Alumni[] = [
  {
    id: 1,
    name: "Aarav Patel",
    title: "Senior Software Engineer",
    company: "Tata Consultancy Services",
    location: "Mumbai, Maharashtra",
    graduationYear: 2018,
    degree: "Computer Science and Engineering",
    department: "Information Technology",
    email: "aarav.patel@email.com",
    profileImage: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3MjA0MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["Java", "Spring Boot", "Microservices", "Docker"],
    match: 83,
    achievements: "Led development of a core banking system used by 5 major Indian banks",
    linkedin: "linkedin.com/in/aarav-patel",
    github: "github.com/aarav-patel",
    twitter: "twitter.com/aarav_patel"
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Data Scientist",
    company: "Flipkart",
    location: "Bangalore, Karnataka",
    graduationYear: 2019,
    degree: "Data Science",
    department: "E-commerce",
    email: "priya.sharma@email.com",
    profileImage: "https://images.unsplash.com/photo-1659353218851-abe20addb330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU3MjI0MDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["Python", "Machine Learning", "SQL", "Tableau"],
    match: 65,
    achievements: "Developed an AI model that improved product recommendations by 30%",
    linkedin: "linkedin.com/in/priya-sharma",
    github: "github.com/priya-sharma",
    twitter: "twitter.com/priya_data"
  },
  {
    id: 3,
    name: "Arjun Reddy",
    title: "Product Design Engineer",
    company: "Mahindra & Mahindra",
    location: "Chennai, Tamil Nadu",
    graduationYear: 2020,
    degree: "Mechanical Engineering",
    department: "Automotive",
    email: "arjun.reddy@email.com",
    profileImage: "https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzIyNDA3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["CAD", "Finite Element Analysis", "3D Printing", "Project Management"],
    match: 68,
    achievements: "Key designer for Mahindra's award-winning electric SUV",
    linkedin: "linkedin.com/in/arjun-reddy",
    github: "github.com/arjun-reddy",
    twitter: "twitter.com/arjun_designs"
  },
  {
    id: 4,
    name: "Zara Khan",
    title: "Marketing Manager",
    company: "Unilever",
    location: "Delhi, India",
    graduationYear: 2017,
    degree: "Business Administration",
    department: "Marketing",
    email: "zara.khan@email.com",
    profileImage: "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU3MjI0MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["Digital Marketing", "Brand Strategy", "Analytics", "Social Media"],
    match: 94,
    achievements: "Launched successful campaigns that increased brand awareness by 40%",
    linkedin: "linkedin.com/in/zara-khan",
    github: "github.com/zara-khan",
    twitter: "twitter.com/zara_marketing"
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    title: "Financial Analyst",
    company: "HDFC Bank",
    location: "Mumbai, Maharashtra",
    graduationYear: 2019,
    degree: "Finance",
    department: "Banking",
    email: "vikram.malhotra@email.com",
    profileImage: "https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzE2MDMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["Financial Modeling", "Risk Analysis", "Excel", "Bloomberg"],
    match: 72,
    achievements: "Developed risk models that saved the bank $2M in potential losses",
    linkedin: "linkedin.com/in/vikram-malhotra",
    github: "github.com/vikram-malhotra",
    twitter: "twitter.com/vikram_finance"
  },
  {
    id: 6,
    name: "Anjali Mehta",
    title: "UX Designer",
    company: "Swiggy",
    location: "Hyderabad, Telangana",
    graduationYear: 2021,
    degree: "Design",
    department: "Technology",
    email: "anjali.mehta@email.com",
    profileImage: "https://images.unsplash.com/photo-1659353218851-abe20addb330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU3MjI0MDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    match: 86,
    achievements: "Redesigned the app interface leading to 25% increase in user engagement",
    linkedin: "linkedin.com/in/anjali-mehta",
    github: "github.com/anjali-mehta",
    twitter: "twitter.com/anjali_ux"
  }
];

export const mockJobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "WebSolutions",
    location: "Austin, TX",
    salary: "$90,000 - $140,000",
    type: "Full-time",
    category: "Job",
    description: "Join our team to create responsive and performant web applications using modern frameworks and technologies. You'll work closely with designers and backend developers to deliver exceptional user experiences.",
    requirements: ["React", "JavaScript", "HTML/CSS", "Redux"],
    postedDate: "1 day ago",
    applicants: 27
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "TechCorp",
    location: "Seattle, WA",
    salary: "$75,000 - $110,000",
    type: "Full-time",
    category: "Job",
    description: "Analyze large datasets to drive business insights and strategic decisions. Work with stakeholders across the organization to identify trends and opportunities for growth.",
    requirements: ["SQL", "Python", "Tableau", "Statistics"],
    postedDate: "3 days ago",
    applicants: 45
  },
  {
    id: 3,
    title: "Product Manager",
    company: "InnovateTech",
    location: "San Francisco, CA",
    salary: "$120,000 - $180,000",
    type: "Full-time",
    category: "Job",
    description: "Lead product strategy and work with cross-functional teams to deliver innovative solutions. Define product roadmaps and prioritize features based on user feedback and business goals.",
    requirements: ["Product Strategy", "Agile", "Analytics", "Leadership"],
    postedDate: "1 week ago",
    applicants: 62
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudScale Inc",
    location: "Denver, CO",
    salary: "$105,000 - $155,000",
    type: "Full-time",
    category: "Job",
    description: "Design and implement scalable cloud infrastructure using modern DevOps practices. Work with containerization, CI/CD pipelines, and monitoring systems to ensure reliable deployments.",
    requirements: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform"],
    postedDate: "2 days ago",
    applicants: 38
  },
  {
    id: 5,
    title: "UX/UI Designer",
    company: "Design Studio Pro",
    location: "New York, NY",
    salary: "$85,000 - $125,000",
    type: "Full-time",
    category: "Job",
    description: "Create intuitive and engaging user experiences for web and mobile applications. Collaborate with product teams to design user-centered solutions that drive business results.",
    requirements: ["Figma", "Sketch", "Prototyping", "User Research", "Adobe Creative Suite"],
    postedDate: "4 days ago",
    applicants: 52
  },
  {
    id: 6,
    title: "Machine Learning Engineer",
    company: "AI Innovations Lab",
    location: "Boston, MA",
    salary: "$130,000 - $190,000",
    type: "Full-time",
    category: "Job",
    description: "Develop and deploy machine learning models at scale. Work on cutting-edge AI projects in computer vision and natural language processing to solve real-world problems.",
    requirements: ["Python", "TensorFlow", "PyTorch", "MLOps", "Statistical Analysis"],
    postedDate: "5 days ago",
    applicants: 71
  },
  {
    id: 7,
    title: "Cybersecurity Analyst",
    company: "SecureNet Solutions",
    location: "Washington, DC",
    salary: "$95,000 - $135,000",
    type: "Full-time",
    category: "Job",
    description: "Monitor, detect, and respond to security threats. Implement security measures and conduct vulnerability assessments to protect organizational assets from cyber attacks.",
    requirements: ["Network Security", "SIEM Tools", "Incident Response", "Risk Assessment", "CompTIA Security+"],
    postedDate: "1 week ago",
    applicants: 29
  },
  {
    id: 8,
    title: "Mobile App Developer",
    company: "MobileTech Studios",
    location: "Los Angeles, CA",
    salary: "$88,000 - $128,000",
    type: "Full-time",
    category: "Job",
    description: "Build high-performance mobile applications for iOS and Android platforms. Focus on creating smooth user experiences and optimized performance for millions of users.",
    requirements: ["React Native", "Swift", "Kotlin", "Firebase", "App Store Optimization"],
    postedDate: "6 days ago",
    applicants: 43
  },
  {
    id: 9,
    title: "Software Engineering Intern",
    company: "Tech Giants Inc",
    location: "Palo Alto, CA",
    salary: "$8,000 - $10,000/month",
    type: "Internship",
    category: "Internship",
    description: "Join our dynamic engineering team for a 12-week summer internship program. Work on real projects that impact millions of users while learning from industry experts.",
    requirements: ["Python", "Java", "Git", "Computer Science Fundamentals"],
    postedDate: "2 days ago",
    applicants: 156
  },
  {
    id: 10,
    title: "Data Science Intern",
    company: "Analytics Pro",
    location: "Chicago, IL",
    salary: "$6,500 - $8,500/month",
    type: "Internship",
    category: "Internship",
    description: "Gain hands-on experience in data analysis, machine learning, and statistical modeling. Work alongside senior data scientists on projects involving predictive analytics and business intelligence.",
    requirements: ["Python", "R", "SQL", "Statistics", "Data Visualization"],
    postedDate: "4 days ago",
    applicants: 89
  },
  {
    id: 11,
    title: "Digital Marketing Intern",
    company: "Creative Media Agency",
    location: "Miami, FL",
    salary: "$4,000 - $5,500/month",
    type: "Internship",
    category: "Internship",
    description: "Learn digital marketing strategies including social media management, content creation, and campaign analytics. Perfect opportunity for students interested in marketing careers.",
    requirements: ["Social Media", "Content Creation", "Google Analytics", "Adobe Creative Suite"],
    postedDate: "1 week ago",
    applicants: 73
  },
  {
    id: 12,
    title: "UX Design Intern",
    company: "Innovation Labs",
    location: "Portland, OR",
    salary: "$5,000 - $7,000/month",
    type: "Internship",
    category: "Internship",
    description: "Work with our design team to create user-centered digital experiences. Learn design thinking, user research methodologies, and prototyping tools in a collaborative environment.",
    requirements: ["Figma", "User Research", "Design Thinking", "Prototyping"],
    postedDate: "5 days ago",
    applicants: 67
  },
  {
    id: 13,
    title: "Business Analyst Intern",
    company: "Consulting Partners",
    location: "Atlanta, GA",
    salary: "$5,500 - $7,500/month",
    type: "Internship",
    category: "Internship",
    description: "Support business strategy projects by conducting market research, financial analysis, and process optimization. Great exposure to consulting methodology and client interactions.",
    requirements: ["Excel", "PowerPoint", "Business Analysis", "Research Skills"],
    postedDate: "3 days ago",
    applicants: 54
  },
  {
    id: 14,
    title: "Cloud Engineering Intern",
    company: "CloudTech Solutions",
    location: "Dallas, TX",
    salary: "$7,000 - $9,000/month",
    type: "Internship",
    category: "Internship",
    description: "Learn cloud infrastructure management and DevOps practices. Work with AWS, Azure, and Google Cloud Platform while supporting enterprise cloud migrations.",
    requirements: ["AWS", "Linux", "Scripting", "Networking Fundamentals"],
    postedDate: "1 week ago",
    applicants: 92
  },
  {
    id: 15,
    title: "Financial Analyst Intern",
    company: "Investment Capital Group",
    location: "New York, NY",
    salary: "$6,000 - $8,000/month",
    type: "Internship",
    category: "Internship",
    description: "Support investment research and financial modeling for equity and debt transactions. Gain exposure to capital markets, valuation techniques, and financial analysis.",
    requirements: ["Excel", "Financial Modeling", "Bloomberg", "Accounting Fundamentals"],
    postedDate: "6 days ago",
    applicants: 128
  }
];

export const mockEvents: Event[] = [
  {
    id: 1,
    name: "Tech Innovation Summit 2025",
    date: "March 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Bangalore International Exhibition Centre",
    fee: "₹2,500",
    description: "Join industry leaders to explore the latest trends in technology and innovation. Network with professionals and discover new opportunities.",
    speakers: ["Dr. Raj Kumar - CTO, Infosys", "Ms. Anita Singh - VP Engineering, Microsoft", "Mr. Kiran Patel - Founder, TechStartup"],
    attendees: 450,
    registrationDeadline: "March 10, 2025",
    status: "Open"
  },
  {
    id: 2,
    name: "Alumni Reunion 2025",
    date: "April 20, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "College Campus, Main Auditorium",
    fee: "Free",
    description: "Reconnect with your classmates and faculty. Enjoy dinner, entertainment, and reminisce about your college days.",
    speakers: ["Principal Dr. Sharma", "Dean of Engineering", "Class of 2015 Representative"],
    attendees: 320,
    registrationDeadline: "April 15, 2025",
    status: "Open"
  },
  {
    id: 3,
    name: "Entrepreneurship Workshop",
    date: "May 8, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Mumbai Business Hub, Conference Hall A",
    fee: "₹1,800",
    description: "Learn the fundamentals of starting your own business. Get insights from successful entrepreneurs and access to startup resources.",
    speakers: ["Ms. Priya Nair - Serial Entrepreneur", "Mr. Rohit Gupta - Venture Capitalist", "Dr. Meera Joshi - Business Consultant"],
    attendees: 180,
    registrationDeadline: "May 5, 2025",
    status: "Open"
  },
  {
    id: 4,
    name: "Data Science & AI Conference",
    date: "June 12, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Hyderabad Tech Park, Auditorium B",
    fee: "₹3,200",
    description: "Explore the latest advancements in artificial intelligence and machine learning. Hands-on workshops and networking opportunities included.",
    speakers: ["Dr. Sanjay Reddy - AI Research Lead, Google", "Ms. Kavya Iyer - Data Science Director, Amazon", "Mr. Arun Krishnan - ML Engineer, Facebook"],
    attendees: 280,
    registrationDeadline: "June 8, 2025",
    status: "Open"
  },
  {
    id: 5,
    name: "Career Development Seminar",
    date: "July 25, 2025",
    time: "1:00 PM - 5:00 PM",
    location: "Delhi Convention Center, Hall 3",
    fee: "₹1,200",
    description: "Professional development session focusing on career advancement, leadership skills, and industry trends. Interactive sessions and Q&A included.",
    speakers: ["Mr. Vikash Agarwal - HR Director, TCS", "Ms. Ritu Sharma - Career Coach", "Dr. Amit Verma - Leadership Expert"],
    attendees: 220,
    registrationDeadline: "July 20, 2025",
    status: "Open"
  },
  {
    id: 6,
    name: "Sustainable Technology Forum",
    date: "August 18, 2025",
    time: "9:30 AM - 3:30 PM",
    location: "Pune Environmental Center, Main Hall",
    fee: "₹2,000",
    description: "Discuss green technology solutions and sustainable business practices. Learn about renewable energy, eco-friendly innovations, and corporate responsibility.",
    speakers: ["Dr. Sunita Narain - Environmental Scientist", "Mr. Rajesh Jain - Clean Energy Entrepreneur", "Ms. Neha Kumari - Sustainability Consultant"],
    attendees: 195,
    registrationDeadline: "August 15, 2025",
    status: "Open"
  },
  {
    id: 7,
    name: "Digital Marketing Masterclass",
    date: "September 22, 2025",
    time: "11:00 AM - 6:00 PM",
    location: "Chennai Business District, Seminar Room 1",
    fee: "₹2,800",
    description: "Comprehensive workshop on digital marketing strategies, social media optimization, and performance analytics. Practical exercises and case studies included.",
    speakers: ["Ms. Aditi Malhotra - Digital Marketing Head, Flipkart", "Mr. Karthik Raman - Social Media Strategist", "Dr. Pooja Sethi - Marketing Analytics Expert"],
    attendees: 160,
    registrationDeadline: "September 18, 2025",
    status: "Open"
  }
];

export const mockCampaigns: Campaign[] = [
  {
    id: 1,
    name: "Scholarship Fund for Underprivileged Students",
    description: "Help provide education opportunities to deserving students from economically disadvantaged backgrounds.",
    category: "Education",
    supporters: 245,
    raised: 750000,
    goal: 1000000,
    progress: 75,
    endDate: "June 30, 2025"
  },
  {
    id: 2,
    name: "Rural Development Infrastructure Project",
    description: "Support the development of basic infrastructure in rural communities including clean water access and digital connectivity.",
    category: "Rural Development",
    supporters: 180,
    raised: 420000,
    goal: 800000,
    progress: 53,
    endDate: "December 31, 2025"
  },
  {
    id: 3,
    name: "Women in Tech Empowerment Program",
    description: "Support initiatives to increase female participation in technology fields through mentorship, training, and career development opportunities.",
    category: "Women Empowerment",
    supporters: 312,
    raised: 580000,
    goal: 900000,
    progress: 64,
    endDate: "August 15, 2025"
  },
  {
    id: 4,
    name: "Green Campus Initiative",
    description: "Transform our campus into an eco-friendly environment with solar panels, waste management systems, and sustainable landscaping.",
    category: "Environment",
    supporters: 156,
    raised: 340000,
    goal: 600000,
    progress: 57,
    endDate: "October 31, 2025"
  },
  {
    id: 5,
    name: "Healthcare Access for Remote Communities",
    description: "Establish mobile health clinics and telemedicine facilities to provide medical care in underserved rural areas.",
    category: "Healthcare",
    supporters: 198,
    raised: 465000,
    goal: 750000,
    progress: 62,
    endDate: "November 30, 2025"
  },
  {
    id: 6,
    name: "Digital Literacy for Senior Citizens",
    description: "Provide technology training and support to help elderly community members navigate the digital world and stay connected.",
    category: "Technology Education",
    supporters: 89,
    raised: 125000,
    goal: 300000,
    progress: 42,
    endDate: "September 30, 2025"
  },
  {
    id: 7,
    name: "Emergency Relief Fund",
    description: "Support disaster-affected communities with immediate relief supplies, temporary shelter, and rehabilitation assistance.",
    category: "Disaster Relief",
    supporters: 367,
    raised: 920000,
    goal: 1200000,
    progress: 77,
    endDate: "March 31, 2026"
  }
];