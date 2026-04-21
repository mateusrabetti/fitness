import user from './assets/user.png'
import user2 from './assets/user2.png'
import bell from './assets/bell.png'
import house from './assets/house.png'
import status from './assets/chart-column.png'
import img1 from './assets/img2.png'
import './App.css'

export default function App() {
  return (
    <main> 
      <header>
        <div className='perfil-container'>
          <img src={user} alt="Perfil" className='foto-perfil'/>
          <div className='welcome-text'>
            <h2>Bem-vindo</h2>
            <p>Mateus, Brasil</p>
          </div>
        </div>
        <div className='header-icons'>
          <div className="icon-bell">
            <button>
              <img src={bell} alt="" />
            </button>
          </div>
        </div>
      </header>

      <section className='info-card'>
        <div className='info-header'>
          <h1>Atividades de Hoje</h1>
          <p>Peso Corporal</p>
        </div>

        <div className='progress-circle'>
          <div className='circle-content'>
            <strong>20%</strong>
            <span>concluído</span>
          </div>
        </div>

        <div className='stats-grid'>
          <div className='stat-item'>
            <h3>600</h3>
            <p>kcal</p>
            <span>Queimadas</span>
          </div>
          <div className='stat-item'>
            <h3>90</h3>
            <p>bpm</p>
            <span>Frequência</span>
          </div>
          <div className='stat-item'>
            <h3>01:00</h3>
            <p>h</p>
            <span>Tempo</span>
          </div>
        </div>
      </section>

      <section className='categorias'>
        <div className='cat-header'>
          <h2>Categorias</h2>
          <a href="#">Mostrar tudo</a>
        </div>
        <div className='cat-list'>
          <button>All</button>
          <button>Cardio</button>
          <button>Weight</button>
          <button>Muscle</button>
        </div>
      </section>

      <section className='popular'>
        <div className='pop-header'>
          <h2>Popular 🔥</h2>
          <a href="#">Mostrar tudo</a>
        </div>

        <div className='pop-list'>
          <div className='pop-card'>
            <div className='pop-img-container'>
              <img src={img1} alt="Barbell Workout" />
            </div>
            <div className='pop-info'>
              <div className='pop-text'>
                <h3>Barbell</h3>
                <p>15 treinos | 1 hr 3m</p>
              </div>
              <div className='pop-rating'>
                4.5 ⭐
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <footer className='bottom-footer'>
        <button><img src={house} alt="" /></button>
        <button><img src={status} alt="" /></button>
        <button><img src={user2} alt="" /></button>
      </footer>
    </main>  
  )
}
