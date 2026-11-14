import { newTabProps } from '../scripts/links.js'

// One dated item (a thesis, a piece, a CV line). Shared by the section
// fronts and the CV section.
export default function Entry({ title, subtitle, when, body, link, links }) {
  const allLinks = links ?? (link ? [link] : [])
  return (
    <div className="entry">
      <div className="entry-head">
        <h4>{title}</h4>
        {when && <span className="when">{when}</span>}
      </div>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      {body && <p>{body}</p>}
      {allLinks.length > 0 && (
        <div className="entry-links">
          {allLinks.map((l) => (
            <a key={l.href} className="entry-link" href={l.href} {...newTabProps(l.href)}>
              {l.label} →
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
