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
            <div className={`step ${step === 2 && "active"}`}>
              <div className="step-number">
                2
              </div>
              <div className="step-info">
                <Paragraph>STEP 2</Paragraph>
                <Title>Selecione o plano</Title>
              </div>
            </div>
            </div>

            <div className="step">
              <div className={`step ${step === 3 && "active"}`}>
              <div className="step-number">
                3
              </div>
              <div className="step-info">
                <Paragraph>STEP 3</Paragraph>
                <Title>Suas informações</Title>
              </div>
            </div>
          </div>

            <div className="step">
              <div className={`step ${step === 4 && "active"}`}>
              <div className="step-number">
                4
              </div>
              <div className="step-info">
                <Paragraph>STEP 4</Paragraph>
                <Title>Sumário</Title>
              </div>
            </div>
          </div>
        </div>
      </aside>
        <div className="content">
          <button onClick={() => setStep(2)}>Próximo step</button>
          {step === 1 && (
            <form>
              <Title className="form-title">Informações pessoais</Title>
              <Paragraph className="form-description">Forneça suas informações para o cadastro</Paragraph>
            </form>
          )}
          {step === 2 &&(
            <form>
              <Title className="form-title">Planos</Title>
              <Paragraph className="form-description">Selecione um dos nossos planos</Paragraph>
            </form>
          )}
          {step === 3 && (
            <form>
              <Title className="form-title">esse eu n sei</Title>
              <Paragraph className="form-description">esse eu n sei</Paragraph>
            </form>
          )}
          {step === 4 && (
            <form>
              <Title className="form-title">Sumário</Title>
              <Paragraph className="form-description">alguma coisa pra botar</Paragraph>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
