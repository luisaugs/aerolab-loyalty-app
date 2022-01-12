import { ButtonCTA } from "../components/ButtonCTA";
import { ModuleAeroPay } from "../components/ModuleAeroPay";



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

        {
          <ModuleAeroPay
          />
        }



      </div>


    </div>
  )
}
