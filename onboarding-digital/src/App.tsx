import './App.css'
import Card from './components/Card.tsx'
import {useState} from 'react'

function App() {

  const [step, setStep] = useState(0)

  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "#4DA1A9",
      image: "meditation.svg"
    },
    {
      title: "Programa projectes propris",
      description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicacío en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: "#D3D4D9",
      image: "programing.svg"
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estreès i l' ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "#F8D167",
      image: "time_management.svg"
    }
  ];


  const currentCardData = tutorialData[step]

  return (
    <>
    <div>
      <strong>{currentCardData.title}</strong>
      <br></br>
      <span>{currentCardData.description}</span>
    </div>
    </>
  )
}

export default App