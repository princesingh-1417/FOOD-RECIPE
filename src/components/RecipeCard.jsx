export default function RecipeCard({ title, time, image, category }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', width: '300px', margin: '10px' }}>
      <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '15px' }}>
        <span style={{ fontSize: '0.8rem', background: '#e67e22', color: 'white', padding: '3px 8px', borderRadius: '12px' }}>{category}</span>
        <h3 style={{ margin: '10px 0' }}>{title}</h3>
        <p>⏱️ {time}</p>
        <button style={{ marginTop: '10px', padding: '8px 15px', width: '100%', cursor: 'pointer' }}>View Recipe</button>
      </div>
    </div>
  );
}
