import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "./layout.css";

export const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}