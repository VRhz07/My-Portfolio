document.addEventListener('DOMContentLoaded', function() {
    // Get the project ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (!projectId) {
        // If no project ID provided, redirect to projects page
        window.location.href = 'projects-gallery.html';
        return;
    }
    
    // Project data (in a real application, this might come from a server/database)
    const projectsData = {
        'aws-anime': {
            title: 'AWS Anime Library System',
            year: '2nd year (2023)',
            type: 'Group Project',
            tech: 'Python-Flask, HTML, CSS, JS',
            image: './assets/img/projects screenshots/AWS Anime Library.png',
            description: 'The AWS Anime Library System is a comprehensive web platform that aggregates anime content from various sources across the internet. Developed as a group project during my second year of university, it provides users with a centralized hub to discover, track, and explore anime titles. The system includes advanced search functionality, user accounts for tracking watched series, and personalized recommendations based on viewing history.',
            techStack: ['Python', 'Flask', 'HTML5', 'CSS3', 'JavaScript', 'SQLite'],
            features: [
                'Comprehensive anime database with detailed information',
                'User accounts with watch history tracking',
                'Advanced search and filtering options',
                'Responsive design for desktop and mobile devices',
                'Integration with multiple anime data sources'
            ],
            challenges: 'One of the main challenges we faced was integrating data from multiple anime sources while maintaining consistency in the presentation. We solved this by creating a unified data model and implementing custom adapters for each source API. Performance optimization was also a focus, as we needed to handle potentially large datasets while ensuring fast page load times.',
            githubLink: 'https://github.com/VRhz07/AWSAnimeLibrarySystem',
            demoLink: '#'
        },
        'bodyfitmax': {
            title: 'BodyFitMax',
            year: '3rd year (2024)',
            type: 'Solo Project',
            tech: 'Python-Django, JS, HTML, Tailwind CSS',
            image: './assets/img/projects screenshots/BodyFitMax.png',
            description: 'BodyFitMax is a workout web application specifically designed for individuals who don\'t have access to gym equipment. This solo project, developed during my third year, focuses on providing effective home workouts using bodyweight exercises. The app includes workout plans for different fitness levels, progress tracking, and detailed exercise instructions with visual guides.',
            techStack: ['Python', 'Django', 'JavaScript', 'HTML5', 'Tailwind CSS', 'SQLite', 'AJAX'],
            features: [
                'Equipment-free workout routines for all fitness levels',
                'Custom workout plan generator based on user goals and limitations',
                'Progress tracking with statistics',
                'Animated exercise demonstrations (failed to implement)',
                'User authentication and profile customization'
            ],
            challenges: 'Designing workouts that were effective without equipment required extensive research into exercise science. I also needed to ensure the application was accessible for users with varying levels of fitness experience. The implementation of animated exercise  demonstrations was technically challenging and was failed due to short amount of time, but this feature is crucial for proper form guidance. The plan is to use a combination of SVG animations and short video clips to address this need.',
            githubLink: 'https://github.com/VRhz07/BodyFitMax_Midterms',
            demoLink: '#'
        },
        'portfolio': {
            title: 'Developer\'s Portfolio',
            year: '3rd year (2025)',
            type: 'Solo Project',
            tech: 'HTML, CSS, JavaScript',
            image: './assets/img/projects screenshots/developers portfolio.png',
            description: 'This Developer\'s Portfolio is a personal website showcasing my projects, skills, and creative work. Built using HTML, CSS, and JavaScript, it serves as a hub for demonstrating my coding abilities and design sensibilities. The portfolio includes sections for technical projects, artwork, and photography, providing a comprehensive view of my diverse skill set.',
            techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
            features: [
                'Responsive design that works on all device sizes',
                'Project gallery with detailed project information',
                'Art and photography showcases',
                'Modern UI with smooth animations and transitions',
                'Performance optimized for fast loading times',
                'SEO-friendly structure'
            ],
            challenges: 'Creating a portfolio that effectively showcases both technical and creative work presented a design challenge. I wanted to ensure that the site was fast-loading while still incorporating high-quality images and smooth animations. To achieve this balance, I implemented responsive images with appropriate srcset attributes. The responsive design required careful planning to ensure optimal viewing on all device sizes.',
            githubLink: '#',
            demoLink: '#'
        },
        'hz-electronic': {
            title: 'Hz Electronics E-commerce Interface',
            year: '2nd year (2023)',
            type: 'Solo Project',
            tech: 'HTML, CSS, JavaScript',
            image: './assets/img/projects screenshots/Hz Electronic Shop.png',
            description: 'Hz Electronics is an e-commerce interface designed for browsing and purchasing electronic devices. This project focused on creating an intuitive shopping experience with a clean, modern design. The interface includes product browsing, filtering, and detailed product pages',
            techStack: ['HTML5', 'CSS3', 'JavaScript'],
            features: [
                'Responsive product grid with filtering options',
                'Detailed product pages with specifications and reviews',
                'User account management interface',
                'Product search functionality',
            ],
            challenges: 'Implementing the design was challenge due to the limited time and we have just begin to learn about frontend, but I managed to create a  user-friendly interface that could effectively display varied product information while maintaining consistency across the site. I created flexible product card and detail templates that could adapt to different types of electronics.',
            githubLink: 'https://github.com/VRhz07/Hz-Electronic-Website',
            demoLink: '#'
        },
        'person-management': {
            title: 'Person Management System',
            year: '2nd year (2023)',
            type: 'Group Project',
            tech: 'PHP, HTML, CSS, MySQL',
            image: './assets/img/projects screenshots/Person Mangement System.png',
            description: 'The Person Management System is a comprehensive solution for organizing employee information within a company. This group project provides tools for HR departments to manage employee records, track performance, manage departments and roles, and generate reports. The system features a user-friendly interface with robust security measures to protect sensitive personnel data.',
            techStack: ['PHP', 'HTML5', 'CSS3', 'MySQL', 'JavaScript', 'Bootstrap', 'AJAX'],
            features: [
                'Employee record management with detailed profiles',
                'Department and role organization',
                'Performance tracking and evaluation tools',
                'Report generation and export functionality',
                'User permission levels with secure authentication',
                'Document storage for employee files',
                'Search and filter capabilities'
            ],
            challenges: 'Security was a primary concern for this project, as it deals with sensitive employee information. We implemented thorough authentication and authorization systems, with data encryption for sensitive fields. Database design was also challenging, as we needed to create a flexible schema that could accommodate various organizational structures while maintaining data integrity. We used a normalized database design with appropriate relationships to address these requirements.',
            githubLink: 'https://github.com/VRhz07/PersonManagementSystem',
            demoLink: '#'
        },
        'sams': {
            title: 'Student Attendance Management System',
            year: 'Mid year (2023)',
            type: 'Group Project',
            tech: 'Django, HTML, Bootstrap, CSS, MySQL',
            image: './assets/img/projects screenshots/SAMS.png',
            description: 'The Student Attendance Management System (SAMS) is a comprehensive web application designed to streamline administrative tasks in educational institutions. Built with Django, this group project provides tools for managing student information, course registrations, grades, attendance, and academic progress. The system includes separate interfaces for administrators, teachers, and students.',
            techStack: ['Django', 'Python', 'HTML5', 'Bootstrap', 'CSS3', 'MySQL', 'JavaScript'],
            features: [
                'Student record management with academic history',
                'Course registration and scheduling',
                'Attendance tracking system',
                'Automated report generation'
            ],
            challenges: 'Managing the different access levels and ensuring appropriate data visibility for each user type (admin, teacher, student) was a significant challenge. We implemented a comprehensive permission system with role-based access control.',
            githubLink: 'https://github.com/VRhz07/Project_SAMS',
            demoLink: '#'
        },
        'snake-game': {
            title: 'Snake Game',
            year: '1st year (2022)',
            type: 'Group Project',
            tech: 'Java',
            image: './assets/img/projects screenshots/SNAKE GAME JAVA.png',
            description: 'This Snake Game is a classic arcade game implementation using Java. Developed as a first-year group project, it features the traditional snake gameplay where players control a snake that grows longer as it consumes food while avoiding collisions with walls and itself. The game includes multiple difficulty levels, score tracking, and visual effects.',
            techStack: ['Java', 'Swing', 'AWT', 'Object-Oriented Programming'],
            features: [
                'Classic snake gameplay mechanics',
                'Multiple difficulty levels affecting game speed',
                'Score tracking and high score table',
                'Visual and sound effects',
                'Pause and resume functionality',
                'Game over detection and restart options'
            ],
            challenges: 'Implementing the collision detection and snake movement mechanics required careful consideration of the game logic. We used a linked list structure to represent the snake\'s body segments, which simplified the growth mechanics but made collision detection more complex. Another challenge was ensuring consistent game speed across different systems, which we addressed by implementing a timing system based on the system clock rather than frame rates.',
            githubLink: '#',
            demoLink: '#'
        },
        'shadow-resurrection': {
            title: 'Shadow Resurrection',
            year: '2nd year (2023)',
            type: 'Group Project',
            tech: 'Java',
            image: './assets/img/projects screenshots/Shadow Resurrection.png',
            description: 'Shadow Resurrection is a 2D platformer RPG game developed in Java. This group project features a dark fantasy world where players control a resurrected hero on a quest to restore balance to a corrupted land. The game includes combat mechanics, and environmental puzzles across various levels.',
            techStack: ['Java', 'JavaFX', 'Object-Oriented Design', 'Game Physics', 'Sprite Animation'],
            features: [
                'Combat mechanics with various weapons and enemies',
                'Environmental puzzles and platform challenges',
                'Multiple levels with unique themes and challenges'
            ],
            challenges: 'The implementation of the game physics, particularly for the platforming mechanics, was challenging. We needed to create a system that felt responsive and precise while handling collision detection accurately.  Asset management was another challenge, as we needed to handle numerous sprites, sound effects, and background elements efficiently to maintain performance.',
            githubLink: '#',
            demoLink: '#'
        }
    };
    
    // Load the project data into the page
    const project = projectsData[projectId];
    
    if (!project) {
        // If project data not found, redirect to projects page
        window.location.href = 'projects-gallery.html';
        return;
    }
    
    // Update page title
    document.title = `${project.title} - Harv's Portfolio`;
    
    // Update project details
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-year').textContent = `Year: ${project.year}`;
    document.getElementById('project-type').textContent = `Type: ${project.type}`;
    document.getElementById('project-tech').textContent = `Tech: ${project.tech}`;
    document.getElementById('project-img').src = project.image;
    document.getElementById('project-img').alt = project.title;
    document.getElementById('project-description').textContent = project.description;
    document.getElementById('challenges').textContent = project.challenges;
    
    // Update tech stack list
    const techList = document.getElementById('tech-list');
    techList.innerHTML = '';
    project.techStack.forEach(tech => {
        const li = document.createElement('li');
        li.textContent = tech;
        techList.appendChild(li);
    });
    
    // Update features list
    const featuresList = document.getElementById('features-list');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Update links
    const githubLink = document.getElementById('github-link');
    const demoLink = document.getElementById('live-demo');
    
    if (project.githubLink && project.githubLink !== '#') {
        githubLink.href = project.githubLink;
        githubLink.textContent = 'View Source Code';
    } else {
        githubLink.textContent = 'Source Code Not Available';
        githubLink.classList.add('disabled');
    }
    
    if (project.demoLink && project.demoLink !== '#') {
        demoLink.href = project.demoLink;
    } else {
        demoLink.textContent = 'Demo Not Available';
        demoLink.classList.add('disabled');
    }
}); 