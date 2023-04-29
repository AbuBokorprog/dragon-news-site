import { key } from "localforage";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftCon = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h3>All Category</h3>
      <div>
        {catagories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-secondary"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftCon;
