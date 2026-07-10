export default function MainNav({ items }) {
  return (
    <nav className="mainnav">
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
