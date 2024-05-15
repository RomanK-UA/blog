import styles from "./Layout.module.css";
import Header from "../Header";
import Footer from "../Footer";
export default function Layout({ children }) {
    return (
        <div className={styles.grid}>
            <Header isLoggedIn={false} />
            {children}
            <Footer />
        </div>
    )
}