import './HumanResource.css';
import HumanResourceBox from '../human-resource-box__component/HumanResourceBox'

function HumanResource() {
  
  return (
    <section className="humanResource">
      <div className="humanResource__title">
        <span id="humanResource__title__bold-text"> Human Resource </span>
        <span id="humanResource__title__light-text"> Onboard new employees, manage the employee lifecycle and measure employee performance. </span>
      </div>

      <div className="humanResource__box">
        <HumanResourceBox />
      </div>

    </section>
  )
}

export default HumanResource;