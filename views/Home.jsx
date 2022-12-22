const React = require("react");
const DefaultLayout = require("./Default.jsx");

class Home extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <link rel="stylesheet" type="text/css" href="../styles/home.css" />
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/toys">Toys</a></li>
                            <li><a href= "/toys/new">Create</a></li>
                        </ul>
                    </nav>
                    <h1>Toys For EveryOne</h1>
                </header>
                <section className="triple-section">
                <figure>
                        <img src= "https://m.media-amazon.com/images/G/01/US-hq/2022/img/Toys_Internet/XCM_CUTTLE_1474116_2605771_500x500_2X_en_US._SS400_QL85_.jpg" alt="image1"></img>
                        <figcaption>Disney Princess</figcaption>
                    </figure>
                    
                    
                    <figure>
                        <img src= "https://m.media-amazon.com/images/I/51tyYnu2h5L._AC_SY164_.jpg" alt="image3"></img>
                        <figcaption>Games for Teens</figcaption>
                    </figure>
                    <figure>
                        <img src= "https://m.media-amazon.com/images/G/01/US-hq/2022/img/Toys_Internet/XCM_CUTTLE_1474128_2605819_500x500_2X_en_US._SS400_QL85_.jpg" alt="image4"></img>
                        <figcaption>Pretend Play</figcaption>
                    </figure>
                    <figure>
                        <img src= "https://m.media-amazon.com/images/I/614j4rpFsxL._AC_SY164_.jpg" alt="image5"></img>
                        <figcaption>For Young and Old</figcaption>
                    </figure>
                    <figure>
                        <img src= "https://m.media-amazon.com/images/G/01/US-hq/2022/img/Toys_Internet/XCM_CUTTLE_1474116_2605777_500x500_2X_en_US._SS400_QL85_.jpg" alt="image2"></img>
                        <figcaption>PAW Patrol</figcaption>
                    </figure>
                    
                </section>
                
                <footer>
                    123 imageRoad Irving, TX | 333-333-3333 | us@me.com
                </footer>
        
            </DefaultLayout>

        );
    }
}

module.exports = Home;