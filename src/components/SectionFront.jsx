import Entry from './Entry.jsx'

// One component, used for Research, Compositions and Projects with
// different data and an `accent` ("cs", "mus" or "plain") to pick up the
// right color token. `layout: "grid"` sets the entries side by side for a
// full-width section; `intro` is an optional short paragraph under the title.
export default function SectionFront({ id, tag, title, subtitle, intro, accent, layout, entries }) {
  const items = entries.map((entry, i) => <Entry key={i} {...entry} />)
  return (
    <section id={id} className={`front ${accent}${layout === 'grid' ? ' wide' : ''}`}>
      <span className="tag">{tag}</span>
      <h3>{title}</h3>
      <p className="sub">{subtitle}</p>
      {intro && <p className="intro">{intro}</p>}
      {layout === 'grid' ? <div className="entry-grid">{items}</div> : items}
    </section>
  )
}
