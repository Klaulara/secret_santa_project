import React from "react";
import Error from "./Error";

const NewGame = ({
  setName,
  name,
  setValue,
  value,
  setErrorMessage,
  errorMessage,
  setError,
  error,
  setSecretSanta,
  setValidGame,
}) => {
  const handleGame = (e) => {
    e.preventDefault();
    setError(false);
    setSecretSanta([name, value]);
    setValidGame(true);
  };

  return (
    <div className="text-center">
      <h1 className="text-center font-bold mb-5">INGRESA UN NUEVO JUEGO</h1>
      <form onSubmit={handleGame}>
        <div className="mb-2 text-center">
          <label className="font-bold mr-5" htmlFor="nombre">
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            className="rounded-md border-2"
            placeholder=" ingresar nombre"
            name="nombre"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2 text-center">
          <label className="font-bold mr-5" htmlFor="nombre">
            Valor:
          </label>
          <input
            id="valor"
            type="number"
            className="rounded-md border-2"
            placeholder=" ingresar valor"
            name="valor"
            required
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        {error && <Error children={errorMessage} />}
        <div className="flex flex-col items-center">
          <button type="submit" className="border-2 border-red-400 rounded-md p-4 my-4 hover:bg-red-400">
            Crea tu Santa Secreto
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewGame;
