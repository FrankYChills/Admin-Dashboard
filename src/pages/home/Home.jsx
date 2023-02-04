import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { useEffect, useState } from "react";
import axios from "axios";

import { userData } from "../../dummyData";

const Home = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [usersStats, setUserStats] = useState([]);

  useEffect(() => {
    console.log("trigs");
    const getStats = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/api/users/stats"
        );
        var sortedMonths = res.data.data.sort((a, b) => b._id - a._id);
        sortedMonths.map((item) =>
          setUserStats((prevdata) => [
            ...prevdata,
            { name: months[item._id - 1], "New Users": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, []);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={usersStats}
        title="User Analytics"
        dataKey="New Users"
        grid={true}
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
