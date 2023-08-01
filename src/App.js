import { useState } from "react";
import Paragraph from "./components/Paragraph";
import Title from "./components/Title";
import "./styles/App.css"
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

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
        <form>
          {step === 1 && (
            <>
              <header>
                <Title className="form-title">Informações pessoais</Title>
                <Paragraph className="form-description">Forneça suas informações para o cadastro</Paragraph>
              </header>
              <div className="form-group">
                <Input placeholder="Ex: John Doe" label="Nome"/>
                <Input placeholder="Ex: email@exemplo.com" label="E-mail"/>
                <Input placeholder="Ex: +55 (11) 91234-5678" label="Telefone"/>
              </div>
            </>
          )}
          {step === 2 &&(
            <>
              
            </>
          )}
          {step === 3 && (
            <>
              <header>
                <Title className="form-title">Informações pessoais</Title>
                <Paragraph className="form-description">Forneça suas informações para o cadastro</Paragraph>
              </header>
              <div className="form-group">
                <Input placeholder="Ex: John Doe" label="Nome"/>
                <Input placeholder="Ex: email@exemplo.com" label="E-mail"/>
                <Input placeholder="Ex: +55 (11) 91234-5678" label="Telefone"/>
              </div>
            </>
          )}
          {step === 4 && (
            <>
              <header>
                <Title className="form-title">Informações pessoais</Title>
                <Paragraph className="form-description">Forneça suas informações para o cadastro</Paragraph>
              </header>
              <div className="form-group">
                <Input placeholder="Ex: John Doe" label="Nome"/>
                <Input placeholder="Ex: email@exemplo.com" label="E-mail"/>
                <Input placeholder="Ex: +55 (11) 91234-5678" label="Telefone"/>
              </div>
            </>
          )}
            <div className="form-buttons">
              <Button simple style={{display: `${step > 1 ? 'block' : 'none'}`, marginRight: 'auto'}} onClick={(e) => {setStep(step - 1); e.preventDefault()}}>Anterior</Button>
              <Button style={{display: `${step < 4 ? 'block' : 'none'}`, marginLeft: 'auto'}} onClick={(e) => {setStep(step + 1); e.preventDefault()}}>Próximo</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;