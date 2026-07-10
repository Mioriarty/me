function Entry({ title, when, body }) {
  return (
    <div className="entry">
      <div className="entry-head">
        <h4>{title}</h4>
        <span className="when">{when}</span>
      </div>
      <p>{body}</p>
    </div>
  )
}

// One component, used twice (Research and Compositions) with different
// data and an `accent` of "cs" or "mus" to pick up the right color token.
export default function SectionFront({ id, tag, title, subtitle, accent, entries }) {
  return (
    <section id={id} className={`front ${accent}`}>
      <span className="tag">{tag}</span>
      <h3>{title}</h3>
      <p className="sub">{subtitle}</p>
      {entries.map((entry, i) => (
        <Entry key={i} {...entry} />
      ))}
    </section>
  )
}
