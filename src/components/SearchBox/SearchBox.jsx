import css from "./SearchBox.module.css";

const SearchBox = ({ searchValue, handleSearch }) => {
  return (
    <>
      <label className={css.label}>
        Fine contacts by name
        <input
          className={css.input}
          type="text"
          name="search"
          value={searchValue}
          onChange={handleSearch}
        />
      </label>
    </>
  );
};

export default SearchBox;
