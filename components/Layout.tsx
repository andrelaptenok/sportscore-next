import Header from "./Header/Header";
import Footer from "./Footer";
import Navigate from "./Navigate/Navigate";

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <Header />
      <Navigate />
      {children}
      {/*<Footer />*/}
    </div>
  );
};
export default Layout;
