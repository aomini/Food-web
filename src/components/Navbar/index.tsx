import Link from 'next/link';

import Icon from '../Icon';
import Logo from '../Icons/Logo';
import Typography from '../Typography';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="flex justify-between">
          <Logo />
          <div className="flex items-center gap-6">
            <Link href="/">
              <a className="flex items-center text-green-default">
                <Icon icon="login" />
                <Typography
                  className="ml-4 text-grey-300"
                  variant="caption"
                  component="span"
                >
                  Login
                </Typography>
              </a>
            </Link>
            <Link href="/">
              <a className="flex items-center text-green-default">
                <Icon icon="signon" />
                <Typography
                  className="ml-4 text-grey-300"
                  variant="caption"
                  component="span"
                >
                  Register
                </Typography>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
