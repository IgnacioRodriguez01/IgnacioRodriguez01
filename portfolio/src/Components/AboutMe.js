import { Fragment, useEffect, useRef } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'

import Perfil from '../img/profile.png'

export default function AboutMe({lang}) {
    const titleRef = useRef(null);

    const textAboutES = {
        title:"Sobre Mí",
        main:[
            <h3>Mi nombre es Ignacio (también me dicen Nacho). Estoy estudiando desarrollo web, mientras busco mi primer trabajo.</h3>,
            <p>Estoy principalmente enfocado en las áreas del Backend y Frontend, pero soy más hábil en esta última.
            </p>,
            <p>
            Me gusta brindar calidad en lo que hago. Soy creativo y atento al detalle, buscando el mejor resultado posible.
            </p>,
            <p>
            Siempre busco articular el trabajo en equipo, tratando de sincronizarme con mi equipo.
            </p>,
        ],
        hobbies:[
            <h3>Me considero un apasionado de la programación y de la búsqueda de soluciones.</h3>,
            <p>Mi afán hacia este rubro comenzó con proyectos en mi trayecto de la secundaria, desarrollando pequeños proyectos o prototipos como hobby con Arduino, hasta involucrarme en proyectos más grandes con mi escuela. 
            </p>,
            <p>En mi tiempo libre disfruto de realizar proyectos utilizando mis habilidades técnicas y/o con la programación como herramienta.
            </p>
        ]
    }
    const textAboutEN = {
        title:"About Me",
        main:[
            <h3>My name's Ignacio (often called Nacho). I'm studying web development, while looking for my first job.</h3>,
            <p>I'm mainly focused on the areas of the Backend and the Frontend, but I'm more competent in the last one.
            </p>,
            <p>
            I like to bring quality in what I do. I'm creative and attentive to detail, looking for the best posible outcome.
            </p>,
            <p>
            I always look for articulating the teamwork, trying to synchronize with my team.
            </p>
        ],
        hobbies:[
            <h3>I consider myself passionate about programming and the search for solutions.</h3>,
            <p>My quest in this sector started with projects in my journey through the high school, starting with small projects or prototipes as a hobby with an Arduino, to involving myself in bigger proyects with my school. 
            </p>,
            <p>In my spare time I enjoy doing projects using my technical habilities and/or with programming as a tool.
            </p>
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

    function useCreateTrail(arr) {
        return useTrail(arr.length, {
            from: { transform: "translateY(-80px)", opacity: 0 },
            to: { transform: "translateY(0px)", opacity: 1 },
            delay: 750,
            config: {
                frequency: 0.5,
                friction: 40,
                clamp: true
            }
        })
    }
    /* const revealTrail = useTrail(children.length, {
        from: { transform: "translateY(-80px)", opacity: 0 },
        to: { transform: "translateY(0px)", opacity: 1 },
        delay: 750,
        config: {
            frequency: 0.5,
            friction: 40,
            clamp: true
        }
    }) */

    return(
        <Fragment>
            <section className='card about-me'>
                <animated.h2 style={titleSpring} ref={titleRef} >{textLang.title}</animated.h2>
                {
                    useCreateTrail(children).map((styles, index) => 
                        <animated.div key={index} style={styles}>{children[index]}</animated.div>
                    )
                }
            </section>
            <section className='card about-me'>
            {
                useCreateTrail(textLang.hobbies).map((styles, index) => 
                    <animated.div key={index} style={styles}>{textLang.hobbies[index]}</animated.div>
                )
            }
            </section>
        </Fragment>
    )
}