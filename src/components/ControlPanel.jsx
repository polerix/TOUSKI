export default function ControlPanel({ config, onChange, onGenerate, loading }) {
  const { household, weekStart, cookingStyle } = config

  // Default to current week's Monday
  function getThisMonday() {
    const d = new Date()
    const day = d.getDay()
    const diff = d.getDate() - day + (day === 0 ? -6 : 1)
    return new Date(d.setDate(diff)).toISOString().split('T')[0]
  }

  return (
    <div className="panel">
      <div className="panel-legend">
        ● STEEL BLADE: plan · schedule · route · generate &nbsp;&nbsp;
        ● GRATER: household · style &nbsp;&nbsp;
        ● SLICER: week &nbsp;&nbsp;
        ● PLASTIC BLADE: execute
      </div>

      <div className="btns">
        {/* Household */}
        <div className="plastic">
          <div className="plabel">Household</div>
          <select
            value={household}
            onChange={(e) => onChange({ ...config, household: e.target.value })}
          >
            <option value="2">Paul-Éric + Charlo</option>
            <option value="3">+ Sophie (3 people)</option>
          </select>
        </div>

        {/* Week of */}
        <div className="plastic">
          <div className="plabel">Week of</div>
          <input
            type="date"
            value={weekStart || getThisMonday()}
            onChange={(e) => onChange({ ...config, weekStart: e.target.value })}
          />
        </div>

        {/* Cooking Style */}
        <div className="plastic">
          <div className="plabel">Cooking style</div>
          <select
            value={cookingStyle}
            onChange={(e) => onChange({ ...config, cookingStyle: e.target.value })}
          >
            <option value="casual">Casual home cook</option>
            <option value="adventurous">Adventurous / multicultural</option>
            <option value="quick">Quick weeknights</option>
          </select>
        </div>

        {/* The Orange Button */}
        <button
          className="go-btn"
          onClick={onGenerate}
          disabled={loading}
          aria-label="Generate meal plan"
        >
          <span className="go-label">
            {loading ? (
              <>
                <span className="spin" />
                Thinking...
              </>
            ) : (
              <>
                Plan
                <br />
                My Week
              </>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}
