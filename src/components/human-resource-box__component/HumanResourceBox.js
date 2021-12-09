import './HumanResourceBox.css'

function HumanResourceBox() {
  const details = [
    {
      boldText: 'Employee Management',
      smalltext: 'From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team.'
    },
    {
      boldText: 'Performance Management',
      smalltext: 'Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews.'
    },
    {
      boldText: 'Paid time off',
      smalltext: 'Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance.'
    }
  ]



  return (
    <div className="resource-box-container">
      <div className="resource-box">
        <div className="resource-box__content">
          <i className="fas fa-users first-icon" id="first-icon"></i>

          <div className="resource-box__content__text"> 
            <p id="resource-box__content__bold-text"> {details[0].boldText} </p>
            <p id="resource-box__content__small-text"> {details[0].smalltext}  </p>
          </div>
        </div>
      </div>

      <div className="resource-box">
        <div className="resource-box__content">
          <i className="fas fa-users first-icon" id="first-icon"></i>

          <div className="resource-box__content__text">
            <p id="resource-box__content__bold-text"> {details[1].boldText} </p>
            <p id="resource-box__content__small-text"> {details[1].smalltext}  </p>
          </div>
        </div>
      </div>

      <div className="resource-box">
        <div className="resource-box__content">
          <i className="fas fa-users first-icon" id="first-icon"></i>

          <div className="resource-box__content__text">
            <p id="resource-box__content__bold-text"> {details[2].boldText} </p>
            <p id="resource-box__content__small-text"> {details[2].smalltext}  </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HumanResourceBox;