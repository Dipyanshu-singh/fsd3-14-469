import Book from "./components/Book";
import Pen from "./components/Pen";
import fruit from "./components/fruit";




export default function App() {
  return (
    <>
      <h1>Online Book Store</h1>
      <div className="container">
        <Book book={b1} />
        <Book book={b2} />
        <Book book={b1} />
        <Book book={b2} />
        <Pen pen={p1} />
        <Pen pen={p2} />
        <App fruit={fruit} />
      </div>
    </>
  );
}