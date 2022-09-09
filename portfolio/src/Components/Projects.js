import ProjectCard from './ProjectCard'

import ProjectImg from '../img/homebanking.jpg'

export default function Projects() {
    return(
        <section className='card projects'>
            <h2>Projects</h2>
            <div>
                <ProjectCard 
                    title='Homebanking'
                    type='👥 Group project'
                    img={ProjectImg}
                    description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, optio corrupti aperiam architecto libero reprehenderit alias explicabo magnam perferendis. Dolor perferendis nulla nostrum sapiente consequuntur ipsa dolorem exercitationem est alias?'
                    techs={['Javascript', 'Bootstrap', 'Django', 'SQLite']}
                />
                <ProjectCard 
                    title='Homebanking'
                    type='👥 Group project'
                    img={ProjectImg}
                    description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, optio corrupti aperiam architecto libero reprehenderit alias explicabo magnam perferendis. Dolor perferendis nulla nostrum sapiente consequuntur ipsa dolorem exercitationem est alias?'
                    techs={['Javascript', 'Bootstrap', 'Django', 'SQLite']}
                />
            </div>
        </section>
    )
}