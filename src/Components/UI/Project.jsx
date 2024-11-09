import React from "react";
import "../../styles/project.css";
import { useState } from "react";
import Projects from "../Projects/Projects.jsx"

let data = [
  {
    title: "Merchant Monetary System",
    describe: "Inventory Delivery System",
    desc: "The project streamlines inventory management by facilitating communication and coordination between shopkeepers, riders, warehouse managers, and employees. It ensures efficient goods storage in warehouses and timely delivery to shopkeepers via designated riders.",
    github: "https://gitlab.com/hamadhassan/cs261f22finalpid11",
    other: "",
    keySkills: [
      "LinkedList",
      "Doubly LinkedList",
      "Hash Tables",
      "Binary Search Tree",
    ],
    developed: ".NET Desktop Application",
  },
  {
    title: "Mini Excel",
    describe: "Spreadsheet for Data Manipulation",
    desc: "Mini Excel is a console application designed for spreadsheet data manipulation, offering features such as adding values in rows or columns, deleting, inserting, shifting, performing statistical arithmetic, and saving files. ",
    github: "",
    other: "",
    keySkills: [
      "LinkedList",
      "Vectors",
      "Doubly LinkedList",
      "Quad LinkedList",
    ],
    developed: "Console Application (C++)",
  },
  {
    title: "DOS Shell",
    describe: "Files & Directories Management",
    desc: "The new DOS Shell is like the old one you're used to. It lets you do things with files and folders using commands you know. You can move, copy, delete, and find files easily, just like before. ",
    github: "",
    other: "",
    keySkills: ["Trees", "Vectors", "Singly LinkedList", "Heap"],
    developed: "Console Application (C++)",
  },
  {
    title: "Falcon Student Maintainer",
    describe: "Course & Assessment Management",
    desc: "The project aims to facilitate comprehensive student management, attendance tracking, and assessment evaluation, integrating features for managing Course Learning Outcomes (CLOs), rubrics, and assessment evaluations.",
    github: "https://gitlab.com/SyedHashir-Helper/cs262s23cs01",
    other: "",
    keySkills: ["T-SQL", "DDL", "DML", "MS SQL Server"],
    developed: ".NET Desktop Application (C#)",
  },
  {
    title: "FYP Management",
    describe: "Students Groups, Project & Advisor Management ",
    desc: "The FYP Management project helps with Final Year Projects (FYPs). It lets you create, update, and delete student groups, assign projects to groups, and choose advisors for projects. It also helps evaluate FYPs, making it easier to oversee the whole process.",
    github: "",
    other: "",
    keySkills: ["T-SQL", "DDL", "DML", "MS SQL Server"],
    developed: ".NET Desktop Application (C#)",
  },
  {
    title: "Diabetes Prediction System",
    describe: "Using Machine Learning Diagnose Diabetes",
    desc: "The Diabetes Prediction System utilizes a machine learning model, specifically a k-Nearest Neighbour implemented with sci-kit learn, to predict the likelihood of diabetes based on input features. Model has accuracy of 76%",
    github: "",
    other:
      "https://colab.research.google.com/drive/1kojcOqWkxrd7XI79h4RXw9KKXCbLYmmw#scrollTo=GUyPSNEkPKdE",
    keySkills: ["Data Pre-processing", "Classification", "scikit-learn"],
    developed: "Web Application (Flask)",
  },
  {
    title: "Classification of Web Documents",
    describe: "Using KNN, Predict the document category",
    desc: "The project involves implementing K-Nearest Neighbors (KNN) algorithm for web document classification, enabling efficient categorization of content based on similarity to neighboring documents with accuracy ~ 92%. ",
    github:
      "https://github.com/SyedHashir-Helper/Classification-of-Web-Documents",
    other:
      "https://colab.research.google.com/drive/1iIQvR-v7LVbO1eKpw9YighKRoryqxXYO#scrollTo=GAvIYKsaLaRF",
    keySkills: ["Text Processing", "KNN", "MCS", "Web Scrapping"],
    developed: "Python Console",
  },
  {
    title: "Incog-Files Dev",
    describe: "Secure File Uploading and Processing",
    desc: "Developed a secure web application using React and Node.js, featuring server-side validation and sanitization to prevent common vulnerabilities such as file inclusion attacks and malicious file execution. Utilized VirusTotal API for file scanning and Amazon S3 Bucket for secure storage",
    github:
      "https://github.com/Shahzaib-Irfan/Secure-File-Uploading-And-Processing",
    other: "",
    keySkills: [
      "S3 Bucket",
      "SQL Injection / XSS",
      "Directory Traversal",
      "File Inclusion Attack",
    ],
    developed: "Web Application (MERN)",
  },
  {
    title: "Object Detection (YOLOv8)",
    describe: "Crowd & Harmful Objects",
    desc: "Developed a surveillance system utilizing YOLOv8 to detect harmful objects such as guns and fire amidst crowds, triggering alerts via email and WhatsApp upon detection. Implemented using Python on Google Colab, ensuring real-time monitoring for enhanced security measures.",
    github: "https://github.com/SyedHashir-Helper/Netflix-Landing-Page-React-",
    other:
      "https://colab.research.google.com/drive/1Kw7IxDils-2FUTmw--3hIp7jEyoPfMaC#scrollTo=UdnkBZVn9Xyb",
    keySkills: ["OpenCV", "YOLOv8", "Mail Gun API", "Model Training"],
    developed: "Google Colab Notebook",
  },
  {
    title: "Netflix Landing Page in React JS",
    describe: "Component-Based Framework",
    desc: "Responsive Netflix Landing Page created in React JS to practice component-based framework",
    github:
      "https://github.com/SyedHashir-Helper/Crowd-and-Harmful-Objects-detection",
    other: "https://syedhashirhusnain-react01.netlify.app/",
    keySkills: ["React JS", "Ant Design", "HTML", "CSS", "Bootstrap"],
    developed: "React JS",
    active: false
  },
  {
    title: "Llama 3 Chat",
    describe: "Chatbot using Llama 3 API",
    desc: "A entry level learning project how to use already built LLMs and utilizing their powerful features.",
    github:
      "https://github.com/SyedHashir-Helper/Llama3-Chatbot",
    other: "https://llama3-chatbot-madeby-hashir.streamlit.app/",
    keySkills: ["LLMs", "GROQ API", "Streamlit"],
    developed: "Streamlit and GROQ"
  },
  {
    title: "Mealian Guide",
    describe: "Meal Recommendation System for Diabetes Patient",
    desc: "An LLM based meal guide system for diabetes patient which helps them in their normal life sugar in-take control and provides them with healthy diet plan.",
    github:
      "https://github.com/SyedHashir-Helper/Mealian-Guide",
    other: "https://mealian-guide-made-by-hashir.streamlit.app/",
    keySkills: ["LLMs", "GROQ API", "Streamlit", "Use LLMs for Specfic use case"],
    developed: "Streamlit and GROQ (Llama)"
  },
  {
    title: "Lang-QL",
    describe: "Natural Language to SQL Schema",
    desc: "An LLM based SQL Schema generator using natural language input. Sql Schema in T-SQL, MySQL and PostgreSQL are supported",
    github:
      "https://github.com/SyedHashir-Helper/Lang-QL",
    other: "https://lang-ql-made-by-hashir.streamlit.app/",
    keySkills: ["LLMs", "GROQ API", "Streamlit", "Use LLMs for Specfic use case"],
    developed: "Streamlit and GROQ (Llama)"
  },
  {
    title: "GenMail",
    describe: "AI-based Email Writer and Formatter",
    desc: "An LLM based Email Writing Tool works on prompt and generate email for you to which you have ability to edit and format your email. You can send your signature as attachment as well.",
    github:
      "https://github.com/SyedHashir-Helper/Lang-QL",
    other: "https://lang-ql-made-by-hashir.streamlit.app/",
    keySkills: ["LLMs", "GROQ API", "Streamlit", "Use LLMs for Specfic use case"],
    developed: "Streamlit and GROQ (Llama)"
  },
];

const Project = () => {
  
  return (
    <section id="projects">
      <div className="container">
        <div className="project-top-content">
          <h6 className="subtitle">My Projects</h6>
          <h2>Showcasing My Skills</h2>
          <h3 className="highlight">I've developed or worked on</h3>
        </div>

        {data.map((element, index) => {
          return (
            <Projects 
              key={index}
              element={element}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
