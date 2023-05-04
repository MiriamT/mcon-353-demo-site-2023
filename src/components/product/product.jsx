import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Product = () => {
  // Get the productId param from the URL.
  const { productId } = useParams();
  // now you can use productId in your API calls :)

  const navigate = useNavigate();
  const [idInput, setIdInput] = useState("");

  function setUrl() {
    navigate(`/products/${idInput}`);
  }

  return (
    <div>
      <div>product id: {productId}</div>

      <div>
        <input onInput={(e) => setIdInput(e.target.value)} value={idInput} />
        <button onClick={setUrl}>Go!</button>
      </div>
    </div>
  );
};
