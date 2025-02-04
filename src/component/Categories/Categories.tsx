import ItemCard from "./ItemCard"
import CaffeMochaImg from './caffe-mocha.jfif'
import EspressoAmericanoImg from './expreso.jfif'
import CappuccinoImg from './cafe.jfif'

function Categories() {
  const categories = [
    {image:CaffeMochaImg,name:'Caffe Mocha'},
    {image:EspressoAmericanoImg,name:'Espresso Americano'},
    {image:CappuccinoImg,name:'Cappuccino'}
  ]
  return (
    <div className="bg-[#F9F6F1] w-[100%] py-12">
        
        <div className="flex justify-center mb-4">
          <h1 className="text-4xl font-bold my-2">Top Categories</h1>
        </div>
        <div className="flex flex-wrap justify-evenly">
            {
              categories.map((category)=>{
                return <ItemCard itemObject={category} key={category.name} />;
              })
            }
        </div>
        
    </div>
  )
}

export default Categories