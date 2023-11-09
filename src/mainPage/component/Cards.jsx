import ProductCard from './ProductCard'

function App() {
  return (<div className='container '>
    <h2 className='grid__h2'>Хиты продаж</h2>
    <div className="grid__card">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
      </div>
   </div>
  );
}

export default App;