import React from 'react'
import styles from '../styles'
import  FaqsToggle from './FaqsToggle'


const Faqs = () => {

  return (
        <div className={`${styles.paddingY} flex-col w-full`}>
          <h2 className={`${styles.heading2} text-center mb-10`}>Preguntas Frecuentes</h2>

            <FaqsToggle title={"Sirve la guia realmente"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nobis pariatur. Rem reiciendis nemo molestiae molestias illo ea, cum dolorum assumenda, sed earum error ipsam provident, iste sunt facere deserunt minus adipisci voluptatum. Nisi nemo temporibus excepturi, animi voluptatibus facilis"} />

            <FaqsToggle title={"Sirve la guia realmente"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nobis pariatur. Rem reiciendis nemo molestiae molestias illo ea, cum dolorum assumenda, sed earum error ipsam provident, iste sunt facere deserunt minus adipisci voluptatum. Nisi nemo temporibus excepturi, animi voluptatibus facilis"} />

        </div>
    )
}

export default Faqs