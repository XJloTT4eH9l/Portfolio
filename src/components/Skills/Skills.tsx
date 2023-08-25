import { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import Photo from '../Photo/Photo'
import skillsImg from '../../assets/skills.jpg'
import decoration from '../../assets/side-decoration-right.png'
import './Skills.css'

const Skills:FC = () => {
    const [ref, inView] = useInView({threshold: 0.5, triggerOnce: true});
    const skills = [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'CSS'},
        {id: 3, title: 'Javascript'},
        {id: 4, title: 'React'},
        {id: 5, title: 'Typescript'},
        {id: 6, title: 'SCSS'},
        {id: 7, title: 'Responsive Design'},
        {id: 8, title: 'Redux'},
        {id: 9, title: 'Git'},
        {id: 10, title: 'Figma'},
        {id: 11, title: 'React-hook-form'},
        {id: 12, title: 'i18-next'},
        {id: 13, title: 'SEO'},
    ]
    return (
       <section className={inView ? "skills skills--active" : "skills"} id='skills' ref={ref}>
        <img className='skills__decoration' src={decoration} alt='decoration'/>
            <div className="container skills__container">
                <div className="skills__content">
                    <h2 className="title">Skills</h2>
                    <p className="text skills__text">I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.</p>
                    <ul className="skills__list">
                        {skills.map(skill => (
                            <li key={skill.id} className='skills__item'>{skill.title}</li>
                        ))}
                    </ul>
                </div>
                <Photo image={skillsImg} className='photo__decoration--right' />
            </div>
       </section>
    )
}

export default Skills;