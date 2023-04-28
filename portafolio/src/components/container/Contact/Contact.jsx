import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>contactanos</span>
            <h1>contactame</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Dudas que te tienes</h3>
          <p className='contact_text'>Cualquier duda que tienes puedes contactarnos con mi persona ya sea por correo oh mandandome un mensaje al numero que dejo publicado, en caso que vivas en mi ciudad buscame en la direccion que te dejo de igual manera </p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Contáctanos</h3>
          <div className="row">
            <input type="text" placeholder='NOMBRE' />
            <input type="text" placeholder='APELLIDO'/>
          </div>
          <div className="row">
            <input type="text" placeholder='TELEFONO' />
            <input type="email" placeholder='CORREO' />
          </div>
          <div className="row">
            <textarea placeholder='MENSAJE'></textarea>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
            
          >
          <a href="https://www.facebook.com/eidali.huarachichoque">ENVIAR</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact