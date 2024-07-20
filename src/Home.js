import React from "react";
import "./Home.css"
import Product from "./Product";

function Home(){
    return(
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD24/GW/PDED/PDED_PC-hero-new-kv_-3000x1200_2._CB568700019_.jpg" alt="amazon pic"/>
            

                <div className="home__row">
                    <Product 
                    id="12321341"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                    price={29.99}
                    image='https://m.media-amazon.com/images/I/61BFOf9Ap-L._AC_UF1000,1000_QL80_.jpg'
                    rating={5} />

                    <Product 
                    id="12321342"
                    title="Kenwood Kitchen Machine| KMix - KMX750RD -1000W|5L Mixing Bowl|3 Attachments - K-Beater, Whipping Tool & Dough Kneading Tool |Metal Body| 1 Year Warranty| Red| Free Demo & Installation"
                    price={239}
                    image='https://m.media-amazon.com/images/I/711flZUJCcL._SX425_.jpg'
                    rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                    id="12321322"
                    title="Samsung Odyssey G3 Gaming Monitor 60cm (24 inches), FHD 1920 X 1080, 165 Hz, 1ms(MPRT), AMD Freesync, DP, HDMI, Height, Tilt, Pivot Adjust Stand, Bezel Less, Eye-Saver (LS24AG320NWXXL, Black)"
                    price={199.99}
                    image="https://m.media-amazon.com/images/I/91f6SmYBPLL._SL1500_.jpg"
                    rating={4}/>

                    <Product 
                    id="12321300"
                    title="Amazon Echo Dot (5th Gen) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor, Alexa and Bluetooth| Blue"
                    price={69.99}
                    image="https://m.media-amazon.com/images/I/81lGxS2ZisL._SY450_.jpg"
                    rating={5}/>
                    
                    <Product 
                    id="12321333"
                    title="Apple iPad Pro 11″ (M4): Ultra Retina XDR display, 256GB, Landscape 12MP front camera / 12MP back camera, LiDAR Scanner, Wi-Fi 6E, Face ID, all-day battery life, Standard Glass — Space Black"
                    price={1169.49}
                    image='https://m.media-amazon.com/images/I/61G6WfvA9vL._SX679_.jpg'
                    rating={4}/>
                </div>

                <div className="home__row">
                    <Product 
                    id="12321344"
                    title='LG 49" Curved Ultragear Dual Qhd (5120 X 1440) @1Ms, 240Hz Gaming Monitor with Vesa Displayhdr 1000, Premium Gaming LCD Display, Amd Freesync, Dci-P3 95% (Typ.), Hdmi, Dp, Speakers, 49Gr85Dc (Black)'
                    price={699.99}
                    image='https://m.media-amazon.com/images/I/71vVjaH4O2L._SX679_.jpg'
                    rating={4}/>
                </div>
            </div>
        </div>
    )
}

export default Home