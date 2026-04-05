import Navbar from '../components/Navbar';
import RecipeCard from '../components/RecipeCard';

export default function Home() {
  const mockRecipes = [
    { id: 1, title: 'Classic Butter Chicken', time: '45 mins', category: 'Indian', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80' },
    { id: 2, title: 'Avocado Toast', time: '10 mins', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>Welcome to FlavorFinder</h2>
        <p>Explore recipes as a guest or sign in to save your favorites!</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '2rem' }}>
          {mockRecipes.map(recipe => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}
