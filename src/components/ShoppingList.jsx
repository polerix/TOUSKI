const CAT_LABELS = {
  produce: 'Produce',
  dairy: 'Dairy',
  meat: 'Meat & Fish',
  pantry: 'Pantry',
  other: 'Other',
}

export default function ShoppingList({ plan }) {
  if (!plan?.shopping_list?.length && !plan?.chef_notes) return null

  return (
    <>
      {plan.shopping_list?.length > 0 && (
        <div className="shop">
          <div className="field-label">
            {plan.shopping_list.length} items to pick up
          </div>
          <div className="shop-grid">
            {plan.shopping_list.map((item, i) => (
              <div className="shop-item" key={i}>
                <div className="shop-cat">
                  {CAT_LABELS[item.category] || 'Other'}
                </div>
                <div className="shop-name">{item.item}</div>
                {item.reason && (
                  <div className="shop-why">{item.reason}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {plan.chef_notes && (
        <div className="chef-notes">{plan.chef_notes}</div>
      )}
    </>
  )
}
