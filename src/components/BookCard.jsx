import React from 'react'

function BookCard(props) {
  const { book, index } = props
  return (
    <div key={index} data-testid="book" style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
    <strong>Title:</strong> {book.title} <br />
    <strong>Author:</strong> {book.author} <br />
    <strong>Country:</strong> {book.country} <br />
    <strong>Language:</strong> {book.language} <br />
    <strong>Pages:</strong> {book.pages} <br />
    <strong>Year:</strong> {book.year}
  </div>
  )
}

export default BookCard