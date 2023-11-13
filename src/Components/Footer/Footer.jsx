import {
  logo,
  instagram,
  facebook,
  twitter,
  linkedin,
} from '../../assets/img/index';

export default function Footer() {
  const menuLists = [
    {
      id: 1,
      header: 'Usefull Links',
      list: [
        'Content',
        'How it Works',
        'Create',
        'Explore',
        'Terms & Services',
      ],
    },
    {
      id: 2,
      header: 'Community',
      list: ['Help Center', 'Partners', 'Suggestions', 'Blog', 'Newsletters'],
    },
    {
      id: 3,
      header: 'Partner',
      list: ['Our Partner', 'Become a Partner'],
    },
  ];
  const social = [
    {
      id: 1,
      src: instagram,
    },
    {
      id: 2,
      src: facebook,
    },
    {
      id: 3,
      src: twitter,
    },
    {
      id: 4,
      src: linkedin,
    },
  ];
  return (
    <footer className='pt-12 xl:pt-24'>
      <div className='container'>
        <div className='flex flex-col xl:flex-row gap-14 xl:gap-32 pb-10 border-[#3F3E45] border-b'>
          <div className='basis-full xl:basis-4/12'>
            <img src={logo} alt='' className='mb-8' />
            <p>A new way to make the payments easy, reliable and secure.</p>
          </div>
          <div className='flex flex-wrap basis-full xl:basis-8/12 gap-8 md:gap-0'>
            {menuLists.map((item) => (
              <div
                className='flex flex-col basis-5/12 md:basis-4/12 xl:basis-4/12'
                key={item.id}
              >
                <h6 className='text-lg mb-[12px] font-[500]'>{item.header}</h6>
                <ul className='flex flex-col text-gray-400'>
                  {item.list.map((link) => (
                    <li key={link}>
                      <a href='#' className='py-[12px] block'>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between py-8 gap-8'>
          <p>
            Copyright <span className='font-bold me-4'>©</span> 2021 HooBank.
            All Rights Reserved.
          </p>
          <div className='flex gap-8'>
            {social.map((item) => (
              <a href='#' key={item.id} className='flex items-center'>
                <img src={item.src} alt='' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
