

function Item({itemObject}:{itemObject:{svg:any,title:string,subtitle:string}}) {
  return (
    <div 
    
    className="flex flex-row bg-white rounded-2xl items-center m-3 p-3 shadow-lg">
        <div>
            <img src={itemObject.svg} alt="" className="w-10 h-auto mr-1" />
        </div>
        <div>
            <h1 className="text-xs text-[#2a48aa] opacity-75 font-bold uppercase">{itemObject.title}</h1>
            <p className="text-[12px] text-[#1761a7c2] opacity-70">{itemObject.subtitle}</p>
        </div>
    </div>
  )
}

export default Item;