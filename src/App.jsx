import user from './assets/user.png'
import './App.css'

export default function App() {

  return (
    <>
      <main> 
        <header>
          <div className='perfil'>
            <img src={user} alt="" className='foto-perfil'/>
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
            <a href="">All</a>
            <a href="">Cardio</a>
            <a href="">Weigth</a>
            <a href="">Muscle</a>
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

