import styles from "../../styles/Items/Items.module.scss";
import { FiCamera } from "react-icons/fi";
import { Order, ItemProps, TotalProps } from "../../context/types";

const Items = ({ order }: Order) => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Total</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody className={styles.tbodyItem}>
          {order?.items?.map((item: ItemProps) => (
            <tr key={item?.id}>
              <td>{item?.name}</td>
              <td>{item?.quantity}</td>
              <td>
                {item?.sellingPrice.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                })}
              </td>
              <td>
                {order?.totals
                  ?.filter((total: TotalProps) => total.id === "Items")[0]
                  ?.value.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                  })}
              </td>
              <td className={styles.picture}>
                <a href={`${item?.imageUrl}`} target="_blank" rel="noreferrer">
                  <FiCamera />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
