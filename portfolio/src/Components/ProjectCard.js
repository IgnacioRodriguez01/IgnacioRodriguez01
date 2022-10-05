

export default function ProjectCard({title, type, img, description, techstitle, techs}) {
    
    return(
        <section className='project-card'>
            <div className="project-header">
                <h3>{title}</h3>
                <p>{type}</p>
            </div>
            <img src={img} alt="" />
            <p className="project-desc">{description}</p>
            <h4>{techstitle}</h4>
            <div className="project-techs">
                {
                    techs.map((tech) => <div className="tech-display" key={tech}>{tech}</div>)
                }
            </div>
        </section>
    )
}