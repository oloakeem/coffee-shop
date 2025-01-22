import coffee from "../../assets/coffee.jpg";
import tea from "../../assets/tea.jpg";
import latte from "../../assets/latte.jpg";
import croissant from "../../assets/croissant.jpg";
import Footer from "../../Components/Footer/Footer";
import maleModel from "../../assets/brooke-cagle-WfV4KscvvBQ-unsplash.jpg";
import femaleModel from "../../assets/liam-martens-FYi77wFzOEg-unsplash.jpg";

const HomePage = () => {
  const featuredItems = [
    { name: "Fresh Coffee", image: coffee },
    { name: "Hot Tea", image: tea },
    { name: "Creamy Latte", image: latte },
    { name: "Fresh Croissant", image: croissant },
  ];

  return (
    <>
      <div className="homeGrid">
        {/* HomePage Layout */}
        <div className="homePageLayout">
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis natus
            laudantium soluta!
          </p>
          <div>
            <button className="PrimaryBtn">About Us</button>
            <button className="SecondaryBtn">Menu</button>
          </div>
        </div>
        {/* Featured Items Menu */}
        <div className="FeatPageLayout">
          <h1>Featured Items</h1>
          <div className="featuredPageLayout">
            {featuredItems.map((items) => (
              <div className="featItemCard">
                <img src={items.image} alt={items.name} />
                <h3>{items.name}</h3>
              </div>
            ))}
          </div>
        </div>
        {/* ABOUT US LAYOUT */}
        <div className="AboutUsGrid">
          <div>
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio praesentium adipisci possimus ratione illo porro
              voluptas totam, voluptatibus saepe assumenda libero nulla sed
              dolor corrupti, omnis atque minima in, a enim dolorem vero
              consectetur dolorum officiis accusamus? Sequi, laudantium quae.
            </p>
          </div>
          <div className="CIMAGE">
            <img src={maleModel} alt="" />
          </div>
          <div className="CIMAGE">
            <img src={femaleModel} alt="" />
          </div>
          <div>
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, debitis dolorem repellendus dicta quaerat saepe sed
              quasi praesentium voluptatibus accusamus culpa, illo blanditiis
              mollitia adipisci obcaecati neque accusantium possimus eum nobis,
              sint numquam quidem nulla! Quisquam dolor deleniti ullam
              provident?
            </p>
          </div>
        </div>
        {/* Footer Layout */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default HomePage;
