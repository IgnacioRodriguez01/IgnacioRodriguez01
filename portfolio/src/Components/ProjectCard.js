

export default function ProjectCard({title, url, type, finished, img, description, techstitle, techs}) {
    
    return(
        <section className={'project-card' + (finished ? '' : ' wip')}>
            <div className="project-header">
                <h3>{title}</h3>
                <p>{type}</p>
            </div>
            <a href={url} target="_blank" style={{pointerEvents: finished ? 'auto' : 'none'}}>
                <img src={img} alt="" />
            </a>
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