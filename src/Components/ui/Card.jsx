import { flags } from "../../assets/data/flag";

export default function CardMovie ({ media }) {

    return (
        <div className="card" style={{width: "18rem"}}>
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div className="card-body">
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