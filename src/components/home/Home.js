import React from "react";
import "./Home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="0"
            title="New Apple AirPods Max - Sky Blue"
            price={659.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81jkMpNHVsL._AC_SL1500_.jpg"
          />
          <Product
            id="1"
            title="SONY PlayStation 4 Slim 1TB Console, Light & Slim PS4 System, 1TB Hard Drive, All the Greatest Games, TV, Music & More"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61OL2zIliML._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="2"
            title="Mario Golf: Super Rush - Nintendo Switch"
            price={39.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/A1v34AZ--WL._SL1500_.jpg"
          />
          <Product
            id="3"
            title="X-VOLSPORT Massage Gaming Chair with Footrest Reclining High Back Computer Chair with Lumbar Support and Headrest, Racing Style Video Gamer Chair Red"
            price={163.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/618hSD2t6+L._AC_SL1075_.jpg"
          />
          <Product
            id="4"
            title="2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray"
            price={128.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81MN9l2nl2S._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="5"
            title="Breville BES870XL Barista Express Espresso Machine, Brushed Stainless Steel, Large"
            price={699.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/81jwrgyJDXL._AC_SL1500_.jpg"
          />
       
          <Product
            id="6"
            title="INSIGNIA NS-50DF710NA21 50-inch Smart 4K UHD - Fire TV, Released 2020"
            price={449.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61+OhM4LEUL._AC_SL1000_.jpg"
          />
           </div>
        <div className="home__row"></div>
        
          <Product
            id="8"
            title="Lenovo Chromebook Flex 5 13 Laptop, FHD (1920 x 1080) Touch Display, Intel Core i3-10110U Processor, 4GB DDR4 Onboard RAM, 64GB eMMC, Intel Integrated Graphics, Chrome OS, 82B80006UX, Graphite Grey"
            price={329.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61qIQqN3blS._AC_SL1100_.jpg"
          />
        </div>
      </div>
    
  );
}

export default Home;
