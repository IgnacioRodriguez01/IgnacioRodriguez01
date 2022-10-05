import { useEffect, useRef } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'

import Perfil from '../img/profile.png'

export default function AboutMe({lang}) {
    const titleRef = useRef(null);

    const textAboutES = {
        title:"Acerca de mí",
        main:[
        <h3>Mi nombre es Ignacio (también me dicen Nacho). Estoy estudiando desarrollo web, mientras busco mi primer trabajo.</h3>,
        <p>Soy creativo, detallista, ofrezco creación de soluciones, trabajo en equipo, calidad, soy técnico electronico, desarrollador fullstack, disfruto del arduino, la robótica, la informática, me gusta la música, los amigos y las mascotas.</p>
        ]
    }
    const textAboutEN = {
        title:"About Me",
        main:[
        <h3>My name's Ignacio (often called Nacho). I'm studying web development, while looking for my first job.</h3>,
        <p>I'm creative, detailist, i offer creating solutions, teamwork, quality, Im electronics technician, fullstack dev, I enjoy arduino, robotics, inforamtics, i like music, friends, and pets</p>
        ]
    }

    let textLang = lang === "EN" ? textAboutEN : textAboutES;
    
    useEffect(() => {
        console.log(titleRef.current);
        setTimeout(() => {
            const titleRect = titleRef.current.getBoundingClientRect()
            window.scrollTo(0, titleRect.top + window.scrollY - 80)
        }, 750);
    }, [])
    

    const titleSpring = useSpring({
        from: { transform: "translateY(-800px)", opacity: 0 },
        to: { transform: "translateY(0px)", opacity: 1 },
        delay: 0,
    })

    const children = [
        <img src={Perfil} alt="" />,
        ...textLang.main
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
        <section className='card about-me'>
            <animated.h2 style={titleSpring} ref={titleRef} >{textLang.title}</animated.h2>
            {
                revealTrail.map((styles, index) => 
                    <animated.div key={index} style={styles}>{children[index]}</animated.div>
                )
            }
        </section>
    )
}