import Card from "./ui/Card";

export default function MovieList ({media, title}) {

    return (
      <div className="row justify-content-center gap-3 text-center">
        <h1>{title}</h1>
        {media.map((media) => (
          <Card media={media} key={media.id} />
        ))}
      </div>
    );
}