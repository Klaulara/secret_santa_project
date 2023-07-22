import { useState } from "react";

const Index = () => {
  const [code, setCode] = useState('');
  const [friend, setFriend] = useState('')

  const handleCode = (e) => {
    e.preventDefault();
    const amigoSecreto = window.atob(code);
    setFriend(amigoSecreto);
  }

  return (
    <div className="text-center font-bold mb-5">
      <h1 className="mb-5">¿Tienes un código? Ingresalo aquí</h1>
      <form onSubmit={handleCode}>
        <div className="mb-2 text-center">
          <input
            id="codigo"
            type="text"
            className="rounded-md border-2"
            placeholder=" ingresar codigo"
            name="codigo"
            required
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="border-2 border-red-400 rounded-md p-3 my-4 hover:bg-red-400"
        >
          Averigua
        </button>
      </form>
      {friend.length > 0 ? <p>Tu amigo secreto es: {friend}</p> : null}
      
    </div>
  );
};

export default Index;