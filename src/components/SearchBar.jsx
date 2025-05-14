import styles from "../css/SearchBar.module.css";

function SearchBar({ textHandler, submitHandler, text }) {
  return (
    <div className={styles.container}>
      <form
        onSubmit={submitHandler}
        action="submit"
        className={styles.searchForm}
      >
        <input
          className={styles.search}
          id="search"
          type="text"
          placeholder="Search for music..."
          value={text}
          onChange={textHandler}
        />
        <button className={styles.searchBtn}>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
