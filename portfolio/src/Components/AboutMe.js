import { Fragment, useEffect, useRef } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'

import Perfil from '../img/profile.png'
import Sumo from '../img/videosumoxc.mp4'
import Brazo from '../img/videobrazoxc.mp4'

export default function AboutMe({lang}) {
    const titleRef = useRef(null);

    const textAboutES = {
        title:"Sobre Mí",
        main:[
            <h3>Mi nombre es Ignacio (también me dicen Nacho). Estoy estudiando desarrollo web, mientras busco mi primer trabajo.</h3>,
            <p>Estoy principalmente enfocado en las áreas del <strong>Frontend</strong> y el <strong>Backend</strong>, con interés sobre DevOps.
            </p>,
            <p>
            Me gusta brindar <strong>calidad</strong> en lo que hago. Soy <strong>creativo y atento al detalle</strong>, buscando el mejor resultado posible. Suelo ver las cosas
            desde afuera para poder brindar una mirada distinta.
            </p>,
            <p>
            Siempre busco articular el trabajo en equipo, tratando de sincronizarme con mi equipo y/o propulsar la coordinación entre todos.
            </p>,
        ],
        hobbies:[
            <h3>Me considero un apasionado de la programación y de la búsqueda de soluciones.</h3>,
            <div className='vid-cont'>
                <video width="auto" height="300" autoPlay loop>
                    <source src={Brazo} type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
                <video width="auto" height="300" autoPlay loop>
                    <source src={Sumo} type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
            </div>,
            <p>Mi afán hacia este rubro comenzó con proyectos en mi trayecto de la secundaria, desarrollando pequeños proyectos o prototipos como hobby con Arduino, hasta involucrarme en proyectos más grandes con mi escuela. 
            </p>,
            <p>Destaco esta etapa porque allí desarrollé mi <strong>pensamiento crítico y lógico</strong>, mi interés por la construcción y <strong>la resolución de problemas</strong>, a la vez estando siempre rodeado de cuestiones ligadas a la programación.
            <br/><br/>Al día de hoy, me encuentro en la busqueda de <strong>nuevos desafíos</strong> a los que afrontar constantemente, con nuevas tecnologías, o proyectos que me pongan a prueba.</p>,
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
            <div className='vid-cont'>
                <video width="auto" height="300" autoPlay loop>
                    <source src={Brazo} type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
                <video width="auto" height="300" autoPlay loop>
                    <source src={Sumo} type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
            </div>,
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