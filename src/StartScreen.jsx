import CardButton from "./CardButton";
import "./StartScreen.css";

const StartScreen = () => {
  const start = () => {
    document.getElementById("start-screen").style.display = "none";
  };

  return (
    <div id="start-screen">
      <h1>
        Potentially objectively correct top250 list of 90&apos;s hits, if the
        rankings weren&apos;t ruined by 2 ebuls
      </h1>
      <img className="start-img" src="image.jpg" />
      <CardButton buttonText="Start" changeSlide={start} />
    </div>
  );
};
export default StartScreen;
