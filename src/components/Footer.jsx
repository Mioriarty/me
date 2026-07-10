export default function Footer({ links }) {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="links">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="colophon">Set in Piazzolla &amp; IBM Plex — Printed digitally in Jena</div>
      </div>
    </footer>
  )
}
