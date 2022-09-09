

export default function Projects({title, type, img, description, techs}) {
    
    return(
        <section className='project-card'>
            <div className="project-header">
                <h3>{title}</h3>
                <p>{type}</p>
            </div>
            <img src={img} alt="" />
            <p className="project-desc">{description}</p>
            <h4>Technologies used:</h4>
            <div className="project-techs">
                {
                    techs.map((tech) => <div className="tech-display" key={tech}>{tech}</div>)
                }
            </div>
        </section>
    )
}