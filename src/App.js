import "./styles.css";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import bookData from "./bookData";

export default function App() {
  const cardElement = bookData.map((data) => {
    return <Card key={data.id} data={data} />;
  });
  return (
    <div className="container">
      <Header />
      {cardElement}
      <Footer />
    </div>
  );
}
