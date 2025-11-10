import { flags } from "../../assets/data/flag";

const imgPath = import.meta.env.VITE_IMAGE_URL;

export default function Card ({ media }) {

    return (
        <div className="card media-card">
          <img className="media-image"
          src={`${imgPath}${media.poster_path}`} 
          alt={media.title || media.name} />
          <div className="card-body media-info">
            <h4 className="card-title">{media.title || media.name}</h4>
            <h5 className="card-title">{media.original_title || media.original_name}</h5>
            <p className="card-text">{media.vote_average}</p>
            <div className="card-text">
              <span className="me-2">{media.original_language}</span>
              <img className="flag" 
              src={flags[media.original_language] || flags.unknown} 
              alt={media.original_language} />
              </div>
          </div>
        </div>
    );
}