import { DollarSignIcon, ShoppingCartIcon } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import im1 from './images/im1.png'
import im2 from './images/im2.png'
import im3 from './images/im3.png'
import im4 from './images/im4.png'


function Store() {

    const itemData = [
        {title:"Coffee pack" , img:im4 , price:'110' , prePrice:'150' , review:1},
        {title:"Coffee Ice" , img:im3 , price:'110' , prePrice:'150' , review:1},
        {title:"Ice Coffee" , img:im1 , price:'110' , prePrice:'150' , review:1},
        {title:"Boba Cofee" , img:im2 , price:'110' , prePrice:'150' , review:1},
    ]
  return (
    <div className='w-full bg-[#F9F6F1]'>
        <h1 className=' text-center text-3xl font-bold py-3'>
            Special Products
        </h1>
        <div className='flex flex-wrap justify-evenly'>
        {
            itemData.map((item)=>{
                return (
                    <Card key={item.title} className='w-80  m-2 flex flex-col justify-between pt-2 gap-1'>
                        <CardHeader className=' hidden'>
                            <CardTitle >

                            </CardTitle>
                        </CardHeader>
                        <CardContent className='flex flex-row justify-center items-center h-50' >
                            <img src={item.img} alt={item.title} width={200} />
                        </CardContent>
                        <CardFooter className='flex flex-col justify-end gap-4'>
                            <h1 className='text-lg font-semibold opacity-80 text-center w-full'>{item.title}</h1>
                            <div className='flex flex-row justify-between w-full '>
                                <span className=' border border-orange-300 rounded-full p-1'><ShoppingCartIcon className='text-orange-300'/></span>
                                <div className='font-semibold flex flex-row  '>
                                    <div className='flex flex-row'>
                                    <DollarSignIcon className='w-4'/><h1>{item.price}</h1>
                                    </div>
                                    <div className='flex flex-row'>
                                    <DollarSignIcon className='w-4 opacity-70 line-through'/><h1 className=' opacity-70 line-through'>{item.prePrice}</h1>
                                    </div>
                                    
                                </div>
                            </div>
                        </CardFooter>

                    </Card>
                )
            })
        }
    </div>
    </div>
  )
}

export default Store