import './AdminLogistics.css';
import AdminLogisticsDirectList from '../../assets/images/directreport-2.png';
import FinanceDirectList from '../../assets/images/financedirectlist.png';
import ImageCarousel from '../image-carousel__component/ImageCarousel';



function AdminLogistics() {
  
  return (
    <div>
      <section className="adminLogistics">
        <div className=" adminLogistics__texts">
          <div className="adminLogistics__title">
            <p id="adminLogistics__title__bold-text"> Admin &amp; Logistics </p>
            <p id="adminLogistics__title__light-text"> Manage and track company assets as well as logistics for travelling employees </p>
          </div>

          <div className="adminLogistics__aside-texts">
            <div className="aside-text__one">
              <i class="fas fa-luggage-cart aside-icon" id="travel-icon"></i>

              <div className="adminLogistics__aside-texts__contents">
                <p id="aside-texts__contents__bold-text"> Travel &amp; Logistics </p>
                <p id="aside-texts__contents__small-text"> Make travel requests, get approvals, and have access to travel information. </p>
              </div>
            </div>

            <div className="aside-text__two">
              <i class="fas fa-briefcase aside-icon" id="asset-icon"></i>

              <div className="adminLogistics__aside-texts__contents">
                <p id="aside-texts__contents__bold-text"> Asset Management </p>
                <p id="aside-texts__contents__small-text"> Manage the acquisition, assignment, and disposition of assets seamlessly. </p>
              </div>
            </div>
          </div>
        </div>

      <div className="adminLogistics__directList">
        <img src={AdminLogisticsDirectList} />
      </div>

      <div className="adminLogistics__second-section">
        <div className=" adminLogistics__texts">
          <div className="adminLogistics__title">
            <p id="adminLogistics__title__bold-text"> Finance </p>
            <p id="adminLogistics__title__light-text"> Generate invoices, track expenditure, and manage complex payrolls for multiple teams and companies </p>
          </div>

          <div className="adminLogistics__aside-texts">
            <div className="aside-text__one">
                <i class="fas fa-file-invoice aside-icon" id="voucher-icon"></i>

              <div className="adminLogistics__aside-texts__contents">
                <p id="aside-texts__contents__bold-text"> RE Vouchers </p>
                <p id="aside-texts__contents__small-text"> Track and manage expenditure for multiple teams across your organisation using Resource Edge Vouchers </p>
              </div>
            </div>

            <div className="aside-text__two">
                <i class="fas fa-envelope-open-text aside-icon" id="payroll-icon"></i>

              <div className="adminLogistics__aside-texts__contents">
                <p id="aside-texts__contents__bold-text"> Payroll </p>
                <p id="aside-texts__contents__small-text"> Our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes. </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="adminLogistics__directList">
          <img src={FinanceDirectList} />
        </div>          

      </div>

     <ImageCarousel />
        
      </section>
    </div>
  )
}

export default AdminLogistics