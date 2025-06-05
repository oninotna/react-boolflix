export default function CardMovie ({ media }) {
    return (
        <div className="card" style={{width: "18rem"}}>
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h4 className="card-title">{media.title}</h4>
            <h5 className="card-title">{media.original_title}</h5>
            <p className="card-text">{media.vote_average}</p>
            <p className="card-text">{media.original_language}</p>
          </div>
        </div>
    );
}