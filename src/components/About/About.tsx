import { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import Photo from '../Photo/Photo';
import myPhoto from '../../assets/myPhoto.png'
import './About.css';

const About:FC = () => {
    const [ref, inView] = useInView({threshold: 0.4, triggerOnce: true});
    return (
        <section className={inView ? "about about--active" : "about"} id='about' ref={ref}>
            <div className="container about__container">
                <Photo image={myPhoto} className='photo__decoration--left' />
                <div className="about__content">
                    <h2 className='title'>About me</h2>
                    <p className='text'>My name is Reka Andrew, I'm a front-end developer. I hold a bachelor's in automation and computer-integrated technologies from National Aviation University, currently finishing my master's. I specialize in crafting successful websites and applications. Explore my work in the Projects section.</p>
                    <a 
                    href='https://drive.google.com/file/d/1fytFQhAvNDbpE-qOoVImphqIHQZQLWGm/view?usp=sharing' 
                    target='_blank'
                    className='about__link'
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About