import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/index.css'
import '../styles/style.css'
const Carrousel = () => {
    return (
      <div  id="carouselExampleFade" className="arousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/IMG/metal death scream.jpg" className="d-block w-100 " alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img src="/IMG/the-bar.jpg" className="d-block w-100" alt="Second slide"/>
          </div>
            <div className="carousel-item">
            <img src="/IMG/slider 1.jpg" className="d-block w-100" alt="Third slide"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
);
}


export default Carrousel;
