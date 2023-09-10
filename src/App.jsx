import { QueryClient, QueryClientProvider } from "react-query";
import GetWeaponsInitializer from "./weapons/components/GetWeaponsInitializer/GetWeaponsInitializer";
import Weapons from "./weapons/components/Weapons/Weapons";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <GetWeaponsInitializer />
      <Weapons />
    </QueryClientProvider>
  );
}

export default App;
