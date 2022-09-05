import Perfil from '../img/foto.png'

export default function AboutMe() {
    return(
        <section className='card about-me'>
            <h2>About Me</h2>
            <img src={Perfil} alt="" />
            <h3>My name's Ignacio (often called Nacho). I'm studying web development, while looking for my first job.
            </h3>
            <p>I'm creative, detailist, i offer creating solutions, teamwork, quality, Im electrician technic, fullstack dev, I enjoy arduino, robotics, inforamtics, i like music, friends, and pets</p>
        </section>
    )
}