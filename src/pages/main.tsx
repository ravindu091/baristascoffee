import Blogs from "@/component/Blogs/Blogs";
import Categories from "@/component/Categories/Categories";
import Footer from "@/component/Footer/Footer";
import Menu from "@/component/Menu/Menu";
import SideShow from "@/component/SlideShow/SideShow";
import Store from "@/component/Store/Store";
import TaskItems from "@/component/TaskItems/TaskItems";
import TopperNav from "@/component/TopperNav/TopperNav";


export default function Main() {
    return (
      <>
        <TopperNav CartItemsNum={12} />
        <Menu />
        <SideShow />
        <TaskItems />
        <Categories />
        <Store/>
        <Blogs />
        <Footer/>
      </>
    )
  }
  