import NotificationCont from "../../components/Dashbord/notifications-content";
import OrderDashHead from "../../components/Dashbord/mb-sidebar";

const Dashbord = () => {
  return (
    <section className="dashbord-page">
    <OrderDashHead />
    <div className="dashbord-body">
      <div className="order_histroy_content">
        <div className="container">
          <NotificationCont />
        </div>
      </div>
    </div>
  </section>
  );
};
export default Dashbord;