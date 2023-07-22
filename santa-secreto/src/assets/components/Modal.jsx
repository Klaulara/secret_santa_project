import { useState } from "react";
import Error from "./Error";

const Modal = ({ setModal, setPlayers, players, buttonClose }) => {
  const [playerName, setPlayerName] = useState('');
  const [playerEmail, setPlayerEmail] = useState('');
  const [errorModal, setErrorModal] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState('')

  const handleCloseModal = () => {
    setModal(false);
  };

  const handlePlayer = (e) => {
    e.preventDefault();
    if(playerName == ''){
      setErrorModal(true);
      setErrorModalMessage("No puedes enviar el nombre vacio");
      return;
    }
    let player = [];
    {player.push({
      name: playerName,
      email: playerEmail
    })}
    if(players.length > 0){
        setPlayers([...players, player[0]]);
        setModal(false);
        return;
    }
    setPlayers(player);
    setModal(false);
  };

  return (
    <div className="absolute max-w-7xl inset-0 bg-black/75">
      
      <div className="bg-white max-w-sm container mx-auto rounded-lg m-20">
      <div className="flex flex-col items-end">
        <button
          type="submit"
          className="bg-white p-4"
          onClick={handleCloseModal}
        >
          <img className="w-10" src={buttonClose} alt='button'></img>
        </button>
      </div>
        <h1 className="text-center font-bold text-lg mb-5">Agrega un nuevo Participante</h1>
        <form>
          <div className="mb-2 text-center">
            {errorModal && <Error children={errorModalMessage} />}
            <label className="font-bold mr-5" htmlFor="nombre">
              Nombre participante: 
            </label>
            <input
              id="player"
              type="text"
              className="rounded-lg border-2"
              placeholder=" Nombre"
              name="player"
              required
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </div>
          <div className="mb-2 text-center">
            <label className="font-bold mr-5" htmlFor="nombre">
              Email participante: 
            </label>
            <input
              id="email"
              type="text"
              className="rounded-lg border-2"
              placeholder=" Email opcional"
              name="email"
              required
              onChange={(e) => setPlayerEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="border-2 border-red-400 rounded-md p-4 my-4 hover:bg-red-400"
              onClick={handlePlayer}
            >
              Agregar Participante.
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
