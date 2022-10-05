import { Fragment, useState, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring';

import Title from './Title.js'

export default function ProjectsCL({pages, dispatch, lang}) {
    
    const [run, setRun] = useState(false);
    
    /* ProjectsCL lang */
    const textProjectsCLES = {
        title:"Proyectos",
        run:"Ejecutar"
    }
    const textProjectsCLEN = {
        title:"Projects",
        run:"Run"
    }

    let textLang = lang === "EN" ? textProjectsCLEN : textProjectsCLES;

    
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
                    <span className="gray"><span className="lavender">function</span> <span className="cyan">projects</span><span className="yellow">{"("}</span>ideas<span className="yellow">{") {"}</span></span>
                    <span className="gray">    <span className="lavender">const</span> <span className="yellow">code</span>, <span className="yellow">passion</span>, <span className="yellow">details</span>;</span>
                    <span className="gray">    <span className="red">ideas</span>.<span className="cyan">forEach<span className="lavender">{"("}<span className="gray">idea</span> {"=>"} </span>{"{"}</span></span>
                    <span className="gray">        <span className="lavender">let</span> project =</span>
                    <span className="gray">        idea</span>
                    <span className="gray">        + code</span>
                    <span className="gray">        + passion</span>
                    <span className="gray">        + details;</span>
                    <span className="gray">        </span>
                    <span className="gray">        <span className="lavender">return</span> project;</span>
                    <span className="gray">    <span className="cyan">{"}"}</span><span className="lavender">{")"}</span>;</span>
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