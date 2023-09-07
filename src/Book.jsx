export default function Books({ book }) {
// console.log(book);
    return (
        <div>
            <h3>Book Name: {book.bookName}</h3>
            <h3>Book Price: {book.bookPrice}</h3>
        </div>
    )
}