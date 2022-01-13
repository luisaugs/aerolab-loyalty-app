
import { ButtonCTA } from "../components/ButtonCTA";
import { ButtonNav } from "../components/ButtonNav";
import { Toast } from "../components/Toast";
import { WalkCard } from "../components/WalkCard";



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

const btnTest = 
  {
    src:"/assets/propios/spain.svg",
    w:32,
    h:32
  }


export default function Home({ products }) {
  return (
    <div className='min-h-screen bg-slate-500 '>
      <h1 className='bg-slate-500 text-Aerolab-Dark text-sm font-bold uppercase'>
        tech zone
      </h1>
      <div className=''>

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
        <div className="mt-80 mx-auto w-6/12">
        {
          <ButtonNav 
            data={btnTest}
          />
        }
        </div>


      </div>


    </div>
  )
}
