const YoutubeEmbed = ({ link }) => {

  const getYoutubeId = (url) => {
  try {
    const parsed = new URL(url);
    return parsed.searchParams.get("v") || url; 
  } catch {
    // If it's already an ID, return it
    return url;
  }
};

  const videoId = getYoutubeId(link);

  return (
    <div className="video-responsive">
      <iframe
        width="1000"
        height="600"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title="Embedded youtube"
        
      />
    </div>
  );
};

export default YoutubeEmbed;
