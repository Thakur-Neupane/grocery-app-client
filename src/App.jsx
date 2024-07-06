import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <Header />

        <main className="pt-20 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
