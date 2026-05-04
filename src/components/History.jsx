
import TrainingDayFolder from './TrainingDayFolder'

import './TrainingOrganization.css'

function History(){
  return (
    <div className="folder-container">
      <div className="day-folder">
        <h2>Domingo</h2>
        <TrainingDayFolder/>
      </div>

      <div className="day-folder">
        <h2>Segunda-feira</h2>
        <TrainingDayFolder/>
      </div>

      <div className="day-folder">
        <h2>Terça-feira</h2>
        <TrainingDayFolder/>
      </div>

      <div className="day-folder">
        <h2>Quarta-feira</h2>
        <TrainingDayFolder/>
      </div>

      <div className="day-folder">
        <h2>Quinta-feira</h2>
        <TrainingDayFolder/>
      </div>

      <div className="day-folder">
        <h2>Sexta-feira</h2>
        <TrainingDayFolder/>
      </div>

      <div className="day-folder">
        <h2>Sábado</h2>
        <TrainingDayFolder/>
      </div>
    </div>
  )
}

export default History
