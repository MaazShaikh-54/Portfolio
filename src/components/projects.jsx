import BentoGrid from './bentoGrid';

const projects = [
  {
    title: 'Camp Site Booking'
  },
  {
    description: 'CampSite is a campsite booking website designed with a user-friendly and intuitive frontend. Users can easily navigate through the website to search for available campsites, view details, and make reservations.'
  },
  {
    images: [
        '../../public/assets/campsite home page.png',
        '../../public/assets/auth.png',
        '../../public/assets/cards.png',
    ],
  },
  {
    images: [
        '../../public/assets/logo192.png',
    ],
    description: 'Logo'
  },
  {
    icons: [
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
        }
    ]
  },
  {
    icons: [
        {
            src: '../../public/assets/send.png',
            link: 'https://campsitebooking.netlify.app/'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
            link: 'https://github.com/MaazShaikh-54/Camp-Site-Booking'
        },
    ]
  },
];

const projects2 = [
  {
    title: 'Space Rocket Game UI',
  },
  {
    description: 'Designed a space rocket game UI in Figma featuring a dynamic home page with an intuitive menu for seamless navigation. The game includes a competitive leaderboard for players, two comprehensive tutorial pages—one in text and another with a video tutorial—ensuring accessible learning. Additionally, the player profile page offers a personalized gaming experience.'
  },
  {
    images: [
        '../../public/assets/Figma/Home Page.jpg',
        '../../public/assets/Figma/Menu.jpg',
        '../../public/assets/Figma/Rules - Text.jpg',
        '../../public/assets/Figma/Rules - Tutorial.jpg'
    ]
  },
  {
    images: [
        '../../public/assets/Figma/Profile Page.jpg',
        '../../public/assets/Figma/Leaderboard.jpg',
    ]
  },
  {
    icons: [
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
        },
    ]
  },
  {
    description: 'Wireframing & Prototyping'
  }
];

export default function Projects(){
  return (
    <section>
      <BentoGrid projects={projects} /><br /><br /><br />
      <BentoGrid projects={projects2} />
    </section>
  );
}
