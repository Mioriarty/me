import Entry from './Entry.jsx'

// Full-width section set in short grouped columns, like a newspaper's
// listings page. Used for Volunteering and the CV.
export default function CVSection({ id, tag, title, subtitle, groups }) {
  return (
    <section id={id} className="front cv">
      <span className="tag">{tag}</span>
      <h3>{title}</h3>
      <p className="sub">{subtitle}</p>
      <div className="cv-groups">
        {groups.map((group) => (
          <div className="cv-group" key={group.heading}>
            <h5>{group.heading}</h5>
            {group.entries.map((entry, i) => (
              <Entry key={i} {...entry} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
