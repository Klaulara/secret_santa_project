import { useLoaderData } from "react-router-dom";

export const loader = ({ params }) => {
  const data = params;
  return data;
};

const Regalo = () => {
  const data = useLoaderData();
  const amigoSecreto = window.atob(data.regalo);

  return (
    <div className="text-center font-bold mb-5">
      {amigoSecreto ? (
        <p>Tu amigo secreto es: {amigoSecreto}</p>
      ) : (
        <p>Tu codigo esta incorrecto</p>
      )}
    </div>
  );
};

export default Regalo;
