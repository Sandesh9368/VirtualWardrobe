import './App.css';
import Navbar from './components/Navbar';
import ClothingCard from './components/ClothingCard';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <h2>Welcome to your wardrobe</h2>

        <p>
          Organize your clothes, create outfits, and manage your collection.
        </p>

        <button>Add Clothing Item</button>

        <ClothingCard />
        
      </main>
    </>
  );
}

export default App;