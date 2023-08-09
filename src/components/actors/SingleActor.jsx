import TooltipComponent from "./TooltipComponent";
import ModalComponent from "./ModalComponent";
export const SingleActor = ({ name, profile_path, known_for, popularity }) => {
  const id = name.split(" ").join("");
  return (
    <div className="single-actor" id={id}>
      <h3>{name}</h3>
      <h3>{Math.floor(popularity)}</h3>
      <img src={`https://image.tmdb.org/t/p/w185${profile_path}`} />

      <TooltipComponent id={id} name={name} />
      <ModalComponent movies={known_for} name={name} />
    </div>
  );
};
