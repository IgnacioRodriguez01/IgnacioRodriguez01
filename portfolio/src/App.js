import { Fragment, useState, useRef, useEffect, useReducer } from 'react'
import { useSpring, useSpringRef, useChain, animated } from "react-spring";

import AboutMeCL from './Components/AboutMeCL.js'
import AboutMe from './Components/AboutMe.js'
import SkillsCL from './Components/SkillsCL.js'
import Skills from './Components/Skills.js'
import ProjectsCL from './Components/ProjectsCL.js'
import Projects from './Components/Projects.js'
import Contact from './Components/Contact.js'

import logo from './img/logo.png'

function App() {
    const aboutPage = useRef(null);
    const skillsPage = useRef(null);
    const projectsPage = useRef(null);
    const contactSection = useRef(null);

    /*
        The pages array has the info of the card's state.
        In its [0] element will have the page that is in its code form,
        and from its [1] element to the end will be the hidden pages.
    */
    const initialPages = { 
        pages: [aboutPage, skillsPage, projectsPage, contactSection] 
    };
    function pagesReducer(state, action) {
        if(action.type === 'next') {
            return  { pages: state.pages.slice(1) }
        }
    }
    const [state, dispatch] = useReducer(pagesReducer, initialPages);
    const pages = state.pages

    /* Scroll to the top at start and retrieve or initialize lang*/
    useEffect(() => {
        window.scroll(0,0)

        if (localStorage.getItem('lang')) {
            setLang(localStorage.getItem('lang'));
        } else {
            localStorage.setItem('lang', lang);
        }
    }, [])

    /* Language toggle handling */
    const languages = ["ES", "EN"]
    const [lang, setLang] = useState(languages[0]);

    function toggleLang() {
        lang === languages[0] ? setLang(languages[1]) : setLang(languages[0]);
        localStorage.setItem('lang', lang); //Problem
        //window.location.reload();
    }

    useEffect(() => {
        
    }, [lang])

    /* Main lang */
    const textMainES = {
        title:"Hola, soy Ignacio Rodriguez",
        subtitle:"Desarrolador Web de Buenos Aires, Argentina",
        nav:{
            about:"Sobre Mí",
            skills:"Habilidades",
            proyects:"Proyectos",
            contact:"Contacto"
        }
    }
    const textMainEN = {
        title:"Hi, I'm Ignacio Rodriguez",
        subtitle:"Web developer based in Buenos Aires, Argentina",
        nav:{
            about:"About",
            skills:"Skills",
            proyects:"Work",
            contact:"Contact"
        }
    }

    let textLang = lang === "EN" ? textMainEN : textMainES;

    /* Dark/Light */
    function toggleDark() {
        const body = document.querySelector('body');
        body.classList.toggle('light');
    }
    
    /* Nav Utility */
    function toggleNav(close) {
        //Note: Replace querySelector
        const nav = document.querySelector('.menu');
        const button = document.querySelector('.nav-burger');
        nav.classList.toggle('open');
        button.classList.toggle('open');
    }

    /* Helper for rendering pages */
    function notVisible(page) {
        return !pages.slice(1).some((item) => item === page);
    }

    /* Springs */
    const titleSpringRef = useSpringRef();
    const titleSpring = useSpring({
        ref: titleSpringRef,
        from: { transform: "translateY(-80px)", opacity: 0 },
        to: { transform: "translateY(0px)", opacity: 1 },
        delay: 500,
        config: {
            friction: 40,
            clamp: true
        },
    });

    const revealSpringRef = useSpringRef();
    const revealSpring = useSpring({ 
        ref: revealSpringRef,
        from: {opacity: 0},
        to: {opacity: 1},
    })

    const revealSlowSpringRef = useSpringRef();
    const revealSlowSpring = useSpring({ 
        ref: revealSlowSpringRef,
        from: {visibility: 'hidden', opacity: 0},
        to: {visibility: 'visible', opacity: 1},
        config: {
            friction: 150,
        }
    })

    const arrowSpringRef = useSpringRef();
    const arrowSpring = useSpring({
        ref: arrowSpringRef,
        loop: {
             reverse: true
        },
        reset: true,
        from: { transform: "translateY(-20px)"},
        to: { transform: "translateY(0px)"},
        config: {
            clamp: true,
            frequency: 0.8,
            damping: 1
        },
    });
    
    /* Front page chain */
    useChain([titleSpringRef, revealSpringRef, revealSlowSpringRef, arrowSpringRef])

    return (
        <Fragment>

            <header>
                <nav className='menu '>
                    <a className="menu-logo" href="#0">
                        <img src={logo} alt="profile-pic"/>
                    </a>
                    <div className='nav-burger' onClick={() => toggleNav()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="#1" className={notVisible(aboutPage) ? '' : 'disabled-menu'}>{textLang.nav.about}</a>
                    <a href="#2" className={notVisible(skillsPage) ? '' : 'disabled-menu'}>{textLang.nav.skills}</a>
                    <a href="#3" className={notVisible(projectsPage) ? '' : 'disabled-menu'}>{textLang.nav.proyects}</a>
                    <a href="#4" className={notVisible(contactSection) ? '' : 'disabled-menu'}>{textLang.nav.contact}</a>
                </nav>
            </header>

            <div className='front-page-gradient'></div>
            <div className='front-page-mask-blob'>
                <animated.svg style={revealSlowSpring} id='blob' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.8,-51.3C56,-42,64.5,-27.4,69.3,-10.7C74,6,75,25,66.8,38C58.6,51.1,41.2,58.3,23.9,63.9C6.5,69.4,-10.8,73.4,-24,67.8C-37.2,62.2,-46.2,47,-57.3,31.3C-68.5,15.7,-81.8,-0.6,-79.3,-13.9C-76.9,-27.3,-58.8,-37.9,-42.9,-46.5C-27.1,-55.1,-13.5,-61.9,1.1,-63.2C15.8,-64.6,31.6,-60.5,43.8,-51.3Z" transform="translate(100 100)" />
                </animated.svg>
            </div>
            <div className='front-page-color'></div>
            
            <div className='page front-page' id='0'>
                <nav className='lang-mode'> 
                    <span onClick={() => toggleLang()}>{lang}</span>
                    <span onClick={toggleDark}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </span>
                </nav>
                <div className='wrapper'>
                    <animated.h1 style={titleSpring}>{textLang.title}</animated.h1>
                    <animated.p style={revealSpring}>{textLang.subtitle}</animated.p>
                </div>
                <animated.a href='#1' className="chevron-cont" style={revealSlowSpring}>
                    <animated.svg style={arrowSpring} className='chevron' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </animated.svg>
                </animated.a>

            </div>

            {
                notVisible(aboutPage) && //visibility
                <div className='page' id='1' ref={aboutPage}>
                    {
                        pages[0] === aboutPage ? //code/run
                        <AboutMeCL pages={pages} dispatch={dispatch} lang={lang}/> :
                        <AboutMe lang={lang}/>
                    }
                </div>
            }
            {
                notVisible(skillsPage) && //visibility
                <div className='page' id='2' ref={skillsPage}>
                    {
                        pages[0] === skillsPage ? //code/run
                        <SkillsCL pages={pages} dispatch={dispatch} lang={lang}/> :
                        <Skills lang={lang}/>
                    }
                    
                </div>
            }
            {
                notVisible(projectsPage) && //visibility
                <div className='page' id='3' ref={projectsPage}>
                    {
                        pages[0] === projectsPage ? //code/run (check for undefined)
                        <ProjectsCL pages={pages} dispatch={dispatch} lang={lang}/> :
                        <Projects lang={lang}/>
                    }
                </div>
            }
            {
                notVisible(contactSection) && //visibility
                <Contact ref={contactSection} lang={lang}/>
            }

        </Fragment>
    );
}

export default App;
