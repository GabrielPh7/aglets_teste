import styles from "../../styles/Invoice/Invoice.module.scss";
import { FaFileInvoice } from "react-icons/fa";
import { format, parseISO } from "date-fns";
import { Package } from "../../context/types";

const Invoice = ({ packages }: Package) => {
  const formatDate = (date: string) => {
    return format(parseISO(date), "dd/MM/y HH:mm");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Detalhes da Nota</div>

      {packages.map((invoice: any) => (
        <>
          <div className={styles.detailsInvoice}>
            <span className={styles.titleFieldsInvoice}>Numero da Nota</span>
            <p className={styles.dateFieldsInvoice}>{invoice?.invoiceNumber}</p>
          </div>

          <div className={styles.dateAndValue}>
            <div className={styles.detailsInvoice}>
              <span className={styles.titleFieldsInvoice}>Valor da NF</span>
              <p className={styles.dateFieldsInvoice}>
                {invoice?.invoiceValue.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>

            <div className={styles.detailsInvoice}>
              <span className={styles.titleFieldsInvoice}>Data e Hora</span>
              <p className={styles.dateFieldsInvoice}>
                {formatDate(invoice?.issuanceDate)}
              </p>
            </div>

            <div className={styles.picture}>
              <a
                href={`${invoice.invoiceUrl}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaFileInvoice />
              </a>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Invoice;
