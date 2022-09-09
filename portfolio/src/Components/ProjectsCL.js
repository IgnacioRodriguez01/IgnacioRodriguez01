import { Fragment } from "react"
import Title from './Title.js'

export default function ProjectsCL({setPageLock}) {
    return(
        <section className='card card-code'>
            <Title title='Projects'/>
            <pre>
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
            <div className='run' onClick={() => setPageLock(null)}>
                <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.738753 0.114911L9.82807 5.1532L0.920123 10.5056L0.738753 0.114911Z"/>
                </svg>
                Run
            </div>
        </section>
    )
}