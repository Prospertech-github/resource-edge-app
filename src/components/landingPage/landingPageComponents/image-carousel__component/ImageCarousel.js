import './ImageCarousel.css';
import PrivateEstateImage from '../../../../assets/images/privateEstate.png';
import UNNImage from '../../../../assets/images/unn.png';
import TeneceImage from '../../../../assets/images/tenece.png';
import GenesysImage from '../../../../assets/images/genesys.png';

function ImageCarousel() {
  
  return (
    <div className="imageContainer">
      <div className="imageSubContainer__one">
        <div>
          <img src={UNNImage} />
        </div>
      
        <div>
          <img src={TeneceImage}  id="tenece"/>
        </div>
     </div>
        
      <div className="imageSubContainer__two">
        <div>
          <img src={PrivateEstateImage} />
        </div>
      
        <div>
          <img src={GenesysImage} />
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel;
