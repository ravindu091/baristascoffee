import CoffeBean from './coffee-bean-icon.svg'
import HeadPhone from './headphone-headset-icon.svg'
import AccountIcon from './account-33.svg'
import ShoppinCartIcon from './collect-in-shopping-bag.svg'
function TopperNav({CartItemsNum}:{CartItemsNum:number}) {
  return (
    <div className="flex flex-row justify-between p-3 items-center h-20 bg-[#F9F6F1]">
        <div className='flex flex-row justify-center items-center gap-2 max-sm:hidden'>
          <img src={HeadPhone} alt="headphone" className='w-11 h-auto dis' />
          <div className='max-md:hidden font-semibold'>
            <p>Customer Support</p>
            <p>123-456-7890</p>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-1'>
          <img src={CoffeBean} alt="coffeebean" className='w-10 h-auto' />
          <h1 className='text-2xl uppercase font-semibold'>baristas</h1>
        </div>
        <div className='flex flex-row justify-center items-center gap-1'>
          <img src={AccountIcon} alt="account" className='w-10 h-auto text-[#FFEEAD]' />
          <span className='h-fit text-4xl items-center pb-2'>|</span>
          <img src={ShoppinCartIcon} alt="shopping cart icon" className='w-10 h-auto' />
          <div className='max-md:hidden font-semibold'>
            <p>Shopping Cart</p>
            <p>({CartItemsNum} items)</p>
          </div>
        </div>
    </div>
  )
}

export default TopperNav