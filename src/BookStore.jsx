
import Book from "./Book"
export default function BookStore ({books}){
    // console.log(books);
    return (
        <div>
            <h1>Books: {books.length}</h1>
            {
               books.map(book => <Book book={book}></Book>) 
            }
        </div>
    )
}