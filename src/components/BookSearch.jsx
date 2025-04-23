import React, { useState } from "react";
import { books } from "../assets/books";
import BookCard from "./BookCard";

const BookSearch = () => {
  const [filters, setFilters] = useState({
    title: "",
    author: "",
    country: "",
    language: "",
    pages: "",
    year: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value.toLowerCase(),
    }));
  };

  const filteredBooks = books.filter((book) => {
    return (
      (!filters.title || book.title.toLowerCase().includes(filters.title)) &&
      (!filters.author || book.author.toLowerCase().includes(filters.author)) &&
      (!filters.country || book.country.toLowerCase().includes(filters.country)) &&
      (!filters.language || book.language.toLowerCase().includes(filters.language)) &&
      (!filters.pages || book.pages.toString().includes(filters.pages)) &&
      (!filters.year || book.year.toString().includes(filters.year))
    );
  });

  return (
    <div>
      <h3>Book Catalog</h3>
      <div style={{ marginBottom: "20px" }}>
        
        <input
          type="text"
          name="author"
          data-testid="author"
          placeholder="Filter by author"
          value={filters.author}
          onChange={handleFilterChange}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          name="country"
          data-testid="country"
          placeholder="Filter by country"
          value={filters.country}
          onChange={handleFilterChange}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          name="language"
          data-testid="language"
          placeholder="Filter by language"
          value={filters.language}
          onChange={handleFilterChange}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          name="pages"
          data-testid="pages"
          placeholder="Filter by pages"
          value={filters.pages}
          onChange={handleFilterChange}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          name="year"
          data-testid="year"
          placeholder="Filter by year"
          value={filters.year}
          onChange={handleFilterChange}
          style={{ marginRight: "10px", padding: "5px" }}
        />
      </div>
      <div>
        {filteredBooks.map((book, index) => (
          <BookCard key={index} book={book} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;