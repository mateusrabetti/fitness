import { useState } from 'react'
import './App.css'

export default function App() {

  return (
    <>
      <main> 
        <header>
          <div className='foto-perfil'>
            <img src="" alt="" />
          </div>

          <div>
            <h2>Bem-vindo</h2>
            <p>Mateus, Brasil</p>
          </div>

          <div>
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </header>

        {/* ------------------------------------------------------------------------------------  */}

        <section className='info'>
          <div>
            <h1> Atividades de Hoje</h1>
            <h2>Peso Corporal</h2>
          </div>

          <div className='%'>

          </div>

          <div>
            <h3>1200 kcal</h3>
            <h3>90 bpm</h3>
            <h3>03:00</h3>
          </div>

          <div>
            <p>Calorias Queimadas</p>
            <p>Frequência Cardíaca</p>
            <p>Tempo</p>
          </div>

        </section>


        <section className='categorias'>
          <div>
            <h2></h2>
            <a href="">Mostrar tudo</a>
          </div>

          <div>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </section>



        <section className='celebridades'>
          
        </section>

        <footer>
          
        </footer>
      </main>  
    </>
  )
}

