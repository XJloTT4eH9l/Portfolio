import Photo from '../Photo/Photo';
import myPhoto from '../../assets/myPhoto.png'
import './About.css';

const About = () => {
    return (
        <section className="about" id='about'>
            <div className="container about__container">
                <Photo image={myPhoto} className='photo__decoration--left' />
                <div className="about__content">
                    <h2 className='title'>About me</h2>
                    <p className='text'>My name is Reka Andrew, I'm a front-end developer. I hold a bachelor's in automation and computer-integrated technologies from National Aviation University, currently finishing my master's. I specialize in crafting successful websites and applications. Explore my work in the Projects section.</p>
                    <a 
                    href='https://drive.google.com/file/d/18NYd3nO1JwV55fpImpwCIp_KxmpbbRDj/view?usp=sharing' 
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