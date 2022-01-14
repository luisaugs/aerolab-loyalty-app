
import { AeroCard } from "../components/AeroCard";
import { AeroPay } from "../components/AeroPay";
import { ModuleAeroPay } from "../components/ModuleAeroPay";
// import { ButtonCTA } from "../components/ButtonCTA";
// import { ButtonNav } from "../components/ButtonNav";
// import { Dropdown } from "../components/Dropdown";
import { useEffect, useState } from "react";
import { DropdownList } from "../components/dropdown-menu/DropdownList";
// import { Landing } from "../components/Landing";
import { Pager } from "../components/pager/Pager";
import { TechProducts } from "../components/TechProducts";
import { Up } from "../components/Up";
// import { PagerButton } from "../components/PagerButton";
// import { Section } from "../components/Section";
// import { Toast } from "../components/Toast";
// import { WalkCard } from "../components/WalkCard";



export const getStaticProps = async () => {

  const url = 'https://coding-challenge-api.aerolab.co/products';
  const token = process.env.TOKEN
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
  const data = await res.json()
  // console.log(data)

  return {
    props: {
      products: data
    }
  }

}

const walkOne = [
  {
    id: 1,
    srcPic: "/assets/images/walkthroug-1-desktop.png",
    srcIco: "/assets/icons/walkthrough-1.svg",
    title: "super titulo",
    body: "Lalalalal lalalalal lalalalla llala"
  },
  {
    id: 2,
    srcPic: "/assets/images/walkthroug-2-desktop.png",
    srcIco: "/assets/icons/walkthrough-2.svg",
    title: "super titulo",
    body: "Lalalalal lalalalal lalalalla llala"
  },
  {
    id: 3,
    srcPic: "/assets/images/walkthroug-3-desktop.png",
    srcIco: "/assets/icons/walkthrough-3.svg",
    title: "super titulo",
    body: "Lalalalal lalalalal lalalalla llala"
  },
]

const btn1 = {
  textPre: "hola",
  ico: "/assets/icons/aeropay-1-white.svg",
  textEnd: "100",
  width: 150,
  height: 100
}

const btnChevron = {
  disabled: false,
  left: false
}


export default function Home({ products }) {

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
      if (window.pageYOffset > 10) {
        setVisibleScroll(true);
      } else {
        setVisibleScroll(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  // Fin Boton scroll to top



  return (
    <div className='min-h-screen bg-slate-300 '>
      <div className='py-96 ml-96 flex justify-around'>

        {/* {
          products.map(elem => (
            <ProductCard
              key={elem._id}
              data={elem}
            />
          ))
        } */}

        {/* {
          walkOne.map(elem => (
            <WalkCard
              key={elem.id}
              data={elem}
            />
          ))
        } */}

        {/* <Landing /> */}

        {/* {
          <ButtonCTA
            textPre={btn1.textPre}
            ico={btn1.ico}
            textEnd={btn1.textEnd}
            width={btn1.width}
            height={btn1.height}
          />
        } */}

        {/* {
          <Section />
        } */}

        {/* {
          <PagerButton 
            props={btnChevron}
          />
        } */}

        {
          <Pager
            actualValue={1}
            endValue={5}
          />
        }


        {
          <DropdownList />
        }
{/* 
        {
          <AeroCard />
        } */}

        {
          <ModuleAeroPay />
        }




      </div>

      {
        visibleScroll && <Up scrollToTop={scrollToTop}/>
      }

      {
        <TechProducts />
      }

    </div>
  )
}
