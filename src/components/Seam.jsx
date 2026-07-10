// The one signature element of the design: a hairline rule that opens
// with code-bracket ticks (your CS side) and closes with music staff
// ledger ticks (your composition side), meeting at a single dot in the
// middle. Colors are intentionally hard-coded here since they mirror
// the --cs-accent / --mus-accent tokens in index.css.
export default function Seam() {
  return (
    <svg className="seam" viewBox="0 0 1000 34" preserveAspectRatio="none" role="presentation">
      <line x1="0" y1="17" x2="1000" y2="17" stroke="#d9d7d1" strokeWidth="1" />

      <g stroke="#3d5166" strokeWidth="1.6" fill="none">
        <path d="M120 8 l-8 9 l8 9" />
        <path d="M170 8 l8 9 l-8 9" />
        <path d="M260 8 l-8 9 l8 9" />
        <path d="M310 8 l8 9 l-8 9" />
      </g>

      <g stroke="#7a3030" strokeWidth="1.4">
        <line x1="690" y1="12" x2="690" y2="22" />
        <line x1="720" y1="10" x2="720" y2="24" />
        <line x1="750" y1="12" x2="750" y2="22" />
        <line x1="800" y1="9" x2="800" y2="25" />
        <line x1="830" y1="12" x2="830" y2="22" />
        <line x1="880" y1="10" x2="880" y2="24" />
      </g>

      <circle cx="500" cy="17" r="3" fill="#1c1b19" />
    </svg>
  )
}
