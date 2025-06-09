import tutorialData from "../data/data.tsx";

type IndicatorProps = {
  step: number;
  selectedStep: (index: number) => void;
};

export default function Indicator({ step, selectedStep }: IndicatorProps) {
  const indicators = tutorialData.map((_, index) => (
    <button
      key={index}
      className={`${index === step ? "active" : ""} dot`}
      onClick={() => selectedStep(index)}
    ></button>
  ));

  return <div className="tracker">{indicators}</div>;
}
