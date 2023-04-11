import { useEffect, useRef } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'

import ProjectCard from './ProjectCard'

import HomebankingImg from '../img/homebanking.jpg'
import PatientsImg from '../img/patients.jpg'
import CRMImg from '../img/crm.jpg'

export default function Projects({lang}) {
    const titleRef = useRef(null);

    const textProjectsES = {
        title:"Proyectos",
        techstitle:"Tecnologias usadas:",
        types:{
            group:"👥 Proyecto en grupo",
            course:"📚 Proyecto de curso",
            wip:"👨‍💻 En progreso",
            mant:"🚧 En mantenimiento",
        },
        projects:{
            homebanking:"Plantilla de aplicación de Homebanking, incluyendo registro de usuarios, validación de cheques, etc. Desarrollada durante el curso Fullstack Developer del ITBA.",
            crm:"Herramienta para administración de clientes, que permite a los usuarios introducir y llevar registro de sus clientes, siguiendo el modelo CRUD. Creada en el curso de Javascript Moderno en Udemy",
            patientsadmin:"App para registrar pacientes con registro de usuarios, autenticación, control de cuentas, y manejo de sesiones. Creada en el curso de Javascript Moderno en Udemy",
        }
    }
    const textProjectsEN = {
        title:"Projects",
        techstitle:"Technologies used:",
        types:{
            group:"👥 Group project",
            course:"📚 Course project",
            wip:"👨‍💻 In progress",
            mant:"🚧 In manteinance",
        },
        projects:{
            homebanking:"Homebanking app template including user registration, checks validation, etc. Developed during ITBA's Fullstack course.",
            crm:"Client management tool that allows users introduce and take note of clients, following basic CRUD principles. Made when studying Modern Javascript in Udemy.",
            patientsadmin:"App for registering patients with user registration, authentication, accounts and sessions management. Made when studying Modern Javascript in Udemy.",
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
            title='Patients Admin'
            url='https://adminpacientesvet.vercel.app/'
            type={textLang.types.wip}
            finished={true}
            img={PatientsImg}
            description={textLang.projects.patientsadmin}
            techstitle={textLang.techstitle}
            techs={['React', 'Node', 'Express', 'MongoDB', 'TailwindCSS']}
        />,
        <ProjectCard 
            title='Homebanking'
            url=''
            type={textLang.types.mant}
            finished={false}
            img={HomebankingImg}
            description={textLang.projects.homebanking}
            techstitle={textLang.techstitle}
            techs={['Javascript', 'Python', 'Bootstrap', 'Django', 'SQLite']}
        />,
        <ProjectCard 
            title='CRM'
            url='https://ignaciorodriguez01.github.io/crm-static/'
            type={textLang.types.course}
            finished={true}
            img={CRMImg}
            description={textLang.projects.crm}
            techstitle={textLang.techstitle}
            techs={['Javascript', 'HTML5', 'TailwindCSS']}
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