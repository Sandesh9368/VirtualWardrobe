import './App.css';
import Navbar from './components/Navbar';
import ClothingCard from './components/ClothingCard';

function App() {
  const wardrobe = [
    {
      id: 1,
      name: "Blue Shirt",
      category: "Shirt",
      season: "Summer",
      image: "https://placehold.co/250x300/87CEEB/000000?text=Blue+Shirt"
    },
    {
      id: 2,
      name: "Black Jeans",
      category: "Pants",
      season: "Winter",
      image: "https://placehold.co/250x300/444444/FFFFFF?text=Black+Jeans"
    },
    {
      id: 3,
      name: "White Sneakers",
      category: "Shoes",
      season: "All Seasons",
      image: "https://placehold.co/250x300/F5F5F5/000000?text=Sneakers"
    }
  ];

  return (
    <>
      <Navbar />

      <main>
        <h2>Welcome to your wardrobe</h2>

        <p>
          Organize your clothes, create outfits, and manage your collection.
        </p>

        <div className="cards-container">
          {wardrobe.map((item) => (
            <ClothingCard
              key={item.id}
              name={item.name}
              category={item.category}
              season={item.season}
              image={item.image}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;