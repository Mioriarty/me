export default function Masthead({ name, tagline }) {
  return (
    <header className="masthead">
      <div className="wrap">
        <h1>{name}</h1>
        <p className="tagline">{tagline}</p>
      </div>
    </header>
  )
}
