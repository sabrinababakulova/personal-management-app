import Mimir from '../../assets/Mimir.png';
import Hackers from '../../assets/hackers.png';
import Ellty from '../../assets/ellty.png';
export const ListOfProjects = [
  {
    id: 1,
    name: 'Web Development',
    projects: [
      {
        id: 1,
        title: 'Mimir Library',
        description:
          "The application is a B2B solution for effective and low-involvement items management across the office space. It delivers smooth and clear experience for the employees and responsible item managers. With Mimir, such actions as taking an item, returning it or donating to the office could be done without manager's attendance.",
        image: Mimir,
        link: 'https://mimirapp.xyz',
        stack: [
          'React',
          'Nest',
          'Prisma',
          'TypeORM',
          'GraphQL',
          'Styled Components',
          'Typescript',
          'NX',
          'Docker',
          'Redux Toolkit',
          'Postgres',
          'Jest testing library',
        ],
      },
      {
        id: 2,
        title: 'Ellty online editor',
        description:
          "Ellty is online graphic design platform, which helps people to create designs in templates, with ability to save them, and come back later to change in editor.  In the editor, user can remove background, add text to image, resize, premium photos, elements, fonts, and upload your own photos, fonts, or stickers all in one web software. Ellty's users can create any project, including presentations, logos, social media content, posters, flyers, wall art prints, invitations, and more",
        image: Ellty,
        link: 'https://ellty.com',
        stack: [
          'Next',
          'Nest',
          'MongoDB',
          'Redux Toolkit',
          'Typescript',
          'Material UI',
          'SASS',
          'Swagger',
          'Polotno',
        ],
      },
      {
        id: 3,
        title: 'Memorization cards',
        description:
          'A website, where user can find cards with pokemon description, and change the title and body as user wants, and save it to local storage. User can also delete the card, and add new card. There is also admin panel, which helps to control ReadOnly property of cards.',
        link: 'https://github.com/sabrina34352/task-rep',
        stack: [
          'React',
          'Redux',
          'Jest Testing Library',
          'Axios',
          'Chakra UI',
          'Styled Components',
        ],
      },
      {
        id: 4,
        title: 'e-Shop for hackers',
        description:
          'Personal project, A website where developers, particularly hackers, can buy stuff for themselves, save it to the cart, register on the site and finish the purchase with payment. The site is based on the React.js',
        image: Hackers,
        link: 'https://online-shop-for-hackers.vercel.app/',
        stack: ['React', 'CSS'],
      },
      {
        id: 5,
        title: 'Self introductory website',
        description:
          'Personal project, This is portfolio-introduction website, made as a start of my career, and all the contacts, won prizes are displayed there',
        stack: ['HTML', 'CSS', 'Javascript'],
        link: 'https://sabrina34352.github.io',
      },
    ],
  },
];
