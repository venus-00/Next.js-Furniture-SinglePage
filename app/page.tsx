import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Cards from "./components/cards";
import Services from "./components/services";
import Categories from "./components/categories";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Cards />
      <Services />
      <Footer />
    </div>
  );

}
