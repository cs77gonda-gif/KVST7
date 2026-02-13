const careersData = [
    {
        id: 1,
        title: "Doctor (MBBS)",
        category: "Science",
        tags: ["Science", "Medical"],
        eligibility: "Class 12 (PCB) + NEET Exam",
        skills: "Biology, Patience, Empathy",
        education: "5.5 years MBBS + Internship",
        nextSteps: "Prepare for NEET in Class 11-12."
    },
    {
        id: 2,
        title: "Software Engineer",
        category: "Science",
        tags: ["Science", "Tech"],
        eligibility: "Class 12 (PCM) + JEE / BCA",
        skills: "Logic, Coding, Problem Solving",
        education: "4 years B.Tech or 3 years BCA",
        nextSteps: "Focus on Maths and Computer Science."
    },
    {
        id: 3,
        title: "Chartered Accountant (CA)",
        category: "Commerce",
        tags: ["Commerce", "Finance"],
        eligibility: "Class 12 (Any stream, Commerce preferred)",
        skills: "Accounts, Maths, discipline",
        education: "CA Foundation > Inter > Final (3-5 years)",
        nextSteps: "Register for CA Foundation after Class 10/12."
    },
    {
        id: 4,
        title: "Graphic Designer",
        category: "Vocational",
        tags: ["Arts", "Creative"],
        eligibility: "Class 10/12 (Any stream)",
        skills: "Creativity, Drawing, Software (Photoshop)",
        education: "Diploma or B.Des (3-4 years)",
        nextSteps: "Build a portfolio of drawings/designs."
    },
    {
        id: 5,
        title: "Civil Services (IAS/IPS)",
        category: "Government",
        tags: ["Government", "Public Service"],
        eligibility: "Graduation (Any subject) + UPSC Exam",
        skills: "General Knowledge, Leadership, Hard work",
        education: "Crack UPSC CSE (Prelims, Mains, Interview)",
        nextSteps: "Read newspapers daily and focus on studies."
    },
    {
        id: 6,
        title: "Teacher / Professor",
        category: "Arts",
        tags: ["Arts", "Science", "Commerce"],
        eligibility: "B.Ed or PhD in subject",
        skills: "Communication, Patience, Subject Knowledge",
        education: "Bachelors + B.Ed or Masters + NET",
        nextSteps: "Focus on the subject you love."
    },
    {
        id: 7,
        title: "Digital Marketer",
        category: "Vocational",
        tags: ["Vocational", "Tech"],
        eligibility: "Class 12 (Any stream)",
        skills: "Social Media, Writing, Analytics",
        education: "Short courses or MBA in Marketing",
        nextSteps: "Start learning social media trends."
    },
     {
        id: 8,
        title: "Army / Defense",
        category: "Government",
        tags: ["Government", "Defense"],
        eligibility: "Class 12 (NDA) or Graduation (CDS)",
        skills: "Fitness, Discipline, Bravery",
        education: "NDA Training or CDS Training",
        nextSteps: "Maintain physical fitness and sports."
    }
];

const quizQuestions = [
    {
        id: 1,
        question: "What do you enjoy doing the most?",
        options: [
            { text: "Solving math problems or understanding how things work", type: "Science" },
            { text: "Reading, writing stories, or learning history", type: "Arts" },
            { text: "Managing money or business ideas", type: "Commerce" },
            { text: "Drawing, fixing things, or using computers", type: "Vocational" } // Mixed
        ]
    },
    {
        id: 2,
        question: "Which subject is your favorite?",
        options: [
            { text: "Science / Maths", type: "Science" },
            { text: "Social Studies / English", type: "Arts" },
            { text: "Accounts / Economics", type: "Commerce" },
            { text: "Computer / Art / None of these", type: "Vocational" }
        ]
    },
     {
        id: 3,
        question: "What kind of job sounds best?",
        options: [
            { text: "Doctor, Engineer, Scientist", type: "Science" },
            { text: "Lawyer, Journalist, Teacher", type: "Arts" },
            { text: "Banker, Business Owner, Accountant", type: "Commerce" },
            { text: "Designer, Photographer, Chef, Technician", type: "Vocational" }
        ]
    }
];

const faqData = [
    {
        question: "What can I do after Class 10?",
        answer: "After Class 10, you can choose Science (for Engineering/Medical), Commerce (for Business/Accounts), or Arts (for Humanities/Law). You can also do Diploma courses (Polytechnic) or ITI for skill-based jobs."
    },
    {
        question: "What is Engineering?",
        answer: "Engineering is about solving problems using science and maths. Engineers build bridges, computers, cars, and software. You need to take Science (PCM) in Class 11-12."
    },
    {
        question: "I am weak in Maths, what should I take?",
        answer: "Don't worry! You can take Arts (History, Pol. Science) or Commerce without Maths. There are many great careers like Law, Journalism, Design, and Management that don't need advanced Maths."
    },
     {
        question: "How to become a Doctor?",
        answer: "To become a Doctor, you must take Science with Biology (PCB) in Class 11-12. Then you need to clear the NEET exam to get into a medical college for MBBS."
    },
    {
        question: "What are Vocational courses?",
        answer: "Vocational courses focus on specific skills for a job, like Graphic Design, Hotel Management, Electrician, Beautician, or Computer Hardware. They are good for starting a career early."
    }
];
