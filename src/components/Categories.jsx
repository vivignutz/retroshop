// Categories.jsx
import React from "react";

const Categories = () => {
    const categoriesData = [
      { id: 1, name: 'Furniture' },
      { id: 2, name: 'Kitchen' },
      { id: 3, name: 'Bathroom' },
      { id: 4, name: 'Electronics' },
      { id: 5, name: 'Decor' },
      { id: 6, name: 'Miscellaneous' },
    ];
  
    return (
      <div>
        {/* Rendering categories */}
        {categoriesData.map((category) => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            {/* Here comes category picture presentation */}
          </div>
        ))}
      </div>
    );
  };
  
  export default Categories;
