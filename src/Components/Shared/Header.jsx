import moment from 'moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p className=' text-neutral-500'>Journalism Without Fear or Favour</p>
            <p className=' text-neutral-700'>{moment().format('LLLL')}</p>
            
        </div>
    );
};

export default Header;