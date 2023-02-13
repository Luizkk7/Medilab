import Carousel from 'react-bootstrap/Carousel';
import img2 from "./img/img2.jpg"
import img3 from "./img/img3.jpg"
import img4 from "./img/img4.jpg"

function Home() {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Medilab</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={img3}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Medilab</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={img4}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      
    </div>
  );
}

export default Home;
