import { Button, Card } from "@mui/material";
import logo from "../../logo.svg";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Home = () => {
  const navigate = useNavigate();
  const [idInput, setIdInput] = useState("");

  function setUrl() {
    navigate(`/products/${idInput}`);
  }

  return (
    <div>
      <div className="home">
        <Button className="button-class" variant="contained">
          hello
        </Button>
      </div>
      <div>
        <input onInput={(e) => setIdInput(e.target.value)} value={idInput} />
        <button onClick={setUrl}>Go!</button>
      </div>
    </div>
  );
};
