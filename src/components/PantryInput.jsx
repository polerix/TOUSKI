import { useRef } from 'react'
import { SAMPLE_PANTRY } from '../samplePantry'

export default function PantryInput({ value, onChange }) {
  const fileRef = useRef()

  const lines = value.split('\n').filter((l) => l.trim()).length

  function handleCSV(e) {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const text = ev.target.result
      const lines = text.split('\n')
      const nameIdx = lines[0]
        .split(',')
        .findIndex((h) => h.trim().replace(/"/g, '').toLowerCase() === 'name')
      if (nameIdx === -1) {
        alert('CSV must have a "name" column (MyPantryTracker export format)')
        return
      }
      const items = lines
        .slice(1)
        .map((l) => {
          const cols = l.split(',')
          return cols[nameIdx] ? cols[nameIdx].replace(/"/g, '').trim() : ''
        })
        .filter(Boolean)
      onChange(items.join('\n'))
    }
    reader.readAsText(file)
  }

  return (
    <div className="body">
      <div className="field-label">
        Pantry inventory — paste items or upload MyPantryTracker CSV export
      </div>

      <textarea
        className="pbox"
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={
          'Clover Leaf Flaked Light Tuna\nCampbell\'s Tomato soup\nKim Fat sliced noodles\nClassico Bolognese Pasta Sauce\nBrown Rice\n...'
        }
      />

      <div className="upload-row">
        <input
          ref={fileRef}
          type="file"
          accept=".csv"
          style={{ display: 'none' }}
          onChange={handleCSV}
        />
        <button className="sm-btn" onClick={() => fileRef.current?.click()}>
          Upload CSV
        </button>
        <button className="sm-btn" onClick={() => onChange(SAMPLE_PANTRY)}>
          Load my pantry
        </button>
        {lines > 0 && (
          <span className="item-count">{lines} items</span>
        )}
      </div>
    </div>
  )
}
