import Link from 'next/link';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>
          <a>Events</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li className={classes.navigation}>
            <Link href='/events'>
              <a>All Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
