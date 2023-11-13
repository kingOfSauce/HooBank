import './header.scss';
import { logo } from '../../assets/img/index';

export default function Header() {
  const listOfLinks = [
    {
      title: 'Home',
      href: '#',
      className: 'active',
    },
    {
      title: 'About Us',
      href: '#',
    },
    {
      title: 'Features',
      href: '#',
    },
    {
      title: 'Solution',
      href: '#',
    },
  ];
  return (
    <header className='z-10'>
      <div className='container overflow-hidden'>
        <div className='flex justify-between'>
          <a href='#' className='header-logo'>
            <img src={logo} alt='' className='w-32' />
          </a>
          <ul className='items-center hidden xl:flex'>
            {listOfLinks.map((item) => (
              <li key={item.title}>
                <a className={item.className} href={item.href}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
