import { useEffect, useRef } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'

import DjangoImg from '../img/django.svg'
import GithubImg from '../img/github-bg.svg'
//import GitImg from '../img/django.svg'
import TrelloImg from '../img/trello-bg.svg'
import PsImg from '../img/photoshop-plain.svg'
import npmImg from '../img/npm-bg.svg'

export default function Skills() {
    const titleRef = useRef(null);
    
    useEffect(() => {
        console.log(titleRef.current);
        setTimeout(() => {
            const titleRect = titleRef.current.getBoundingClientRect()
            window.scrollTo(0, titleRect.top + window.scrollY - 80)
        }, 750);
    }, [])
    
    const titleSpring = useSpring({
        from: { transform: "translateY(-80px)", opacity: 0 },
        to: { transform: "translateY(0px)", opacity: 1 },
        delay: 0,
    })
    
    const children = [
        <h3>Frontend</h3>,
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
            <div className='skill-img undersize' data-hover="JavaScript">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript"/>
            </div>
            <div className='skill-img' data-hover="React">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react"/>
            </div>
        </div>,
        <h3>Backend</h3>,
        <div className="skills-container">
            <div className='skill-img' data-hover="Python">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python"/>
            </div>
            <div className='skill-img' data-hover="NodeJS">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs"/>
            </div>
            <div className='skill-img' data-hover="Django">
                <img src={DjangoImg} alt="django"/>
            </div>
        
        </div>,
        <h3>Databases</h3>,
        <div className="skills-container">
            <div className='skill-img' data-hover="SQLite">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="sqlite"/>
            </div>
            <div className='skill-img' data-hover="MongoDB">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongodb"/>
            </div>
        </div>,
        <h3>Tools</h3>,
        <div className="skills-container">
            <div className='skill-img undersize' data-hover="Figma">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma"/>
            </div>
            <div className='skill-img undersize' data-hover="Photoshop">
                <img src={PsImg} alt="photoshop"/>
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
            <div className='skill-img undersize' data-hover="Trello">
                <img src={TrelloImg} alt="trello"/>
            </div>
        </div>
    ]

    const revealTrail = useTrail(children.length, {
        from: { transform: "translateY(-80px)", opacity: 0 },
        to: { transform: "translateY(0px)", opacity: 1 },
        delay: 750,
        config: {
            frequency: 0.5,
            friction: 40,
            clamp: true
        }
    })

    return (
        <section className="card skills">
            <animated.h2 style={titleSpring} ref={titleRef}>Skills</animated.h2>
            {
                revealTrail.map((styles, index) => 
                    <animated.div key={index} style={styles}>{children[index]}</animated.div>
                )
            }
        </section>
    );
}