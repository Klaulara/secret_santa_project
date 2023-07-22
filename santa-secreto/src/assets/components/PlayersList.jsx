import buttonEmail from '../img/email.png';
import copyToClipboard from '../img/copy.png'

const PlayersList = ({ player, index, couples }) => {
  return (
    <div className="flex p-2">
      <p className="font-bold">
        {index + 1}. {player.name}{" "}
      </p>
      {couples.length > 0 ? (
        <p className="border-2 rounded-md ml-5">
          {window.btoa(couples[index].receiver.name)} <button onClick={() =>
            navigator.clipboard.writeText(
              window.btoa(couples[index].receiver.name)
            )
          }><img className='w-4' src={copyToClipboard} alt='copy'></img></button>
        </p>
      ) : null}
      {couples.length > 0 ? (
        <button className="bg-white ml-5">
          <a
            href={`mailto:${
              player.email
            }?subject=santasecreto&body=${window.btoa(
              couples[index].receiver.name
            )}`}
          >
            <img className="w-8" src={buttonEmail} alt='email'></img>
          </a>
        </button>
      ) : null}
    </div>
  );
};

export default PlayersList;
