import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import MobMenu from '../MobMenu/MobMenu';
import Footerr from '../Footer/Footerr';
import Searchh from '../Search/Search';


const Home = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Sidebar />
    </div>
    <Searchh/>
    <div className='mob'>
      <MobMenu/>
    </div>

    <div>
      <Footerr/>
    </div>
    </>
  )
}

export default Home
