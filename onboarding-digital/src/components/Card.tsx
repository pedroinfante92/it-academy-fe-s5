import Indicator from "./Indicator";

export interface Props {
  step: number;
  currentCardData: {
    title: string;
    description: string;
    bgColor: string;
    image: string;
  };
  prevStep: () => void;
  nextStep: () => void;
  cardLength: number;
  selectedStep: (index: number) => void;
}

export function Card({
  step,
  currentCardData,
  prevStep,
  nextStep,
  cardLength,
  selectedStep,
}: Props) {
  return (
    <>
      <article className="card-body">
        <header
          className="card-header"
          style={{ backgroundColor: currentCardData.bgColor }}
        >
          <img
            className="card-header_img"
            src={`src/assets/${currentCardData.image}`}
            alt={`image ${step}`}
          />
        </header>

        <section>
          <div className="card-section">
            <strong className="card-section_title">
              {currentCardData.title}
            </strong>
            <span className="card-section_description">
              {currentCardData.description}
            </span>
          </div>
        </section>

        <footer className="card-footer">
          <Indicator step={step} selectedStep={selectedStep} />
          <div className="buttons">
            {step > 0 && (
              <button className="button prev" onClick={prevStep}>
                ←
              </button>
            )}

            {step < cardLength - 1 && (
              <button className="button next" onClick={nextStep}>
                →
              </button>
            )}
          </div>
        </footer>
      </article>
    </>
  );
}
