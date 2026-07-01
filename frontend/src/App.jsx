import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ClothingCard from "./components/ClothingCard";
import AddClothingForm from "./components/AddClothingForm";

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
  const [image, setImage] = useState("");

  const addClothingItem = () => {
    if (!name || !category || !season || !image) return;

    const newItem = {
      id: Date.now(),
      name,
      category,
      season,
      image: image,
    };
    
    setWardrobe([...wardrobe, newItem]);

    setName("");
    setCategory("");
    setSeason("");
    setImage("");
  };

  return (
    <>
      <Navbar />

      <main>
        <h2>Welcome to your wardrobe</h2>

        <AddClothingForm
          name={name}
          setName={setName}
          category={category}
          setCategory={setCategory}
          season={season}
          setSeason={setSeason}
          image={image}
          setImage={setImage}
          addClothingItem={addClothingItem}
        />

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