import { useEffect, useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import { getUserHistory, getProducts } from '../logic/api'
import { Landing } from "../components/Landing";
import { TechProducts } from "../components/TechProducts";
import { Up } from "../components/Up";
import { Section } from "../components/section/Section";
import History from "../components/history/History";


export const getStaticProps = async () => {

  try {
    const [dataProducts, dataHistory] = await Promise.all([getProducts(), getUserHistory()])

    return {
      props: {
        products: dataProducts,
        history: dataHistory,
        // userInfo: dataUserInfo
      }
    }

  } catch (error) {
    console.log("Error fetching data", error)
  }

}


export default function Home({ products, history }) {

  const { modalHistory } = useGlobal()

  // Boton scroll to top
  const [visibleScroll, setVisibleScroll] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {

    const toggleVisibility = () => {
      if (window.pageYOffset > 50) {
        setVisibleScroll(true);
      } else {
        setVisibleScroll(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [visibleScroll]);
  // End Boton scroll to top


  useEffect(() => {
    // modalHistory && (document.body.style.overflow = 'hidden');
    !modalHistory && (document.body.style.overflow = '');
  }, [modalHistory]);


  return (
    <div className='min-h-screen'>

      {
        modalHistory &&
        <History
          history={history}
        />
      }
      <Landing />
      <Section />
      <TechProducts
        products={products}
      />
      {
        visibleScroll && <Up scrollToTop={scrollToTop} />
      }
    </div>
  )
}
