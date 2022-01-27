import { useEffect, useState } from "react";
import { ModuleAeroPay } from "../components/aeropay/ModuleAeroPay";
// import { ButtonCTA } from "../components/ButtonCTA";
// import { ButtonNav } from "../components/ButtonNav";
// import { Dropdown } from "../components/Dropdown";
import { DropdownList } from "../components/dropdown-menu/DropdownList";
import { Landing } from "../components/Landing";
import { Pager } from "../components/pager/Pager";
import { TechProducts } from "../components/TechProducts";
import { Up } from "../components/Up";
// import { PagerButton } from "../components/PagerButton";
import { Section } from "../components/section/Section";
import { WalkCard } from "../components/section/WalkCard";
import { Toast } from "../components/Toast"
import { Selector } from "../components/selector/Selector";
import { NumberSelector } from "../components/NumberSelector";
import { PrimaryCard } from "../components/products/PrimaryCard";
import { ProductCard } from "../components/products/ProductCard";
import { Skeleton } from "../components/products/Skeleton";


import { getUserHistory, getProducts } from '../logic/api'
import History from "../components/history/History";
import { useGlobal } from "../context/GlobalContext";





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
      <div className="mx-auto">

        {
          <TechProducts
            products={products}
          />
        }
      </div>
      {
        visibleScroll && <Up scrollToTop={scrollToTop} />
      }
    </div>
  )
}
