// String Literals - BackTeck

let name = "Gautam Govind"
let town = "Mahua Vaishali"
let age = 20;
let languages = ["English", "Hindi"]
console.log(`My name is ${name}. I am from ${town}. I am ${age} years old and I know ${languages[0]} and ${languages[1]}.`)
const landmark = "Near Gupta Market"
const village = "ParmanandPur Lal"
const city = "Mahua"
const district = "Vaishali"
const state = "Bihar"
console.log(` 
Address:  
    Village:
    ${village}, ${landmark}
    City: ${city}, 
    District: ${district}
    State: ${state}
    `)

// ternary Operator

console.log(`Voting Eligibility: ${age >= 18 ? "Eligible to vote" : "Not Eligible to vote"}`);

const skills = ["Java", "JavaScript", "React", "Spring Boot", "HTML", "CSS"];
const [skill1, skill2, ...otherSkills] = skills;
console.log(`
Skills:
        1. ${skill1}
        2. ${skill2}
        3. ${otherSkills.join(", ")}
    `);


// Destructuring

const user = {
    userName: "Gautam Govind",
    address: "Vaishali Bihar",
    contact: 8709734856,
    email: "gautamgovind448@gmail.com"
}

const { userName } = user;
const { address } = user;
console.log(`
Contact:
    Email: ${user.email}
    Address: ${address}
    `);
    
    const projects = [
        {
            title: "ToDo React App",
            description: "A simple ToDo app built with React",
            Link: "https://gautam-govind-to-do-react-app.netlify.app"
    },
    {
        title: "Smart Email Reply Assistant",
        description: "An AI-based email reply assistant that generates replies based on the email content.",
        Link: "#"
    },
    {
        title: "Blog Application",
        description: "A simple blog application built with Spring Boot and React with Live Chrome Extension.",
        Link: "#"
    }
]

const [firstProject, secondProject] = projects;
console.log(`
Projects:
    1. ${firstProject.title} - ${firstProject.description}
    2. ${secondProject.title} - ${secondProject.description}
`);

const education = [
    {
        degree: "BTech in Computer Science",
        institution: "Dr C V Raman University",
        CGPA: "8.2",
        year: 2026
    },
    {
        degree: "Senior Secondary Schooling(12th)",
        institution: "Best Model Public School",
        percentage: "90%",
        year: 2022
    },
    {
        degree: "Secondary Schooling(10th)",
        institution: "St. John's Academy",
        percentage: "90%",
        year: 2020
    }
]

const [firstEducation, secondEducation] = education;
console.log(`
Education:
    1. ${firstEducation.degree} - ${firstEducation.institution} (${firstEducation.year})
    2. ${secondEducation.degree} - ${secondEducation.institution} (${secondEducation.year})
`);