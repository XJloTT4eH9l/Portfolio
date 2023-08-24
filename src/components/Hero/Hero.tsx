import TypewriterEffect from '../TypewritingEffect/TypewritingEffect';
import './Hero.css';

const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="hero__inner">
                    <h1 className='hero__title'>
                        <TypewriterEffect 
                            text='Hello, I`m Reka Andrew' 
                            speed={100} 
                        />
                    </h1>
                    <p className='hero__text'>
                    A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                    </p>
                    <a className='hero__link' href='#projects'>View Projects</a>
                </div>
            </section>
        </>
    )
}

export default Hero