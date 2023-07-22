import { useState, useEffect } from "react";
import NewGame from "./assets/components/NewGame";
import SetGame from "./assets/components/SetGame";
import Modal from "./assets/components/Modal";
import Footer from "./assets/components/Footer";
import logo from "./assets/img/secretsanta.png";
import buttonNewPlayer from "./assets/img/boton.png";
import buttonGame from "./assets/img/botonsorteo.png";
import buttonReset from "./assets/img/botonrestart.png";
import buttonClose from "./assets/img/botonclose.png";

function App() {
  const [secretSanta, setSecretSanta] = useState(
    localStorage.getItem("secretSanta")
      ? JSON.parse(localStorage.getItem("secretSanta"))
      : []
  );
  const [players, setPlayers] = useState(
    localStorage.getItem("players")
      ? JSON.parse(localStorage.getItem("players"))
      : []
  );
  const [couples, setCouples] = useState(
    localStorage.getItem("couples")
      ? JSON.parse(localStorage.getItem("couples"))
      : []
  );
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [validGame, setValidGame] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("secretSanta", JSON.stringify(secretSanta) ?? []);
  }, [secretSanta]);

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players) ?? []);
  }, [players]);

  useEffect(() => {
    localStorage.setItem('couples', JSON.stringify(couples) ?? [])
  }, [couples])

  useEffect(() => {
    const secretSantaCurrent =
      JSON.parse(localStorage.getItem("secretSanta")) ?? [];
    if (secretSantaCurrent.length > 0) {
      setValidGame(true);
    }
  }, []);

  const handleReset = (e) => {
    e.preventDefault();
    if(confirm("¿Estas seguro que quieres borrar este juego?") == true){
      setCouples([]);
      setPlayers([]);
      setSecretSanta([]);
      setValidGame(false);
    }else{
      return;
    }
  };

  return (
    <div className={modal ? "overflow-hidden h-screen" : ""}>
      <div className="bg-red-400 max-w-md container mx-auto rounded-t-full">
        <img src={logo}></img>
      </div>
      <div className="bg-white border-2 border-red-400 max-w-md mb-5 container mx-auto p-5 rounded-b-lg">
        {validGame ? (
          <>
            <div className="flex flex-col items-end">
              <button
                type="submit"
                className="bg-white p-4"
                onClick={handleReset}
              >
                <img className="w-10" src={buttonReset} alt="button"></img>
              </button>
            </div>
            <SetGame
              secretSanta={secretSanta}
              players={players}
              couples={couples}
              setModal={setModal}
              setCouples={setCouples}
              buttonNewPlayer={buttonNewPlayer}
              buttonGame={buttonGame}
            />
          </>
        ) : (
          <>
            <NewGame
              setName={setName}
              name={name}
              setValue={setValue}
              value={value}
              setError={setError}
              error={error}
              setErrorMessage={setErrorMessage}
              errorMessage={errorMessage}
              setSecretSanta={setSecretSanta}
              setValidGame={setValidGame}
            />
          </>
        )}

        {modal && (
          <Modal
            setModal={setModal}
            setPlayers={setPlayers}
            players={players}
            buttonClose={buttonClose}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
