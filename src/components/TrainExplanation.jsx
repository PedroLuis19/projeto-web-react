
import './TrainExplanation.css'

function TrainExplanation() {
  return (
    <div>
        <h1 className='title'>Parte superior</h1>
        <div className='section'>
          <h2>Braços</h2>
          <video className='video' src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-chinup-front.mp4" autoplay="" playsinline="" loop=""></video>
          <ol className='numerated-instruction'>
            <li>Segure a barra com as mãos afastadas na largura dos ombros e com uma pegada supinada (palmas voltadas para você).</li>
            <br/>
            <li>Com o corpo pendurado e os braços totalmente estendidos, puxe-se para cima até que seu queixo ultrapasse a barra.</li>
            <br/>
            <li>Retorne lentamente à posição inicial. Repita.</li>
          </ol>

          <h2>Peitoral</h2>
          <h2>Abdomen</h2>
          <h2>Costas</h2>
        </div>
        
        <h1 className='title'>Parte inferior</h1>
        <div className='section'>
          <h2></h2>
          <h2>Coxa</h2>
          <h2>Glúteo</h2>
          <h2>Panturrilha</h2>
        </div>
    </div>
  )
}

export default TrainExplanation