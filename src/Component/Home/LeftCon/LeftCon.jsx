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
        {catagories.map((c) => (
          <p key={c.id}>
            <Link to="" className="text-decoration-none">
              {c.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftCon;
