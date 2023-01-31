import React from "react";
import "../styles/Home.scss";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>FRONT-DEV</h1>
          <p>ALL your frontend needs</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div className="description">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            suscipit itaque voluptatem deserunt accusantium omnis eveniet autem
            iste voluptates error vitae, tenetur quasi non velit corrupti sint
            iure, molestiae provident.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            natus sit, pariatur doloribus tempora blanditiis ipsum mollitia,
            voluptate vel commodi beatae non! Sed soluta, esse alias reiciendis
            consequuntur itaque veniam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem ratione adipisci harum officia non illo.
            Suscipit distinctio ab voluptatum, enim perferendis, fugiat
            repellendus amet eum commodi quos dolor. Reiciendis, eligendi?Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta
            quidem mollitia et numquam, omnis in fugit facere minima ipsam
            tempore vel odio quibusdam unde nostrum magni ullam vero nobis! At
            commodi, in aliquam, sit cupiditate nihil vel cum ipsa deleniti vero
            dolore ipsam ea! Inventore ullam neque perferendis vel dolor saepe,
            corporis dicta rem expedita quis aliquid voluptas facilis!
            Exercitationem unde facilis alias. Laborum exercitationem obcaecati
            esse eaque doloremque harum animi nihil facere officiis illo
            nesciunt laboriosam similique quo consequuntur adipisci quasi
            molestiae nulla fugit, nobis reprehenderit natus consequatur?
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
