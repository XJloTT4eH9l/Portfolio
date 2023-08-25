import evaImg from './assets/eva.jpg'
import pickFilm from './assets/pickFilm.jpg'
import anywherePizza from './assets/anywherePizza.jpg'
import concrete from './assets/concrete.jpg'
import meeting from './assets/meeting.jpg';
import freezer from './assets/freezer.jpg'

export const portfolio = [
    {
        id: 1,
        title: 'Eva',
        img: [evaImg],
        description: 'Eva is a modern and user-friendly web application designed to revolutionize the way people order fresh juices online',
        tools: ['React','Redux','Typescript','SCSS','Rest API', 'React hook form', 'i18next'],
        links: {
            github: null,
            deploy: 'https://xjlott4eh9l.github.io/Eva/'
        }
    },
    {
        id: 2,
        title: 'PickFilm',
        img: [pickFilm],
        description: 'Welcome to PickFilm, your ultimate destination for movie exploration and excitement. PickFilm brings you a curated selection of movies along with a thrilling roulette feature that picks a random film for your viewing pleasure.',
        tools: ['React','Redux','Typescript','Firebase','SCSS','Rest API','React hook form'],
        links: {
            github: 'https://github.com/XJloTT4eH9l/PickFilm',
            deploy: 'https://pick-film.vercel.app/'
        }
    },
    {
        id: 3,
        title: 'Anywhere Pizza',
        img: [anywherePizza],
        description: 'Anywhere Pizza is web application to pick and order pizzas',
        tools: ['React','React context','Javasript','SCSS','Rest API'],
        links: {
            github: 'https://github.com/XJloTT4eH9l/anywhere-pizza',
            deploy: 'https://xjlott4eh9l.github.io/anywhere-pizza/'
        }
    },
    {
        id: 4,
        title: 'Concrete Creations (ZDSK)',
        img: [concrete],
        description: 'Website for selling concrete creations',
        tools: ['HTML','SCSS','Javasript','gulp'],
        links: {
            github: 'https://github.com/XJloTT4eH9l/concrete-creations',
            deploy: 'https://xjlott4eh9l.github.io/concrete-creations/'
        }
    },
    {
        id: 5,
        title: 'Meeeting',
        img: [meeting],
        description: 'Website for online conference application',
        tools: ['HTML','SCSS','Javasript','gulp'],
        links: {
            github: 'https://github.com/XJloTT4eH9l/conference',
            deploy: 'https://xjlott4eh9l.github.io/conference/'
        }
    },
    {
        id: 6,
        title: 'RemHol',
        img: [freezer],
        description: 'Website for calling a freezer repair master',
        tools: ['HTML','SCSS','Javasript','gulp'],
        links: {
            github: null,
            deploy: 'http://rem-hol.com/refrigerator-repair/'
        }
    }
]