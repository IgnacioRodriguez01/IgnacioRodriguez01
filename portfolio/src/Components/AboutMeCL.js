import { Fragment, useState, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring';

import Title from './Title.js'

export default function AboutMeCL({pages, dispatch, lang}) {
    
    const [run, setRun] = useState(false);
    
    /* AboutCL lang */
    const textAboutCLES = {
        title:"Sobre Mí",
        run:"Ejecutar"
    }
    const textAboutCLEN = {
        title:"About Me",
        run:"Run"
    }

    let textLang = lang === "EN" ? textAboutCLEN : textAboutCLES;

    /* Call the reducer and its effects in App */
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
                    <span className="gray"><span className="lavender">function</span> <span className="cyan">about</span><span className="yellow">{"("}</span>my, I<span className="yellow">{") {"}</span></span>
                    <span className="gray"><span className="red">    I.am</span> = <span className="lavender">{"["}</span><span className="green">'creative', 'detailist',</span></span>
                    <span className="gray">    <span className="green">'proactive'</span><span className="lavender">{"]"}</span>;</span>
                    <span className="gray">    <span className="red">I.offer</span> = <span className="lavender">{"["}</span></span>
                    <span className="green">        'creating solutions',</span>
                    <span className="green">        'teamwork',</span> 
                    <span className="green">        'quality'</span> 
                    <span className="gray">    <span className="lavender">{"]"}</span>;</span> 
                    <span className="gray"><span className="red">    my.education</span> = <span className="lavender">{"["}</span><span className="green">'electronics',</span></span> 
                    <span className="gray">    <span className="green">'fullstack'</span><span className="lavender">{"]"}</span>;</span>
                    <span className="gray"><span className="red">    my.extras</span> = <span className="lavender">{"{"}</span></span> 
                    <span className="gray">        hobbies: <span className="cyan">{"["}</span><span className="green">'arduino',</span></span>
                    <span className="gray">        <span className="green">'robotics','informatics'</span><span className="cyan">{"]"}</span>,</span>
                    <span className="gray">        likes: <span className="cyan">{"["}<span className="green">'music','pets','friends'</span>{"]"}</span></span>
                    <span className="gray">    <span className="lavender">{"}"}</span>;</span>
                    <span className="gray">    <span className="cyan">print</span><span className="lavender">{"("}<span className="gray">me, offers, education, extras</span>{")"}</span>;</span>
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
/* 
function about(my, I) {
    I.am = ['creative', 'detailist',
'proactive'];
    I.offer = [
        'creating solutions',
        'teamwork',
        'quality'
    ];
    my.education = ['electronics', 'fullstack'];
    my.extras = {
        hobbies: ['arduino', 'robotics','informatics'],
        likes: ['music','pets','friends']
    };


    print(me, offers, education, extras);
};
 */