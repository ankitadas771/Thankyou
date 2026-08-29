'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { RotateCcw, Sparkles } from 'lucide-react'
import { useState } from 'react'

const flowerNotes = [
  { type: 'lily', color: 'pink', label: 'First Lily', text: 'Ayushi, your presence alone brings so much calm and positivity into  life. Thank you for always being there to help me navigate tough moments.' },
  { type: 'tulip', color: '#fb8500', label: 'Orange Tulip', text: 'Thanks for listening to my naggings. ' },
  { type: 'lily', color: 'pink', label: 'Second Lily', text: 'I cherish every laugh and serious conversation we shared during our college days. Those memories are something I will always hold close.' },
  { type: 'tulip', color: '#ffb703', label: 'Yellow Tulip', text: 'Even though college is wrapping up, I am so glad we decided to keep this friendship going. It has incredible potential for the future. ' },
  { type: 'tulip', color: '#e63946', label: 'Red Tulip', text: ' Honestly i feel good when talking to you, thats why talk so much with you ' },
  { type: 'lily', color: 'pink', label: 'Third Lily', text: 'i just want the best for you no matter we are together or not' },
  { type: 'tulip', color: '#9d4edd', label: 'Purple Tulip', text: 'You made me angry a lot of times but the good times were worth it' },
  { type: 'tulip', color: '#ff006e', label: 'Magenta Tulip', text: ' You are destined to achieve extraordinary things. ' },
  { type: 'lily', color: 'pink', label: 'Fourth Lily', text: 'No matter what changes, I want you in my corner' },
  { type: 'tulip', color: '#3a86ff', label: 'Blue Tulip', text: ' Thank you for always helping me figure things out when things got complicated...' },
  { type: 'tulip', color: '#4cc9f0', label: 'Cyan Tulip', text: 'Here is to us, our shared growth, and a beautiful friendship that is only just beginning. You mean the world to me, Ayushi.' },
]

function Lily({ reduced, delay = 0, className = '', onPick }: { reduced: boolean; delay?: number; className?: string; onPick: () => void }) {
  const timing = reduced ? 0 : delay
  return (
    <motion.svg 
      viewBox="0 0 220 360" 
      className={`flower-svg lily ${className}`} 
      aria-label="A realistic lily blooming" 
      initial={{ opacity: 0, scale: .55, y: 30 }} 
      animate={{ opacity: 1, scale: 1, y: 0, rotate: [-1.5, 1.5, -1.5] }} 
      whileHover={{ scale: 1.08, zIndex: 20 }} 
      whileTap={{ rotate: -8, scale: 1.1 }} 
      transition={{ delay: timing, duration: reduced ? 0 : 1.6, ease: [0.16, 1, 0.3, 1], rotate: { delay: timing + 1.6, duration: 3.5, repeat: Infinity, ease: 'easeInOut' } }} 
      onClick={onPick} 
      role="button" 
      tabIndex={0}
    >
      <path d="M110 350 C108 280 110 215 110 126" fill="none" stroke="#3c5e39" strokeWidth="6" strokeLinecap="round" />
      <path d="M108 258 C74 246 55 221 43 188 C72 190 94 207 109 231" fill="#355632" stroke="#688c5e" strokeWidth="2" />
      <path d="M111 218 C141 199 162 174 169 143 C140 151 120 171 111 191" fill="#446d3e" stroke="#7a9e6f" strokeWidth="2" />
      <g transform="translate(110 124)">
        <path d="M0 0 C-43 -19 -66 -61 -51 -104 C-18 -94 3 -55 0 0Z" fill="#ff758c" stroke="#ffb3c1" strokeWidth="2" />
        <path d="M0 0 C-11 -48 4 -94 38 -111 C57 -75 40 -28 0 0Z" fill="#e63956" stroke="#ff8fa3" strokeWidth="2" />
        <path d="M0 0 C37 -20 73 -15 94 14 C61 37 25 28 0 0Z" fill="#ff758c" stroke="#ffb3c1" strokeWidth="2" />
        <path d="M0 0 C46 25 56 59 40 91 C11 76 -1 38 0 0Z" fill="#d90429" stroke="#ff707a" strokeWidth="2" />
        <path d="M0 0 C-30 35 -63 39 -90 19 C-73 -15 -30 -21 0 0Z" fill="#ff85a1" stroke="#ffccd5" strokeWidth="2" />
        <circle r="14" fill="#ffb703" />
        <circle cx="-28" cy="-34" r="3" fill="#780016" />
        <circle cx="28" cy="-26" r="3" fill="#780016" />
      </g>
    </motion.svg>
  )
}

function Tulip({ reduced, delay = 0, color, className = '', onPick }: { reduced: boolean; delay?: number; color: string; className?: string; onPick: () => void }) {
  const timing = reduced ? 0 : delay
  return (
    <motion.svg 
      viewBox="0 0 180 330" 
      className={`flower-svg tulip ${className}`} 
      aria-label="A realistic tulip blooming" 
      initial={{ opacity: 0, scale: .5, y: 35 }} 
      animate={{ opacity: 1, scale: 1, y: 0, rotate: [-1.5, 1.5, -1.5] }} 
      whileHover={{ scale: 1.08, zIndex: 20 }} 
      whileTap={{ rotate: 8, scale: 1.1 }} 
      transition={{ delay: timing, duration: reduced ? 0 : 1.35, ease: [0.16, 1, 0.3, 1], rotate: { delay: timing + 1.4, duration: 3, repeat: Infinity, ease: 'easeInOut' } }} 
      onClick={onPick} 
      role="button" 
      tabIndex={0}
    >
      <path d="M90 320 C88 255 90 195 90 116" fill="none" stroke="#3c5e39" strokeWidth="6" strokeLinecap="round" />
      <path d="M88 254 C60 247 42 225 34 196 C61 198 79 212 89 233" fill="#355632" stroke="#688c5e" strokeWidth="2" />
      <path d="M91 229 C119 210 137 191 144 163 C117 168 101 184 91 204" fill="#5d874f" stroke="#7a9e6f" strokeWidth="2" />
      <path d="M37 108 C39 45 63 18 90 47 C117 18 142 46 144 108 C137 159 111 174 90 130 C69 174 43 159 37 108Z" fill={color} stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
      <path d="M90 48 C85 80 86 112 90 130 C94 112 95 80 90 48Z" fill="#ffffff" opacity=".35" />
    </motion.svg>
  )
}

function Bouquet({ reduced, onSelect }: { reduced: boolean; onSelect: (index: number) => void }) {
  return (
    <div className="bouquet-cluster" role="group" aria-label="Choose a flower">
      <Lily reduced={reduced} delay={0.2} className="f-back f1" onPick={() => onSelect(0)} />
      <Tulip reduced={reduced} delay={0.3} color="#fb8500" className="f-back f2" onPick={() => onSelect(1)} />
      <Lily reduced={reduced} delay={0.4} className="f-mid f3" onPick={() => onSelect(2)} />
      <Tulip reduced={reduced} delay={0.5} color="#ffb703" className="f-back f4" onPick={() => onSelect(3)} />
      <Tulip reduced={reduced} delay={0.6} color="#e63946" className="f-front f5" onPick={() => onSelect(4)} />
      <Lily reduced={reduced} delay={0.7} className="f-front f6" onPick={() => onSelect(5)} />
      <Tulip reduced={reduced} delay={0.8} color="#9d4edd" className="f-mid f7" onPick={() => onSelect(6)} />
      <Tulip reduced={reduced} delay={0.9} color="#ff006e" className="f-front f8" onPick={() => onSelect(7)} />
      <Lily reduced={reduced} delay={1.0} className="f-back f9" onPick={() => onSelect(8)} />
      <Tulip reduced={reduced} delay={1.1} color="#3a86ff" className="f-mid f10" onPick={() => onSelect(9)} />
      <Tulip reduced={reduced} delay={1.2} color="#4cc9f0" className="f-front f11" onPick={() => onSelect(10)} />
    </div>
  )
}

export default function Page() {
  const reduced = useReducedMotion()
  const [key, setKey] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  
  const replay = () => { 
    setSelectedIndex(null); 
    setKey((value) => value + 1) 
  }

  const currentNote = selectedIndex !== null ? flowerNotes[selectedIndex] : null

  return (
    <main className="gift-scene" key={key}>
      <div className="sky-glow" aria-hidden="true" />
      <div className="cloud cloud-one" aria-hidden="true" />
      <div className="cloud cloud-two" aria-hidden="true" />
      <div className="grass-bank" aria-hidden="true" />
      <div className="grass-blades" aria-hidden="true">{Array.from({ length: 34 }).map((_, i) => <span key={i} style={{ '--i': i } as React.CSSProperties} />)}</div>
      
      <header className="gift-header">
        <p className="eyebrow"><Sparkles size={14} strokeWidth={1.5} /> A little something for you</p>
        <h1>For Ayushi 🌙</h1>
        <p className="subtitle">A lush meadow, growing with our bond</p>
      </header>

      {/* Message Card Appears Above the Flowers */}
      <div className="message-container">
        {currentNote ? (
          <motion.div className="Friendship-message" role="status" initial={{ opacity: 0, y: -18, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .55 }}>
            <p className="message-kicker">Note from the {currentNote.label}</p>
            <p>{currentNote.text}</p>
          </motion.div>
        ) : (
          <p className="pick-prompt">Click any flower to read its special note</p>
        )}
      </div>

      <section className="rose-stage meadow-stage" aria-label="Animated colorful meadow of lilies and tulips">
        <Bouquet reduced={Boolean(reduced)} onSelect={setSelectedIndex} />
        <p className="bloom-caption">growing, quietly and surely</p>
      </section>

      <button className="replay-button" onClick={replay} aria-label="Replay meadow bloom"><RotateCcw size={14} /> Replay bloom</button>
    </main>
  )
}