import Perfil from '../img/foto.png'
import { useSpring, useSpringRef, useTrail, animated } from 'react-spring'

export default function AboutMe() {
    const revealTrail = useTrail(4, {
        from: { transform: "translateY(-80px)", opacity: 0 },
        to: { transform: "translateY(0px)", opacity: 1 },
        delay: 500,
        config: {
            frequency: 2,
            friction: 40,
            clamp: true
        }
    })

    const children = [
        <img src={Perfil} alt="" />,
        <h3>My name's Ignacio (often called Nacho). I'm studying web development, while looking for my first job.
        </h3>,
        <p>I'm creative, detailist, i offer creating solutions, teamwork, quality, Im electrician technic, fullstack dev, I enjoy arduino, robotics, inforamtics, i like music, friends, and pets</p>
    ]

    return(
        <section className='card about-me'>
            <h2>About Me</h2>
            {
                revealTrail.map((styles, index) => 
                    <animated.div style={styles}>{children[index]}</animated.div>
                )
            }
        </section>
    )
}