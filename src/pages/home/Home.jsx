import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../dummyData";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        dataKey="name"
        grid={true}
      />
    </div>
  );
};

export default Home;
