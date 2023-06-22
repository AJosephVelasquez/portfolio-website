import {
    FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaBriefcase, FaGraduationCap, FaCode, FaGithub
} from 'react-icons/fa';

import {
    FiFileText, FiExternalLink
} from 'react-icons/fi';

import {
    MdPreview
} from 'react-icons/md'

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className='nav-icon' />,
        path: '/'
    },

    {
        id: 2   ,
        name: 'About',
        icon: <FaUser className='nav-icon' />,
        path: '/about'
    },

    {
        id: 3,
        name: 'Portfolio',
        icon: <FaFolderOpen className='nav-icon' />,
        path: '/portfolio'
    },

    {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav-icon' />,
        path: '/contact'
    }
];

export const personalInfo = [
    {
        id: 1,
        title: 'First Name: ',
        description: 'Alain'
    },

    {
        id: 2,
        title: 'Last Name: ',
        description: 'Velasquez'
    },

    {
        id: 3,
        title: 'Age: ',
        description: '24 Years'
    },

    {
        id: 4,
        title: 'Nationality: ',
        description: 'Filipino'
    },

    {
        id: 5,
        title: 'Address: ',
        description: 'Dagupan City, Pangasinan'
    },

    {
        id: 6,
        title: 'Phone: ',
        description: '+639064767056'
    },

    {
        id: 7,
        title: 'Email: ',
        description: 'velasquezalain19@gmail.com'
    },

    {
        id: 8,
        title: 'Languages: ',
        description: 'Filipino, English'
    },
];

export const stats = [
    {
        id: 1,
        no: '1+ ',
        description: 'Years of Experience in IT'
    },

    {
        id: 2,
        no: '10+ ',
        description: 'Projects completed'
    },

    {
        id: 3,
        no: '40+ ',
        description: 'Hours Training of Web Development'
    },

    {
        id: 4,
        no: '3+ ',
        description: 'Certifications'
    },
];

export const skills = [
    {
        id: 1,
        title: 'HTML5 ',
        percentage: '75'
    },

    {
        id: 2,
        title: 'CSS3 ',
        percentage: '70'
    },

    {
        id: 3,
        title: 'Javascript ',
        percentage: '69'
    },

    {
        id: 4,
        title: 'JQuery ',
        percentage: '58'
    },

    {
        id: 5,
        title: 'Bootstrap ',
        percentage: '63'
    },

    {
        id: 6,
        title: 'ReactJS ',
        percentage: '65'
    },

    {
        id: 7,
        title: 'Node.js ',
        percentage: '47'
    },

    {
        id: 8,
        title: 'PHP ',
        percentage: '36'
    },
];

export const resume = [
    {
        id: 1,
        category: 'experience',
        icon: <FaBriefcase />,
        year: '2021 - Present',
        title: 'Associate Software Engineer <span>Accenture</span>',
        description: 'Facilitating the resolution of API-related inquiries and effectively addressing customer concerns. Additionally, actively engaging in continuous professional development through upskill training programs and bootcamps, further honing expertise as a full-stack developer'
    },

    {
        id: 2,
        category: 'experience',
        icon: <FaBriefcase />,
        year: '2021 (June - August)',
        title: 'Project Engineer <span>Wipro</span>',
        description: 'Performing meticulous troubleshooting and proficiently escalating customer-reported issues, while eagerly updating product documentation. Consistently delivering comprehensive daily shift reports, ensuring clear and concise communication within the team'
    },

    {
        id: 3,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2015 - 2020',
        title: 'Bachelor of Science in Chemical Engineering <span>Saint Louis University</span>',
        description: "A Dean's Lister for 4 years and a part of the School of Engineering and Architecture Honor Society"
    },

    {
        id: 4,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2011 - 2015',
        title: 'High School <span>Divine Word Academy of Dagupan</span> ',
        description: 'Graduated as a salutatorian and was a vice president of the Robotics Club that went to the Nationals'
    }
];

export const portfolio = [
    {
        id: 1,
        img: Work1,
        title: 'Portfolio Website',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project: ',
                description: 'Portfolio'
            },
            {
                icon: <FaGithub />,
                title: 'GitHub Repository: ',
                description: '<a href="https://github.com/AJosephVelasquez/portfolio-website">https://github.com/AJosephVelasquez/portfolio-website</a>'
            },
            {
                icon: <FaCode />,
                title: 'Language: ',
                description: 'HTML5, CSS3, Javascript, and React'
            },
            {
                icon: <MdPreview />,
                title: 'Preview: ',
                description: '<a href="https://ajosephvelasquez.github.io/portfolio-website/">https://ajosephvelasquez.github.io/portfolio-website/</a>'
            }   
        ]
    },

    {
        id: 2,
        img: Work2,
        title: 'Calculator',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project: ',
                description: 'Calculator'
            },
            {
                icon: <FaGithub />,
                title: 'GitHub Repository: ',
                description: '<a href="https://github.com/AJosephVelasquez/Calculator">https://github.com/AJosephVelasquez/Calculator</a>'
            },
            {
                icon: <FaCode />,
                title: 'Language: ',
                description: 'HTML5, CSS3, Javascript, and React'
            },
            {
                icon: <MdPreview />,
                title: 'Preview: ',
                description: '<a href="https://ajosephvelasquez.github.io/Calculator/">https://ajosephvelasquez.github.io/Calculator/</a>'
            }   
        ]
    },

    {
        id: 3,
        img: Work3,
        title: 'MyNotes',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project: ',
                description: 'MyNotes'
            },
            {
                icon: <FaGithub />,
                title: 'GitHub Repository: ',
                description: '<a href="https://github.com/AJosephVelasquez/MyNotes">https://github.com/AJosephVelasquez/MyNotes</a>'
            },
            {
                icon: <FaCode />,
                title: 'Language: ',
                description: 'HTML5, CSS3, Javascript, and React'
            },
            {
                icon: <MdPreview />,
                title: 'Preview: ',
                description: '<a href="https://ajosephvelasquez.github.io/MyNotes/">https://ajosephvelasquez.github.io/MyNotes/</a>'
            }   
        ]
    },

    {
        id: 4,
        img: Work4,
        title: 'Dicee',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project: ',
                description: 'Dicee'
            },
            {
                icon: <FaGithub />,
                title: 'GitHub Repository: ',
                description: '<a href="https://github.com/AJosephVelasquez/Dicee">https://github.com/AJosephVelasquez/Dicee</a>'
            },
            {
                icon: <FaCode />,
                title: 'Language: ',
                description: 'HTML5, CSS3, Javascript, and JQuery'
            },
            {
                icon: <MdPreview />,
                title: 'Preview: ',
                description: '<a href="https://ajosephvelasquez.github.io/Dicee/">https://ajosephvelasquez.github.io/Dicee/</a>'
            }   
        ]
    },

    {
        id: 5,
        img: Work5,
        title: 'Simon Game',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project: ',
                description: 'Simon Game'
            },
            {
                icon: <FaGithub />,
                title: 'GitHub Repository: ',
                description: '<a href="https://github.com/AJosephVelasquez/Simon-Game">https://github.com/AJosephVelasquez/Simon-Game</a>'
            },
            {
                icon: <FaCode />,
                title: 'Language: ',
                description: 'HTML5, CSS3, Javascript, and JQuery'
            },
            {
                icon: <MdPreview />,
                title: 'Preview: ',
                description: '<a href="https://ajosephvelasquez.github.io/Simon-Game/">https://ajosephvelasquez.github.io/Simon-Game/</a>'
            }   
        ]
    },

    {
        id: 6,
        img: Work6,
        title: 'Drum Kit',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project: ',
                description: 'Drum Kit'
            },
            {
                icon: <FaGithub />,
                title: 'GitHub Repository: ',
                description: '<a href="https://github.com/AJosephVelasquez/Drum-Kit">https://github.com/AJosephVelasquez/Drum-Kit</a>'
            },
            {
                icon: <FaCode />,
                title: 'Language: ',
                description: 'HTML5, CSS3, Javascript'
            },
            {
                icon: <MdPreview />,
                title: 'Preview: ',
                description: '<a href="https://ajosephvelasquez.github.io/Drum-Kit/">https://ajosephvelasquez.github.io/Drum-Kit/</a>'
            }   
        ]
    }
];

export const themes = [
    {
        id: 1,
        img: Theme1,
        color: 'hsl(252, 35%, 51%)'
    },

    {
        id: 2,
        img: Theme2,
        color: 'hsl(4, 93%, 54%)'
    },

    {
        id: 3,
        img: Theme3,
        color: 'hsl(271, 76%, 53%)'
    },

    {
        id: 4,
        img: Theme4,
        color: 'hsl(225, 73%, 57%)'
    },

    {
        id: 5,
        img: Theme5,
        color: 'hsl(43, 74%, 49%)'
    },

    {
        id: 6,
        img: Theme6,
        color: 'hsl(339, 81%, 66%)'
    },

    {
        id: 7,
        img: Theme7,
        color: 'hsl(80, 61%, 50%)'
    },

    {
        id: 7,
        img: Theme7,
        color: 'hsl(80, 61%, 50%)'
    },

    {
        id: 8,
        img: Theme8,
        color: 'hsl(19, 96%, 52%)',
    },
    
    {
        id: 9,
        img: Theme9,
        color: 'hsl(88, 65%, 43%)',
    },
    
    {
        id: 10,
        img: Theme10,
        color: 'hsl(42, 100%, 50%)',
    }
]