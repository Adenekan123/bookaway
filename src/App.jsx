import { useEffect } from "react";
import { getDomains } from "./utils/axios/axios.utils";

import Navigation from "./routes/navigation/navigation.component";
import Hotelsearch from "./components/hotelsearch/hotelsearch.component";
const App = () => {
  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const domains = await getDomains();
        console.log(domains);
      } catch (e) {
        console.log(e);
      }
    };

    fetchDomains();
  });
  return (
    <div className="App">
      <Navigation />
      <Hotelsearch />
    </div>
  );
};

export default App;
