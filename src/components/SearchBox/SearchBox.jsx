import c from "./SearchBox.module.css";

const SearchBox = ({ setFiltered }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={(e) => setFiltered(e.target.value)}
        className={c.input}
      />
    </div>
  );
};

export default SearchBox;
