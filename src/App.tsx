import RoutesApplication from "./routes";
import OrderProvider from "./context/OrderContext";
import "./styles/global.scss";

function App() {
  return (
    <OrderProvider>
      <RoutesApplication />
    </OrderProvider>
  );
}

export default App;
