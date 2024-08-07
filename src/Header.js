import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{basket,user},dispatch]=useStateValue();
    
    const handleAuthenication=()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
            <img className='header__logo' src="https://www.pngall.com/wp-content/uploads/15/Amazon-Logo-White-Transparent.png" alt="Amazon logo" />
            </Link>

            <div className='header__search'>
                <input type="text" className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenication}className='header__option'>
                        <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user?.email.split('@')[0] }</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign out': 'Sign In'}</span>
                    </div>
                </Link>
                
                <Link to='/orders'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                    
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>


                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
    }

    export default Header
