import './HumanResource.css';
import HumanResourceBox from '../human-resource-box__component/HumanResourceBox'
import DirectList from '../../../../assets/images/Direct Reports - List.png';

function HumanResource() {
  
  return (
    <section className="humanResource">
      <div className="humanResource__title">
        <span id="humanResource__title__bold-text"> Human Resource </span>
        <span id="humanResource__title__light-text"> Onboard new employees, manage the employee lifecycle and measure employee performance. </span>
      </div>

        <HumanResourceBox />
      
      <div className="humanResource__directList">
        <img src={DirectList} />
      </div>

    </section>
  )
}

export default HumanResource;