const WidgetLg = () => {
  // reusable button
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="user"
              className="widgetLgImage"
            />{" "}
            <span className="widgetLgName">David Spencer</span>
          </td>
          <td className="widgetLgDate">July 2nd 2021</td>
          <td className="widgetLgAmount">$2100.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="user"
              className="widgetLgImage"
            />{" "}
            <span className="widgetLgName">David Spencer</span>
          </td>
          <td className="widgetLgDate">July 2nd 2021</td>
          <td className="widgetLgAmount">$2100.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="user"
              className="widgetLgImage"
            />{" "}
            <span className="widgetLgName">David Spencer</span>
          </td>
          <td className="widgetLgDate">July 2nd 2021</td>
          <td className="widgetLgAmount">$2100.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="user"
              className="widgetLgImage"
            />{" "}
            <span className="widgetLgName">David Spencer</span>
          </td>
          <td className="widgetLgDate">July 2nd 2021</td>
          <td className="widgetLgAmount">$2100.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
