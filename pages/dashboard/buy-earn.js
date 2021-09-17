import PointCont from "../../components/Dashbord/point-content";
import OrderDashHead from "../../components/Dashbord/mb-sidebar";

const Dashbord = () => {
  return (
    <section className="dashbord-page">
    <OrderDashHead />
    <div className="dashbord-body">
      <div className="order_histroy_content">
        <div className="container">
          <PointCont />
        </div>
      </div>
    </div>
  </section>
  );
};
export default Dashbord;