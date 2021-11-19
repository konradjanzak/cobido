import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import './Navigation.scss';
import { useCycle } from 'framer-motion';
import NavLinks from './NavLinks';

const Nawigation = () => {
  const [open, setOpen] = useCycle(false, true);

  const hamburgerIcon = (
    <AiOutlineMenu
      className="hamburgerIcon"
      size="30px"
      color="black"
      onClick={() => setOpen()}
    />
  );

  const closeIcon = (
    <AiOutlineClose
      className="closeIcon"
      size="30px"
      color="black"
      onClick={() => setOpen()}
    />
  );

  const closeMenu = () => setOpen(false);

  return (
    <div className="navigationMainContainer">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks closeMenu={closeMenu} />}
    </div>
  );
};

export default Nawigation;
