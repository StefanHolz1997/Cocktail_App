import Header from "../../components/Header/Header";
import { HashLink } from "react-router-hash-link";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Up from "../../assets/svg/up";

// fehlerbehebung dummy
function filler() {
  console.log("Filler");
}

const Home = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -20;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <>
      <Header />
      <Up />
      <section className="filter-grid" id="drinks">
        <HashLink smooth scroll={(el) => scrollWithOffset(el)} to={`/types/gin#drinks`}>
          <div className="filter background-1">
            <h2>Gin</h2>
            <img src="/svg/Gin.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink smooth scroll={(el) => scrollWithOffset(el)} to={`/types/vodka#drinks`}>
          <div className="filter background-2">
            <h2>Vodka</h2>
            <img src="/svg/vodka.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink smooth scroll={(el) => scrollWithOffset(el)} to={`/types/rum#drinks`}>
          <div className="filter background-3">
            <h2>Rum</h2>
            <img src="/svg/rum.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink smooth scroll={(el) => scrollWithOffset(el)} to={`/types/scotch#drinks`}>
          <div className="filter background-4">
            <h2>Scotch</h2>
            <img src="/svg/scotch.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink smooth scroll={(el) => scrollWithOffset(el)} to={`/types/scotch#drinks`}>
          <div className="filter background-4">
        <HashLink
          smooth
          scroll={(el) => scrollWithOffset(el)}
          to={`/types/scotch#drinks`}
        >
          <div className="filter background-5">
            <h2>Tequila</h2>
            <img src="/svg/Tequila.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink smooth scroll={(el) => scrollWithOffset(el)} to={`/types/scotch#drinks`}>
          <div className="filter background-4">
        <HashLink
          smooth
          scroll={(el) => scrollWithOffset(el)}
          to={`/types/scotch#drinks`}
        >
          <div className="filter background-6">
            <h2>Bourbon</h2>
            <img src="/svg/Bourbon.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink smooth scroll={(el) => scrollWithOffset(el)} to={`/types/non-alcoholic#drinks`}>
          <div className="filter background-5">
            <h2>Alkoholfrei</h2>
            <p>Lorem, ipsum dolor.</p>
        <HashLink
          smooth
          scroll={(el) => scrollWithOffset(el)}
          to={`/types/non-alcoholic#drinks`}
        >
          <div className="filter background-1">
            <h2>Alk.frei</h2>
            <img src="/svg/none.jpg" alt="" />
          </div>
        </HashLink>
        <div className="filter background-2 box-question" onClick={filler()}>
          <h2>Zufall</h2>
          <p className="question">?</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
