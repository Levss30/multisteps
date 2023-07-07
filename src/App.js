import { useState } from "react";
import Paragraph from "./components/Paragraph";
import Title from "./components/Title";
import "./styles/App.css"

function App() {

  const [step, setStep] = useState(1)

  return (
    <div className="App">
      <div className="container">
        <aside>
          <div className="steps">
            <div className={`step ${step === 1 && "active"}`}>
              <div className="step-number">
                1
              </div>
              <div className="step-info">
                <Paragraph>STEP 1</Paragraph>
                <Title>Suas informações</Title>
              </div>

            </div>
            <div className="step">
              <div className="step-number">
                2
              </div>
              <div className="step-info">
                <Paragraph>STEP 2</Paragraph>
                <Title>Selecione o plano</Title>
              </div>

            </div>
            <div className="step">
              <div className="step-number">
                3
              </div>
              <div className="step-info">
                <Paragraph>STEP 3</Paragraph>
                <Title>Suas informações</Title>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                4
              </div>
              <div className="step-info">
                <Paragraph>STEP 4</Paragraph>
                <Title>Sumário</Title>
              </div>
            </div>
          </div>
        </aside>
        <div className="content">
          <button onClick={() => setStep(2)}>Mudar step pra 2</button>
          {step === 1 && (
            <form>
              <Title className="form-title">Informações pessoais</Title>
              <Paragraph className="form-description">Forneça suas informações para o cadastro</Paragraph>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
