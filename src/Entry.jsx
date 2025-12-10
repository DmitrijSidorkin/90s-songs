import "./Entry.css";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Entry({ song, position }) {
  return (
    <div className="entry">
      <div className="title">
        <div className="name">
          <h1 className="title-nr">{position}.</h1>
          <h1 className="title-song">
            {song.artist} - {song.name} {`(${song.year})`}
          </h1>
        </div>
        <h1 className="title-score">{song.avgScore}</h1>
      </div>
      <YoutubeEmbed link={song.link} />
      <div className="individual-scores">
        <span className="daScore">DA - {song.daScore}</span>
        <span className="kukiScore">Kuki - {song.kukiScore}</span>
        <span className="uniScore">Uni - {song.uniScore}</span>
      </div>
    </div>
  );
}
