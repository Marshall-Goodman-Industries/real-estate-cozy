import Footer from "./Footer";
import MainNavigation from "./MainNavigation.js";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
