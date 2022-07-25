import { useContext } from "react";
import { useParams } from "react-router-dom";
import { OrderContext } from "../../context/OrderContext";
import Items from "../Items/index";
import Invoice from "../Invoice/index";

import styles from "../../styles/OrderDetails/OrderDetails.module.scss";

const OrderDetails = () => {
  const { getOrderId } = useContext<any>(OrderContext);
  const params = useParams();
  const order = getOrderId(params.orderId);

  return (
    <div className={styles.container}>
      <div className={styles.header}>Dados do cliente</div>
      <div className={styles.content}>
        <span>Nome</span>
        <p>{`${order[0]?.clientProfileData?.firstName} ${order[0]?.clientProfileData?.lastName}`}</p>
      </div>
      <div className={styles.content}>
        <div className={styles.contentDiv}>
          <span>Documento</span>
          <p>{order[0]?.clientProfileData?.document}</p>
        </div>

        <div className={styles.contentDiv}>
          <span>Tipo de Documento</span>
          <p>{order[0]?.clientProfileData?.documentType}</p>
        </div>
      </div>

      <div className={styles.content}>
        <span>Telefone</span>
        <p>{order[0]?.clientProfileData?.phone}</p>
      </div>

      <div className={styles.content}>
        <span>Email</span>
        <p>{order[0]?.clientProfileData?.email}</p>
      </div>

      <div className={styles.header}>Local de Entrega</div>
      <div className={styles.content}>
        <span>Rua</span>
        <p>{`${order[0]?.shippingData?.address?.street}, ${order[0]?.shippingData?.address?.number}`}</p>
      </div>

      <div className={styles.content}>
        <span>Bairro</span>
        <p>{order[0]?.shippingData?.address?.neighborhood}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.contentDiv}>
          <span>Cidade</span>
          <p>{order[0]?.shippingData?.address?.city}</p>
        </div>

        <div className={styles.contentDiv}>
          <span>UF</span>
          <p>{order[0]?.shippingData?.address?.state}</p>
        </div>
      </div>

      <div className={styles.content}>
        <span>CEP</span>
        <p>{order[0]?.shippingData?.address?.postalCode}</p>
      </div>

      <Items order={order[0]} />

      {order[0]?.packageAttachment?.packages?.length > 0 && (
        <Invoice packages={order[0]?.packageAttachment?.packages} />
      )}
    </div>
  );
};

export default OrderDetails;
