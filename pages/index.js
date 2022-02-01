import { useEffect, useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import { getProducts, getUserInfo } from '../logic/api'
import { Landing } from "../components/Landing";
import { TechProducts } from "../components/TechProducts";
import { Up } from "../components/Up";
import { Section } from "../components/section/Section";
import History from "../components/history/History";
import Notifications from "../components/Notifications";

export const getStaticProps = async () => {

  try {
    const [products, userInfo] = await Promise.all([getProducts(), getUserInfo()])
    // const dataProducts = await getProducts()


    return {
      props: {
        products,
        userInfo
      }
    }

  } catch (error) {
    console.log("Error fetching data", error)
  }

}


export default function Home({ products, userInfo }) {

  const { modalHistory, setPoints, setUser } = useGlobal()

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
    !modalHistory && (document.body.style.overflow = '');
  }, [modalHistory]);


  useEffect(() => {
    setUser(userInfo.name)
    setPoints(userInfo.points)
  }, [])

  return (
    <div className='min-h-screen'>

      {
        modalHistory && <History />
      }
      <Landing />
      <Section />
      <TechProducts
        products={products}
      />
      {
        visibleScroll && <Up scrollToTop={scrollToTop} />
      }
      <Notifications />
    </div>
  )
}
