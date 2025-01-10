import { PolarisProvider } from "./components/providers/PolarisProvider";
import RootLayout from "./layout/root-layout";
import HomePage from "./page/home-page";

function App() {
  return (
    <PolarisProvider>
      <RootLayout>
        <HomePage />
      </RootLayout>
    </PolarisProvider>
  );
}

export default App;
