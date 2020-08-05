import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/49042314?s=460&u=21f369ee98a5c3f96c49a20bfd5316fe56a58aa1&v=4" alt="Ginholuca"/>
            <div>
              <strong>Ginholuca</strong>
              <span>Matemática</span>
            </div>
          </header>

          <p>Learning to love JavaScript. NodeJS, ReactJS and React Native.</p>

          <footer>
            <p>Preço/hora <strong>R$ 50,00</strong></p>
              <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
              </button>
          </footer>
        </article>
  )
}

export default TeacherItem