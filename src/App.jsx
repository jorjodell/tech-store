import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <section>
        <h2>New Products</h2>
        <div className="list">
          <Card
            isInStock={true}
            title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            image="https://www.pngplay.com/wp-content/uploads/1/Laptop-PNG-Image.png"
            priceOld={499}
            price={499}
          />
          <Card
            isInStock={false}
            title="Asus Zenbook 15 EL-TU"
            image="https://www.pngplay.com/wp-content/uploads/1/Laptop-PNG-Image.png"
            priceOld={1000}
            price={899}
          />
          <Card
            isInStock={false}
            title="Asus Zenbook 15 EL-TU"
            image="https://www.pngplay.com/wp-content/uploads/1/Laptop-PNG-Image.png"
            priceOld={1000}
            price={899}
          />
          <Card
            isInStock={false}
            title="Asus Zenbook 15 EL-TU"
            image="https://www.pngplay.com/wp-content/uploads/1/Laptop-PNG-Image.png"
            priceOld={1000}
            price={899}
          />
          <Card
            isInStock={false}
            title="Asus Zenbook 15 EL-TU"
            image="https://www.pngplay.com/wp-content/uploads/1/Laptop-PNG-Image.png"
            priceOld={1000}
            price={899}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
