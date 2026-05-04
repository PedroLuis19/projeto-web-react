
import TrainingDayFolder from './TrainingDayFolder'

import './TrainingOrganization.css'

function History(){
  return (
    <div className="folder-container">
      <div className="day-folder">
        <h2>Domingo</h2>
      <nav>
        <ul className='summary-item'>
          <li>Flexão</li>
          <div className='message-quantity'>x12</div>
          <br/>
          <li>Agachamento unilateral</li>
          <div className='message-quantity'>x8</div>
          <br/>
          <li>Flexão</li>
          <div className='message-quantity'>x10</div>
        </ul>
        <p>14/04/2026</p>
      </nav>
      </div>

      <div className="day-folder">
        <h2>Terça-feira</h2>
      <nav>
        <ul className='summary-item'>
          <li>Flexão</li>
          <div className='message-quantity'>x12</div>
          <br/>
          <li>Agachamento unilateral</li>
          <div className='message-quantity'>x8</div>
          <br/>
          <li>Flexão</li>
          <div className='message-quantity'>x10</div>
        </ul>
        <p>16/04/2026</p>
      </nav>
      </div>

      <div className="day-folder">
        <h2>Quarta-feira</h2>
      <nav>
        <ul className='summary-item'>
          <li>Flexão</li>
          <div className='message-quantity'>x12</div>
          <br/>
          <li>Agachamento unilateral</li>
          <div className='message-quantity'>x8</div>
          <br/>
        </ul>
        <p>17/04/2026</p>
      </nav>
      </div>

    </div>
  )
}

export default History
