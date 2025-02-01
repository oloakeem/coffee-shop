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
    { name: "Fresh Coffee", image: coffee },
    { name: "Hot Tea", image: tea },
    { name: "Creamy Latte", image: latte },
    { name: "Fresh Croissant", image: croissant },
  ];

  return (
    <>
      <div className="homeGrid">
        {/* HomePage Layout */}
        <section id="home" className="homePageLayout">
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis natus
            laudantium soluta!
          </p>
          <div>
            <button className="PrimaryBtn">About Us</button>
            <button className="SecondaryBtn">Menu</button>
          </div>
        </section>
        {/* Featured Items Menu */}
        <section id="featured" className="FeatPageLayout">
          <h1>Featured Items</h1>
          <div className="featuredPageLayout">
            {featuredItems.map((items) => (
              <div className="featItemCard">
                <img src={items.image} alt={items.name} />
                <h3>{items.name}</h3>
              </div>
            ))}
          </div>
        </section>
        {/* ABOUT US LAYOUT */}
        <section id="about">
          <h1> About us</h1>
          <div className="AboutUsGrid">
            <div>
              <h2>Our vision</h2>
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
              <h2>Work ethic</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores, debitis dolorem repellendus dicta quaerat saepe sed
                quasi praesentium voluptatibus accusamus culpa, illo blanditiis
                mollitia adipisci obcaecati neque accusantium possimus eum
                nobis, sint numquam quidem nulla! Quisquam dolor deleniti ullam
                provident?
              </p>
            </div>
          </div>
        </section>
        {/* Footer Layout */}
        <section id="contact">
          <Footer></Footer>
        </section>
      </div>
    </>
  );
};

export default HomePage;
