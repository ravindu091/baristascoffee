
import im1 from './img/im1.jpg'
import im2 from './img/im2.jpg'
import im3 from './img/im3.jpg'

function Blogs() {

    const blogData = [
        {title:"The standard Lorem Ipsum" , date:'05 December 2024', img:im1 },
        {title:"Consectetur Adipiscing" , date:'08 December 2024', img:im2 },
        {title:"Lorem Ipsum Dolo" , date:'23 December 2024', img:im3 }
    ]
  return (
    <div className='w-full bg-[#F9F6F1] py-4'>
        <h1 className='text-3xl text-center font-semibold py-3'>Latest Blogs</h1>
        <div className='flex flex-wrap justify-evenly'>
            {
                blogData.map((blog)=>{
                    return (
                        <div className=' w-72 flex flex-col gap-1 mt-3 justify-start items-start'>
                            <img src={blog.img} alt={blog.title} className=' rounded-xl' />
                            <h1 className=' font-semibold text-lg text-amber-600'>{blog.title}</h1>
                            <h1 className='text-slate-500 text-sm'>{blog.date}</h1>
                            <p className='text-sm opacity-80 pr-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit velit asperiores accusamus culpa delectus et, consequuntur porro illo esse voluptatem. Qui sequi quaerat, soluta culpa cum asperiores obcaecati dolore dignissimos!</p>
                            <button className='bg-amber-800 bg-opacity-80 text-ld font-semibold text-orange-100 px-3 py-1 rounded-2xl' >Read more..</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Blogs