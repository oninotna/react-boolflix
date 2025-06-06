import Card from "./ui/Card";

export default function MovieList ({media, title}) {

    return (
      <div className="container text-center mb-5">
        <h1 className="my-3">{title}</h1>
        <div className="media-container">
          <div className="row justify-content-center gap-3 text-center">
            {media.map((media) => (
              <Card media={media} key={media.id} />
            ))}
          </div>
        </div>
      </div>
    );
}