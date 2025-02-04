import { Link } from "react-router-dom"

function ItemCard({itemObject}:{itemObject:{image:any,name:string}}) {
  return (
    <div
    style={{
      backgroundImage:`url(${itemObject.image})` ,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className=" w-80 h-96  rounded-xl m-3"
    >
      <div className="bg-black bg-opacity-60 w-[100%] h-[100%] flex flex-col items-center justify-center rounded-xl">
        <h1 className="text-2xl font-semibold text-white">{itemObject.name}</h1>
        <div className="w-20 border-t-2 border-white my-4"></div>
        <Link to={'/'} className="text-white mt-2">See more</Link>
      </div>
    </div>
  )
}

export default ItemCard