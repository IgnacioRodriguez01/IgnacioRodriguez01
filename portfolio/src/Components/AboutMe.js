import { useSpring, useTrail, animated } from 'react-spring'

import Perfil from '../img/profile.png'

export default function AboutMe() {
    const titleSpring = useSpring({
        from: { transform: "translateY(-800px)", opacity: 0 },
        to: { transform: "translateY(0px)", opacity: 1 },
        delay: 0,
    })

    const children = [
        <img src={Perfil} alt="" />,
        <h3>My name's Ignacio (often called Nacho). I'm studying web development, while looking for my first job.
        </h3>,
        <p>I'm creative, detailist, i offer creating solutions, teamwork, quality, Im electrician technic, fullstack dev, I enjoy arduino, robotics, inforamtics, i like music, friends, and pets</p>
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
            <animated.h2 style={titleSpring}>About Me</animated.h2>
            {
                revealTrail.map((styles, index) => 
                    <animated.div style={styles}>{children[index]}</animated.div>
                )
            }
        </section>
    )
}