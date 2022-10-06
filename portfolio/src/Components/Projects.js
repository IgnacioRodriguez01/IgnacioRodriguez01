import { useEffect, useRef } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'

import ProjectCard from './ProjectCard'

import ProjectImg from '../img/homebanking.jpg'

export default function Projects({lang}) {
    const titleRef = useRef(null);

    const textProjectsES = {
        title:"Proyectos",
        techstitle:"Tecnologias usadas:",
        types:{
            group:"👥 Proyecto en grupo",
            course:"Proyecto de curso",
        },
        projects:{
            homebanking:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur maiores repellendus nulla quidem reprehenderit numquam quo cum ullam! Repellendus tempore nam illo cupiditate? Vitae dolor amet totam maxime fugiat!",
        }
    }
    const textProjectsEN = {
        title:"Projects",
        techstitle:"Technologies used:",
        types:{
            group:"👥 Group project",
            course:"Course project",
        },
        projects:{
            homebanking:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur maiores repellendus nulla quidem reprehenderit numquam quo cum ullam! Repellendus tempore nam illo cupiditate? Vitae dolor amet totam maxime fugiat!",
        }
    }

    let textLang = lang === "EN" ? textProjectsEN : textProjectsES;
    
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
            type={textLang.types.group}
            img={ProjectImg}
            description={textLang.projects.homebanking}
            techstitle={textLang.techstitle}
            techs={['Javascript', 'Bootstrap', 'Django', 'SQLite']}
        />,
        <ProjectCard 
            title='Homebanking'
            type={textLang.types.group}
            img={ProjectImg}
            description={textLang.projects.homebanking}
            techstitle={textLang.techstitle}
            techs={['Javascript', 'Bootstrap', 'Django', 'SQLite']}
        />,
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
            <animated.h2 style={titleSpring} ref={titleRef} >{textLang.title}</animated.h2>
            {
                revealTrail.map((styles, index) => 
                    <animated.div key={index} style={styles}>{children[index]}</animated.div>
                )
            }

        </section>
    )
}