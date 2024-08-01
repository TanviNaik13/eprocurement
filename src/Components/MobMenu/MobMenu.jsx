import Card from "antd/es/card/Card";
import { Meta } from "antd/es/list/Item";
import './MobMenu.css'
const MobMenu = () => {
  const func2 = (info) => {
    return (
      <>
        <Card
          hoverable
          className="card"
          
        >
          <Meta title={info} />
        </Card>
      </>
    );
  };
  return (
    <>
    <h2>Menu</h2>
    <div className="maincard">
      
      {func2("Tenders by location")}
      {func2("Tenders by Organisation")}
      {func2("Tenders by Classification")}
      {func2("Tenders in Archive")}
      {func2("Tenders Status")}
      {func2("Cancelled/Retendered")}
      {func2("Downloads")}
      {func2("Announcements")}
      {func2("Debartment List")}
      {func2("Awards")}
      {func2("Site Compatability")}
    </div>
    </>
  );
};

export default MobMenu;
