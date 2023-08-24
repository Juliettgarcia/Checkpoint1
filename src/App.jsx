import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [coresLista, setCoresLista] = useState([]);
  const [corNome, setCorNome] = useState("");
  const [corCodigo, setCorCodigo] = useState("");
  const validacao = document.querySelector(".ativado");
  const inputNome = document.querySelector("#corNome");
  const inputCodigo = document.querySelector("#corCodigo");
  const inputForm = document.querySelector(".form");

  const handleCoresSubmit = (event) => {
    event.preventDefault();

    if (corNome.length > 3 && corCodigo.length == 7) {
      const novaCor = { nome: corNome.trim(), codigo: corCodigo.trim() };
      setCoresLista((state) => [...state, novaCor]);
      inputNome.style.border = "none";
      inputCodigo.style.border = "none";
      inputForm.style.border = "none";
      validacao.style.display = "none";
    } else {
      inputNome.style.border = "1px solid red";
      inputCodigo.style.border = "1px solid red";
      inputForm.style.border = "1px solid red";
      validacao.style.display = "block";
    }
  };

  return (
    <main className="App">
      <form className="form" onSubmit={handleCoresSubmit}>
        <h3> Adicione uma nova Cor </h3>
        <div className="form_input">
          <div className="input">
            <label> Nome </label>
            <input
              type="text"
              name="corNome"
              id="corNome"
              placeholder="Digite o nome da cor"
              onChange={(event) => setCorNome(event.target.value)}
              value={corNome}
            />
          </div>

          <div className="input">
            <label> Cor </label>
            <input
              type="text"
              name="corCodigo"
              id="corCodigo"
              placeholder="Digite o código da cor"
              onChange={(event) => setCorCodigo(event.target.value)}
              value={corCodigo}
            />
          </div>
        </div>

        <div className="form_button">
          <button type="submit" disabled={corNome === "" && corCodigo === ""}>
            Adicionar
          </button>
        </div>
      </form>

      <p className="ativado">
        {" "}
        Por favor, verifique os dados inseridos no formulário{" "}
      </p>

      <section id="card" className="listaCores">
        <h3> Cores Favoritas </h3>

        <div className="listaContent">
          <ul>
            {coresLista &&
              coresLista.map((cores, index) => {
                return <Card key={index} cores={cores} />;
              })}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
