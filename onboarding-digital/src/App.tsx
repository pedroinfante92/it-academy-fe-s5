import "./App.css";
import { useState } from "react";
import { Card } from "./components/Card.tsx";
import tutorialData from "./data/data.tsx";

export default function App() {
  const [step, setStep] = useState(0);

  const prevStep = () => setStep(step - 1);

  const nextStep = () => setStep(step + 1);

const selectedStep = (index:number) => setStep(index);

  return (
    <Card
      step={step}
      currentCardData={tutorialData[step]}
      cardLength={tutorialData.length}
      prevStep={prevStep}
      nextStep={nextStep}
      selectedStep={selectedStep}
    />
  );
}
