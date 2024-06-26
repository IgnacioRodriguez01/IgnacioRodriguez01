import { Fragment, useState, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring';

import Title from './Title.js'

export default function SkillsCL({pages, dispatch, lang}) {
    
    const [run, setRun] = useState(false);
    
    /* SkillsCL lang */
    const textSkillsCLES = {
        title:"Habilidades",
        run:"Ejecutar"
    }
    const textSkillsCLEN = {
        title:"Skills",
        run:"Run"
    }

    let textLang = lang === "EN" ? textSkillsCLEN : textSkillsCLES;


    useEffect(() => {
        if(run) {
            setTimeout(() => {
                dispatch({type: 'next'})
            }, getRandom(250, 1750));
        }
    }, [run])
    
    /* Give the feel of actually running code */
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }      

    const runSpring = useSpring({
        loop: {
            reverse: true
        },
        from: {transform: "scale(1)"},
        to: {transform: "scale(1.1)"},
        delay: 5000,
        config: {
            frequency: 1.5,
            mass: 10,
            tension: 150,
            friction: 10,
            damping: 0
        }
    })

    return(
        <section className='card card-code'>
            <Title title={textLang.title}/>
            {   
                run &&
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div> 
            }
            <pre className={run ? "transparent" : ""}>
                <code>
                    <span className="gray"><span className="lavender">function</span> <span className="cyan">skills</span><span className="yellow">{"("}</span><span className="yellow">{") {"}</span></span>
                    <span className="lavender">return {"{"}</span>
                    <span className="gray">    frontend: <span className="cyan">{"["}</span></span>
                    <span className="green">        'html', 'css',</span>
                    <span className="green">        'bootstrap',</span> 
                    <span className="green">        'javascript', 'react'</span> 
                    <span className="gray">    <span className="cyan">{"]"}</span>,</span> 
                    <span className="gray">    backend: <span className="cyan">{"["}</span></span>
                    <span className="green">        'python', 'node'</span>
                    <span className="gray">    <span className="cyan">{"]"}</span>,</span> 
                    <span className="gray">    databases: <span className="cyan">{"["}</span></span>
                    <span className="green">        'mongodb', 'hazelcast',</span>
                    <span className="green">        'mysql'</span>
                    <span className="gray">    <span className="cyan">{"]"}</span>,</span> 
                    <span className="gray">    tools: <span className="cyan">{"["}</span></span>
                    <span className="green">        'figma', 'photoshop',</span>
                    <span className="green">        'vscode', 'git',</span> 
                    <span className="green">        'github', 'jira',</span> 
                    <span className="green">        'trello', 'postman'</span> 
                    <span className="gray">    <span className="cyan">{"]"}</span>,</span> 
                    
                    <span className="gray"><span className="yellow">{"}"}</span>;</span>
                </code>
            </pre>
            <animated.div style={runSpring} className='run' onClick={() => setRun(true)}>
                <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.738753 0.114911L9.82807 5.1532L0.920123 10.5056L0.738753 0.114911Z"/>
                </svg>
                {textLang.run}
            </animated.div>
        </section>
    )
}