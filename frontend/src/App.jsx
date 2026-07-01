import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ClothingCard from "./components/ClothingCard";

function App() {
  const [wardrobe, setWardrobe] = useState([
    {
      id: 1,
      name: "Blue Shirt",
      category: "Shirt",
      season: "Summer",
      image: "https://placehold.co/250x300?text=Blue+Shirt",
    },
    {
      id: 2,
      name: "Black Jeans",
      category: "Pants",
      season: "Winter",
      image: "https://placehold.co/250x300?text=Black+Jeans",
    },
  ]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [season, setSeason] = useState("");

  const addClothingItem = () => {
    if (!name || !category || !season) return;

    const newItem = {
      id: Date.now(),
      name,
      category,
      season,
      image: `https://placehold.co/250x300?text=${name.replace(" ", "+")}`,
    };

    setWardrobe([...wardrobe, newItem]);

    setName("");
    setCategory("");
    setSeason("");
  };

  return (
    <>
      <Navbar />

      <main>
        <h2>Welcome to your wardrobe</h2>

        <div className="form-container">
          <input
            type="text"
            placeholder="Clothing Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            type="text"
            placeholder="Season"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          />

          <button onClick={addClothingItem}>
            Add Clothing Item
          </button>
        </div>

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