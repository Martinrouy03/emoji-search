import data from "../assets/data.json";
import Line from "./Line";
import { useState } from "react";

const Search = () => {
  const [emoji, setEmoji] = useState("");

  return (
    <>
      <header>
        <h1>😎 Emoji Search 😎</h1>
        <input
          type="text"
          placeholder="what emoji are you looking for?"
          onChange={(e) => {
            data.map((elem) => {
              if (elem.keywords.split(" ").includes(e.target.value)) {
                console.log(elem.title);
                setEmoji(elem);
              }
            });
          }}
        />
      </header>
      <main>
        <Line title={emoji.title} symbol={emoji.symbol} />
      </main>
    </>
  );
};
export default Search;
