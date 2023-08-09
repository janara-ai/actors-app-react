import { SingleActor } from "./SingleActor";
import "./ActorsList.css";
export const ActorsList = ({ actors }) => {
  return (
    <div className="actors-container">
      {actors.map((actor) => {
        return <SingleActor {...actor} />;
      })}
    </div>
  );
};
