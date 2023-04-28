import React from 'react'
import portfolio from "../../../assets/portfolio.png"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'>HOLA MI NOMBRE ES: <span>EID ALI </span> </h3>
        <span className='job'>Portafolio para presentacion de Seminario</span>
        <span className='text'>Junior<br /> innovador para crear <br />  paginas web.</span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Conéctate conmigo</motion.a>
        <div
          className="web"

        >
          Desarrollador web
        </div>
        <div
          className="ui"
        >
          Diseñador UI
        </div>
        <div
          className="freelance"
        >
          Ocupaciones
        </div>
      </div>
    </motion.div>
  )
}

export default Home