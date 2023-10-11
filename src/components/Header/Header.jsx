
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { IconButton } from '@mui/material';



const Header = () => {
  return (
    <header className=" fixed top-0 left-0 z-[100] drop-shadow-header-shadow w-full py-5 px-2 bg-my-background flex items-center justify-between">

        {/* header-left */ }
        <div className=" flex items-center">
          <IconButton sx={{
            color:"red"
            }}>
          <MenuIcon  sx={{
            color:"#c82196"
            }}/>
          </IconButton>
            <h1 className=" text-sm font-bold">Kushan <span className=" text-red-700">Practices</span></h1>
        </div>

        <div className=" overflow-hidden ml-2 flex items-center rounded-full bg-[#fdf3f3]">
            <input type="text" placeholder="search" className=" hidden sm:inline-block ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit" />
            <IconButton>
              <SearchIcon className="text-grey-400" />
            </IconButton>
        </div>

        {/* header-right */ }
        <IconButton>
        <ShoppingCartIcon />
        </IconButton>
        

    </header>
  )
}

export default Header