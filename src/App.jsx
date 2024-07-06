import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <Header />

        <main className="pt-21">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
