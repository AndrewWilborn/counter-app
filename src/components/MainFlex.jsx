import Counter from "./Counter.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"

export default function MainFlex(){
    return(
        <div className="mainFlex">
            <Header />
            <Counter />
            <Footer />
        </div>
    );
}