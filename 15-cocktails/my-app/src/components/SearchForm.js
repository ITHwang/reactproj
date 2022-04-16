export default function SearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" name="name" id="name" />
        </div>
      </form>
    </section>
  );
}
