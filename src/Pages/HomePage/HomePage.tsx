import Hero from "../../components/Hero/Hero"
import About from "../../components/About/About"
import Skills from "../../components/Skills/Skills"
import Projects from "../../components/Projects/Projects"
import { portfolio } from "../../data"

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects projectsList={portfolio} />
        </>
    )
}

export default HomePage