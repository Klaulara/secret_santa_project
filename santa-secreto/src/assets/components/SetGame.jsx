import {} from "react";
import PlayersList from "./PlayersList";

const SetGame = ({
  secretSanta,
  players,
  setModal,
  couples,
  setCouples,
  buttonNewPlayer,
  buttonGame,
}) => {
  const [nombre, valor] = secretSanta;

  const handleNewPlayer = () => {
    setModal(true);
  };

  const handlePlay = (e) => {
    e.preventDefault();
    const result = [];
    const recipients = players.slice();
    for (let i = 0; i < players.length; i++) {
      let sender = players[i];
      let recipientIndex = Math.floor(Math.random() * recipients.length);
      while (recipients[recipientIndex] === sender) {
        // Can't send gift to myself
        recipientIndex = Math.floor(Math.random() * recipients.length);
      }
      var recipient = recipients.splice(recipientIndex, 1)[0];
      result.push({
        sender: sender,
        receiver: recipient,
      });
    }
    setCouples(result);
    alert("Sorteo realizado con exito");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Bienvenido/a al Santa Secreto de: {nombre}
      </h1>
      <p className="text-lg mb-5">El monto del regalo es de: ${valor}.</p>
      {players.length > 0 ? (
        <h1 className="text-lg font-bold mb-5">Listado de Participantes: </h1>
      ) : (
        <h1 className="text-lg font-bold mb-5">Agregar participantes:</h1>
      )}

      {players.map((player, index) => (
        <PlayersList
          key={index}
          player={player}
          index={index}
          couples={couples}
        />
      ))}

      <div className="flex flex-row-reverse">
      <button type="submit" className="bg-white p-4" onClick={handlePlay}>
          <img className="w-10" src={buttonGame} alt="button"></img>
        </button>
        <button
          type="submit"
          className=" bg-white p-4"
          onClick={handleNewPlayer}
        >
          <img className="w-10" src={buttonNewPlayer} alt="button"></img>
        </button>
        
      </div>
      <div className="text-center mb-2">
        <h1>Descifra el código en esta página.</h1>
        <a href="https://regalosanta.claudialara.me/">
          https://regalosanta.claudialara.me/
        </a>
      </div>
    </div>
  );
};

export default SetGame;
