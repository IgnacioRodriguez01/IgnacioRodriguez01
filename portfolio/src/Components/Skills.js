import Perfil from '../img/foto.png'

export default function Skills() {
    return (
        <section className="card skills">
            <h2>Skills</h2>
            <h3>Frontend</h3>
            <div className="skills-container">
                <div className='skill-img' data-hover="HTML5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html5"/>                    
                </div>
                <div className='skill-img' data-hover="CSS3">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css3"/>
                </div>
                <div className='skill-img' data-hover="Bootstrap">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap"/>
                </div>
                <div className='skill-img' data-hover="TailwindCSS">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwindcss"/>
                </div>
                <div className='skill-img' data-hover="JavaScript">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript"/>
                </div>
                <div className='skill-img' data-hover="React">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react"/>
                </div>
            </div>
            <h3>Backend</h3>
            <div className="skills-container">
                <div className='skill-img' data-hover="Python">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python"/>
                </div>
                <div className='skill-img' data-hover="NodeJS">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs"/>
                </div>
            </div>
            <h3>Databases</h3>
            <div className="skills-container">
                <div className='skill-img' data-hover="SQLite">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="sqlite"/>
                </div>
                <div className='skill-img' data-hover="MongoDB">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongodb"/>
                </div>
            </div>
            <h3>Tools</h3>
            <div className="skills-container">
                <div className='skill-img' data-hover="Figma">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma"/>
                </div>
                <div className='skill-img' data-hover="Photoshop">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="photoshop"/>
                </div>
                <div className='skill-img' data-hover="VSCode">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode"/>
                </div>
                <div className='skill-img' data-hover="Git">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git"/>
                </div>
                <div className='skill-img' data-hover="GitHub">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github"/>
                </div>
                <div className='skill-img' data-hover="npm">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm"/>
                </div>
                <div className='skill-img' data-hover="Trello">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt="trello"/>
                </div>
            </div>
        </section>
    );
}