// Updated sample projects data
const projects = [
    'Line following robot',
    'Restaurant management system',
    'Hospital management system',
    'Parallel and serial computing comparison',
    'Sorting algorithms comparison',
    'Facial recognition system',
    'Digital Twin research',
    'Halo effect project',
    'Technical business writing research',
    'Final Year Project'
];

const courses = [
    'Programming fundamentals',
    'Object-oriented programming',
    'Digital Logic Design',
    'Computer Organisation and Assembly Language',
    'Calculus I & II',
    'Graph Theory',
    'Operating Systems',
    'Parallel and Distributed Computing',
    'Design & Analysis of Algorithms',
    'Probability and Statistics',
    'Artificial Intelligence',
    'Computer Networks',
    'DevOps',
    'IS Audit',
    'Information Security'
];

function showHome() {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = `
        <section id="home">
            <h2>About Me</h2>
            <p>My name is Eisha Fatima, and I'm a final-year BSCS student from FAST-NUCES. Currently, I'm studying many courses such as DevOps, Information Security, Information Systems Audit, and others. My final-year project is Research-based, with the title of 'Digital Twin Technology'.</p>
        </section>
    `;
}

function showProjects() {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = `
        <section id="projects">
            <h2>Projects</h2>
            <label for="filter">Filter by project:</label>
            <input type="text" id="filter" oninput="filterProjects()">
            <div id="projectList">
                <!-- Project items will be dynamically added here -->
            </div>
        </section>
    `;

    // Display all projects initially
    const projectList = document.getElementById('projectList');
    projects.forEach((project, index) => {
        const projectBox = document.createElement('div');
        projectBox.className = 'projectBox';
        projectBox.textContent = `${index + 1}. ${project}`;
        projectList.appendChild(projectBox);
    });
}

function showEducation() {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = `
        <section id="education">
            <h2>Education</h2>
            <div class="courseBox">
                <ol>
                    ${courses.map(course => `<li>${course}</li>`).join('')}
                </ol>
            </div>
        </section>
    `;
}

function filterProjects() {
    const filterValue = document.getElementById('filter').value.toLowerCase();
    const projectList = document.getElementById('projectList');
    projectList.innerHTML = ''; // Clear existing list

    // Filter and display projects
    projects.forEach((project, index) => {
        if (project.toLowerCase().includes(filterValue)) {
            const projectBox = document.createElement('div');
            projectBox.className = 'projectBox';
            projectBox.textContent = `${index + 1}. ${project}`;
            projectList.appendChild(projectBox);
        }
    });
}

// Initial load - show the Home content
showHome();
