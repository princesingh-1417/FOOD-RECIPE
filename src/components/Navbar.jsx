import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import './Navbar.css'; // Add basic CSS for flexbox styling

export default function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    console.log("Searching for:", query);
    // Future implementation: Redirect to /search?q=query
  };

  return (
    <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f8f9fa' }}>
      <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: '#e67e22' }}>
        FlavorFinder
      </Link>
      
      <form onSubmit={handleSearch} style={{ display: 'flex' }}>
        <input name="search" type="text" placeholder="Search recipes..." style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <button type="submit" style={{ marginLeft: '5px', padding: '0.5rem 1rem' }}>Search</button>
      </form>

      <div>
        {user ? (
          <>
            <span style={{ marginRight: '1rem' }}>Hi, {user.email.split('@')[0]}</span>
            <button onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <>
            <span style={{ marginRight: '1rem' }}>Guest User</span>
            <Link to="/auth"><button>Sign In / Sign Up</button></Link>
          </>
        )}
      </div>
    </nav>
  );
}
