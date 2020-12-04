import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";

export default function PageLayout({ children }) {
  return (
    <>
      <Sidebar>
        <Menu />
      </Sidebar>
      {children}
    </>
  );
}
