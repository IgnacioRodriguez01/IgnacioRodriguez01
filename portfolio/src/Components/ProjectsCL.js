import { Fragment } from "react"
import Title from './Title.js'

export default function ProjectsCL({setPageLock}) {
    return(
        <Fragment>
            <Title title='Projects'/>
            <section className='card'>
                <code>
                    <span>{"function about(my, I) {"}</span>
                    <span>&nbsp;{"I.am = ['creative', 'detailist'];"}</span>
                    <span>{"I.offer = ["}</span>
                    <span>{"'creating solutions',"}</span>
                </code>
                <pre></pre>
                <div className='run' onClick={() => setPageLock(null)}>
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.738753 0.114911L9.82807 5.1532L0.920123 10.5056L0.738753 0.114911Z" fill="white"/>
                    </svg>
                    Run
                </div>
            </section>
        </Fragment>
    )
}