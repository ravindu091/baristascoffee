import Item from './Item'
import GiftSvg from './svg/gift.svg'
import PlaneSvg from './svg/plane.svg'
import WalletSvg from './svg/wallet.svg'
import HeadPhone from './svg/headphone.svg'

function TaskItems() {

    const taskItem = [
        {title:'free shipping islandwide',svg:PlaneSvg,subtitle:'On order over $150'},
        {title:'cash on delivery',svg:WalletSvg,subtitle:'100% money back guarantee'},
        {title:'special gift card',svg:GiftSvg,subtitle:'Other special bonuses with gift'},
        {title:'24/7 customer service',svg:HeadPhone,subtitle:'Call us 24/7 at 123-456-789'}
    ]

  return (
    <div className='flex flex-wrap justify-evenly px-3 py-10 bg-[#F9F6F1]'>
       {
        taskItem.map((item)=>{
            return <Item itemObject={item} key={item.title} />
        })
       }

    </div>
  )
}

export default TaskItems