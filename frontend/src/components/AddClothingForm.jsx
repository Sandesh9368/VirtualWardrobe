function AddClothingForm({
  name,
  setName,
  category,
  setCategory,
  season,
  setSeason,
  addClothingItem,
}) {
  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Clothing Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Shirt">Shirt</option>
        <option value="Pants">Pants</option>
        <option value="Shoes">Shoes</option>
        <option value="Jacket">Jacket</option>
        <option value="T-Shirt">T-Shirt</option>
      </select>

      <select
        value={season}
        onChange={(e) => setSeason(e.target.value)}
      >
        <option value="">Select Season</option>
        <option value="Summer">Summer</option>
        <option value="Winter">Winter</option>
        <option value="Spring">Spring</option>
        <option value="Autumn">Autumn</option>
        <option value="All Season">All Season</option>
      </select>

      <button onClick={addClothingItem}>
        Add Clothing Item
      </button>
    </div>
  );
}

export default AddClothingForm;