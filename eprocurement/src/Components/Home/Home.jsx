import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import MobMenu from '../MobMenu/MobMenu';
import Footerr from '../Footer/Footerr';
import Searchh from '../Search/Search';
import Loading from '../Loading/Loading';
import { useEffect, useState } from 'react';


const Home = () => {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const f = async () => {
      setLoading(true);
      setTimeout(()=>{setLoading(false)},2000);
    };
    f();
  }, []);

  return (
    <>
    <Loading loading={loading}>
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
    </Loading>
    </>
  )
}

export default Home
