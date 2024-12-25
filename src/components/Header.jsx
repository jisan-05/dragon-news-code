
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center py-3'>
            <img src={logo} alt="" className=''/>
            <p className='text-gray-500 text-2xl my-3 font-poppins'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;