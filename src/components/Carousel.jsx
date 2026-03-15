function getDayLabels(weekStart) {
  const start = new Date(weekStart + 'T12:00:00')
  const shorts = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  return shorts.map((short, i) => {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    return {
      short,
      date: d.toLocaleDateString('en-CA', { month: 'short', day: 'numeric' }),
    }
  })
}

function DayCard({ day, label, index }) {
  const isWeekend = index >= 5

  return (
    <div className={`card${isWeekend ? ' weekend' : ''}`}>
      <div className="card-head">
        <span className="card-day">{label.short}</span>
        <span className="card-date">{label.date}</span>
      </div>

      <div className="card-meal">
        <div className="meal-type">Lunch</div>
        <div className="meal-name">{day.lunch?.name || '—'}</div>
        {day.lunch?.desc && <div className="meal-desc">{day.lunch.desc}</div>}
      </div>

      <div className={`card-meal${isWeekend ? ' special' : ''}`}>
        <div className="meal-type">{isWeekend ? '★ Special Supper' : 'Supper'}</div>
        <div className="meal-name">{day.supper?.name || '—'}</div>
        {day.supper?.desc && <div className="meal-desc">{day.supper.desc}</div>}
      </div>

      {day.touski && (
        <div className="touski-tag">
          <div className="touski-label">Touski →</div>
          <div className="touski-val">{day.touski}</div>
        </div>
      )}
    </div>
  )
}

export default function Carousel({ plan, weekStart }) {
  if (!plan?.days?.length) return null

  const labels = getDayLabels(weekStart)

  return (
    <div className="steel">
      <div className="steel-label">Weekly menu — scroll to see all 7 days</div>
      <div className="carousel">
        {plan.days.map((day, i) => (
          <DayCard
            key={day.day}
            day={day}
            label={labels[i] || { short: day.day.slice(0, 3).toUpperCase(), date: '' }}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}
