import { useState, useEffect } from "react";

function App() {
  const [dogPic, setDogPic] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogPic(data.message);
      });
  }, []); // use an empty dependencies array, so we only run the fetch request ONCE

  return (
    <div>
      {dogPic ? <img src={dogPic} alt="A  Random Dog" /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
