import { useEffect, useRef } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'

import ProjectCard from './ProjectCard'

import ProjectImg from '../img/homebanking.jpg'

export default function Projects() {
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
        <ProjectCard 
            title='Homebanking'
            type='👥 Group project'
            img={ProjectImg}
            description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, optio corrupti aperiam architecto libero reprehenderit alias explicabo magnam perferendis. Dolor perferendis nulla nostrum sapiente consequuntur ipsa dolorem exercitationem est alias?'
            techs={['Javascript', 'Bootstrap', 'Django', 'SQLite']}
        />,
        <ProjectCard 
            title='Homebanking'
            type='👥 Group project'
            img={ProjectImg}
            description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, optio corrupti aperiam architecto libero reprehenderit alias explicabo magnam perferendis. Dolor perferendis nulla nostrum sapiente consequuntur ipsa dolorem exercitationem est alias?'
            techs={['Javascript', 'Bootstrap', 'Django', 'SQLite']}
        />
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

    return(
        <section className='card projects'>
            <animated.h2 style={titleSpring} ref={titleRef} >Projects</animated.h2>
            {
                revealTrail.map((styles, index) => 
                    <animated.div key={index} style={styles}>{children[index]}</animated.div>
                )
            }

        </section>
    )
}