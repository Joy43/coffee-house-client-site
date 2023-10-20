import { Outlet } from "react-router-dom/dist/umd/react-router-dom.development";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const RootlayOut = () => {
    return (
        <div className="max-6xl p-6 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootlayOut;