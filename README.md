# MERN Stack Machine Test

## Setup Instructions

### Backend
1. Navigate to the `backend` folder
2. Run `npm install`
3. Copy `.env.example` to `.env` and fill in your MongoDB URI and JWT secret
4. Run `npm start` to launch the backend server

### Frontend
1. Navigate to the `frontend` folder
2. Run `npm install`
3. Run `npm start` to launch the React frontend

---

## Features
- Admin login (JWT authentication)
- Agent creation & management
- CSV upload, validation, and distribution
- Display distributed lists per agent

---

## Tech Stack
- MongoDB, Express.js, Node.js, React.js

---

## Video Demo
Add your Google Drive video link here.
====================================================================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My Portfolio</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>My Portfolio</h1>
    <button id="theme-toggle">Dark Mode</button>
  </header>

  <nav>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>AIML enthusiast and full-stack developer, passionate about learning new technologies and becoming industry-ready. Great knowledge of computer fundamentals and AI tools. Participated in various Hackathons, Tech Competitons and programs. Volunteered multiple tech programs and continuously involved in industrial talk and summits.</p>
    </section>

    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>SQL, MongoDB, AWS</li>
        <li>Operating Systems, DBMS, DSA</li>
      </ul>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>AI-Based Resume Builder</li>
        <li>AI-Based Fake job offer detector</li>
        <li>AIML based deepfake detection model</li>
        <li>Real time chatting website</li>
      </ul>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <form id="contact-form">
        <input type="text" id="name" placeholder="Your Name" required />
        <input type="email" id="email" placeholder="Your Email" required />
        <textarea id="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <p id="msg"></p>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
===================================================================
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: rgb(98, 139, 172);
  color: black;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background: rgb(60, 147, 182);
  color: white;
  padding: 20px;
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  background: #eee;
  padding: 10px;
}

nav a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background 0.3s;
}

nav a:hover {
  background: #ccc;
}

main {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

section {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin: 8px 0;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  max-width: 300px;
}

input, textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background: green;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.dark {
  background: black;
  color: white;
}

.dark header {
  background: brown;
}

.dark nav {
  background: #333;
}

.dark nav a {
  color: white;
}

.dark section {
  background: #222;
}

===========================================================
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

const form = document.getElementById('contact-form');
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    msg.textContent = `Thanks, ${name}! Your message has been sent.`;
    msg.style.color = 'green';
    form.reset();
  } else {
    msg.textContent = 'Please fill out all fields.';
    msg.style.color = 'red';
  }
});
===================================================================
