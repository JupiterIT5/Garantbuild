import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import About from "../components/Home/About/About";
import Experience from "../components/Home/Experience/Experience";
import Quality from "../components/Home/Quality/Quality";
import Services from "../components/Home/Services/Services";
import Steps from "../components/Steps/Steps";
import cl from "./style.module.scss";

export default function Home() {

  return (
    <div className={cl.container}>
      <Header />
      <About />
      <Services />
      <Quality />
      <Experience />
      <Steps />
      <Footer />
    </div>
  );
}
