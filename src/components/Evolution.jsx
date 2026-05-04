import './Evolution.css'

function Evolution() {
  return (
    <div className='general-container'>
      <div className="chart-container">
        <div className="staircase-wrapper">
          
          {/* Degrau 1 - Concluído */}
          <div className="step-bar completed" style={{ height: '20%' }}>
            <span className="step-label">12/05/2026</span>
            <div className="step-content">✓</div>
          </div>

          {/* Degrau 2 - Concluído */}
          <div className="step-bar completed" style={{ height: '40%' }}>
            <span className="step-label">12/05/2026</span>
            <div className="step-content">✓</div>
          </div>

          {/* Degrau 3 - Ativo (Onde o usuário está) */}
          <div className="step-bar active" style={{ height: '60%' }}>
            <span className="step-label">12/05/2026</span>
            <div className="step-content">3</div>
          </div>

        </div>
        <div className="base-line"></div>
      </div>
      <h1 className='message'>Você concluiu 3 exercícios hoje</h1>
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
      </nav>
    </div>
  )
}

export default Evolution