// Categories.jsx


const Categories = () => {
  const categoriesData = [
    { id: 1, name: 'Furniture', image: './Assets/furniture.jpg' },
    { id: 2, name: 'Kitchen', image: './Assets/kitchen.jpg' },
    { id: 3, name: 'Bathroom', image: './Assets/wc.jpg' },
    { id: 4, name: 'Electronics', image: './Assets/electronics.jpg' },
    { id: 5, name: 'Decor', image: './Assets/decor.jpg' },
    { id: 6, name: 'Miscellaneous', image: './Assets/others.jpg' },
  ];
  
  return (
    <div id="category-container">
      {categoriesData.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <img src={category.image} alt={category.name} className="product-img" />
          {/* Here comes category picture presentation */}
        </div>
      ))}
    </div>
  );
};

export default Categories;
