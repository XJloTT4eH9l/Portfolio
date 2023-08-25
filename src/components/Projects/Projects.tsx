import { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { PortfolioItem } from '../../models'
import './Projects.css';


interface ProjectsProps {
   projectsList:  PortfolioItem[];
}

const Projects:FC<ProjectsProps> = ({ projectsList }) => {
    const [ref, inView] = useInView({threshold: 0.1, triggerOnce: true});
    return (
        <section className="projects" id="projects" ref={ref}>
            <div ref={ref} className={inView ? "container projects__container projects__container--active" : 'container projects__container'}>
                <h2 className="title projects__title">Projects</h2>
                <ul className='projects__list'>
                    {projectsList.map(project => (
                        <li key={project.id} className='projects__item'>
                            <img className='projects__img' src={project.img[0]} alt={project.title} />
                            <div className="projects__inner">
                                <h3 className='projects__heading'>{project.title}</h3>
                                <p className='projects__text'>{project.description}</p>
                                <ul className="projects__tools">
                                    {project.tools.map(tool => (
                                        <li key={tool} className='projects__tool'>{tool}</li>
                                    ))}
                                </ul>
                                <div className="projects__links">
                                    <a target='_blank' href={project.links.deploy} className='projects__link projects__link--red'>Visit site</a>
                                    <a target='_blank' href={project.links.github} className='projects__link projects__link--empty'>Github</a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects