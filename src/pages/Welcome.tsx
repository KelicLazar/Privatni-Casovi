import Story from "../components/Story/Story";
import Navigation from "../components/Navigation/Navigation";
import SearchBar from "../components/FormElements/SearchBar";
import PromoList from "../components/Promo/PromoList";
import { promoList } from "../utils/data";
import Footer from "../components/Footer/Footer";

const Welcome = () => {
  return (
    <>
      <Story>
        <Navigation />

        <div className="welcome-text">
          <h1>Otkrijte svet personalizovanog učenja, bilo kad i bilo gde.</h1>
          <h3>
            <em>Časovi koji odgovaraju Vašim potrebama i tempu.</em>
          </h3>

          <SearchBar />
        </div>
      </Story>
      <PromoList list={promoList} />
      <div className="search-bar-section">
        <h4>Pretraži časove po predmetu</h4>
        <SearchBar />
      </div>
      <Footer />
    </>
  );
};

export default Welcome;
