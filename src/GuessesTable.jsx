import { v4 as uuid } from "uuid";
import daGuesses from "./data/guesses/daGuesses";
import kukiGuesses from "./data/guesses/kukiGuesses";
import uniGuesses from "./data/guesses/uniGuesses";
import songs from "./data/Songs";
import "./GuessesTable.css";

function GuessesTable() {
  console.log(songs);
  let daGuessSum = 0;
  let kukiGuessSum = 0;
  let uniGuessSum = 0;
  return (
    <div className="guesses-table">
      <div className="da-guesses">
        <h3 className="guesser-name">DA</h3>
        {daGuesses.map((guess) => {
          daGuessSum +=
            songs.length - songs.findIndex((song) => song.name === guess);
          return (
            <p key={uuid()} className="guess">
              {`${guess}: `}
              <span className="guess-place">
                {songs.length - songs.findIndex((song) => song.name === guess)}
              </span>
            </p>
          );
        })}
        <p className="guess-sum">
          Total guesses ranking:{" "}
          <span className="guess-place">{daGuessSum}</span>
        </p>
      </div>
      <div className="kuki-guesses">
        <h3 className="guesser-name">Kuki</h3>
        {kukiGuesses.map((guess) => {
          kukiGuessSum +=
            songs.length - songs.findIndex((song) => song.name === guess);
          return (
            <p key={uuid()} className="guess">
              {`${guess}: `}
              <span className="guess-place">
                {songs.length - songs.findIndex((song) => song.name === guess)}
              </span>
            </p>
          );
        })}
        <p className="guess-sum">
          Total guesses ranking:{" "}
          <span className="guess-place">{kukiGuessSum}</span>
        </p>
      </div>
      <div className="uni-guesses">
        <h3 className="guesser-name">Uni</h3>
        {uniGuesses.map((guess) => {
          uniGuessSum +=
            songs.length - songs.findIndex((song) => song.name === guess);
          return (
            <p key={uuid()} className="guess">
              {`${guess}: `}
              <span className="guess-place">
                {songs.length - songs.findIndex((song) => song.name === guess)}
              </span>
            </p>
          );
        })}
        <p className="guess-sum">
          Total guesses ranking:{" "}
          <span className="guess-place">{uniGuessSum}</span>
        </p>
      </div>
    </div>
  );
}
export default GuessesTable;
