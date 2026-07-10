export default function Dateline({ city, volume }) {
  return (
    <div className="dateline">
      <div className="wrap">
        <span>{city}</span>
        <span>{volume}</span>
      </div>
    </div>
  )
}
