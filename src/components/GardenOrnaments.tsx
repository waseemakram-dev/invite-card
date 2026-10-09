// Original vector ornaments drawn for this invitation, not copied site assets.
export function Flourish() {
  return <svg className="flourish" viewBox="0 0 220 38" fill="none" aria-hidden="true"><path d="M10 25c30-38 52 15 77-8M210 25c-30-38-52 15-77-8M50 24c8-23 25-19 33-16M170 24c-8-23-25-19-33-16M90 18h40" stroke="currentColor" strokeWidth="1"/><path d="M110 7l5 11-5 11-5-11z" fill="currentColor"/><circle cx="17" cy="21" r="2" fill="currentColor"/><circle cx="203" cy="21" r="2" fill="currentColor"/></svg>;
}

export function Botanical({ className = '' }: { className?: string }) {
  return <svg className={`botanical ${className}`} viewBox="0 0 280 240" aria-hidden="true">
    <g fill="none" stroke="#82916b" strokeWidth="1.2"><path d="M20 222C81 178 159 118 246 28M37 209C66 160 61 107 52 54M79 185C133 192 192 174 254 139M132 138C165 86 154 55 140 18"/></g>
    {[ [65,169,-35],[83,161,25],[107,142,-28],[132,128,25],[164,99,-30],[185,83,22],[212,57,-30],[231,43,25],[52,105,-40],[56,139,40],[54,73,15],[152,64,-25],[156,98,25],[165,184,70],[210,167,65],[241,145,45] ].map(([x,y,r],i)=><g key={i} transform={`translate(${x} ${y}) rotate(${r})`}><path d="M0 0C-23-6-22-27-7-34C9-23 14-12 0 0Z" fill={i%3 ? '#93a17a' : '#b0b597'} opacity=".74"/><path d="M0 0L-7-31" stroke="#657754" strokeWidth=".6"/></g>)}
    {[ [81,153,1],[139,96,.62],[46,192,.58],[222,61,.5] ].map(([x,y,s],i)=><g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
      {Array.from({length:8},(_,j)=><ellipse key={j} cx="0" cy="-15" rx="13" ry="22" transform={`rotate(${j*45})`} fill={j%2?'#f6ead9':'#fff7ed'} stroke="#d2bf9f" strokeWidth=".7"/>)}
      {Array.from({length:6},(_,j)=><ellipse key={j} cx="0" cy="-8" rx="8" ry="12" transform={`rotate(${j*60+20})`} fill="#f5e1d2" stroke="#cdb495" strokeWidth=".6"/>)}
      <circle r="6" fill="#c9ab70"/><circle r="3" fill="#e5c995"/>
    </g>)}
  </svg>;
}

export function Swans() {
  return <svg className="swans" viewBox="0 0 300 110" fill="none" aria-hidden="true">
    <g stroke="#b2b39a" opacity=".6"><ellipse cx="150" cy="87" rx="130" ry="14"/><ellipse cx="150" cy="89" rx="90" ry="8"/></g>
    {[false,true].map(mirror=><g key={String(mirror)} transform={mirror?'translate(300 0) scale(-1 1)':undefined}>
      <path d="M68 77c-12-6-28-19-25-32 20 3 29 14 51 10 18-3 16-16 13-28-3-12 10-23 23-18 16 6 10 23 3 24-8 2-10-2-9-7 1-3 7-3 7-7-1-7-11-5-11 3 0 13 16 23 9 41-8 20-41 28-61 14Z" fill="#fffaf0" stroke="#b7af97"/>
      <path d="M58 55c14 5 19 18 49 10M65 61c9 4 18 13 34 9" stroke="#dad2bb"/><path d="M137 19l9 5-10 3" fill="#b99254"/><circle cx="132" cy="16" r="1.8" fill="#574838"/>
    </g>)}
  </svg>;
}
