export default function LeadStory({ kicker, headline, byline, paragraphs }) {
  return (
    <article className="lead" id="lead">
      <p className="kicker">{kicker}</p>
      <h2>{headline}</h2>
      <p className="byline">{byline}</p>
      <div className="lead-body">
        {paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}
