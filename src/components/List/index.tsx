import { useContext } from "react";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import styles from "../../styles/List/List.module.scss";
import formatPrice from "../../util/formatPrice";
import { OrderProps } from "../../context/types";
import { OrderContext } from "../../context/OrderContext";

const List = () => {
  const { orders } = useContext<any>(OrderContext);
  const formatDate = (date: any) => {
    return format(parseISO(date), "dd/MM/y");
  };

  const getTotalValue = (orders: OrderProps[]) => {
    const result = orders.reduce((totalValue: any, order: any) => {
      return totalValue + order.value;
    }, 0);

    return result;
  };

  return (
    <div className={styles.list}>
      <table>
        <thead>
          <tr>
            <th>Numero pedido</th>
            <th>Status do pedido</th>
            <th>Data do pedido</th>
            <th>Valor total do pedido</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: OrderProps) => (
            <tr key={order.orderId} className={styles.trbody}>
              <td>
                <Link to={`order/${order.orderId}`} target="_blank">
                  {order.orderId}
                </Link>
              </td>
              <td>{order.statusDescription}</td>
              <td className={styles.date}>{formatDate(order.creationDate)}</td>
              <td className={styles.value}>{formatPrice(order.value)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>
              {getTotalValue(orders).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              })}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default List;
