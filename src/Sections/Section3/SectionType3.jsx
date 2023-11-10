import Card from '../../Components/Card/Card';
import Button from '../../UI/Button/Button';
import {
  people01,
  people02,
  people03,
  airbnb,
  binance,
  coinbase,
  dropbox,
} from '../../assets/img';

import './section-type-3.scss';

export default function SectionType3({ title, text }) {
  const workers = [
    {
      name: 'Herman Jensen',
      text: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
      jobTitle: 'Founder & Leader',
      imgSrc: people01,
    },
    {
      name: 'Steve Mark',
      text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
      jobTitle: 'Founder & Leader',
      imgSrc: people02,
    },
    {
      name: 'Kenn Gallagher',
      text: 'It is usually people in the money business, finance, and international trade that are really rich.',
      jobTitle: 'Founder & Leader',
      imgSrc: people03,
    },
  ];
  const companyes = [
    {
      name: 'airbnb',
      imgSrc: airbnb,
    },
    {
      name: 'binance',
      imgSrc: binance,
    },
    {
      name: 'coinbase',
      imgSrc: coinbase,
    },
    {
      name: 'dropbox',
      imgSrc: dropbox,
    },
  ];
  return (
    <section className='py-12 xl:py-24 relative overflow-hidden'>
      <svg
        className='absolute bottom-0 -right-48 h-full hidden xl:block'
        width='824'
        height='1825'
        viewBox='0 0 824 1825'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_f_310_491)'>
          <rect
            x='968.849'
            y='568'
            width='436.52'
            height='544.066'
            rx='200'
            transform='rotate(47.4565 968.849 568)'
            fill='url(#paint0_linear_310_491)'
          />
        </g>
        <defs>
          <filter
            id='filter0_f_310_491'
            x='0.581604'
            y='0.581543'
            width='1830.84'
            height='1824.32'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='325'
              result='effect1_foregroundBlur_310_491'
            />
          </filter>
          <linearGradient
            id='paint0_linear_310_491'
            x1='968.849'
            y1='840.033'
            x2='1405.37'
            y2='840.033'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#1A2980' />
            <stop offset='1' stop-color='#26D0CE' />
          </linearGradient>
        </defs>
      </svg>
      <div className='container'>
        <div className='flex flex-col xl:flex-row gap-8 xl:gap-32 mb-10 xl:mb-20'>
          <div className='basis-full xl:basis-1/2'>
            <h2>{title}</h2>
          </div>
          <div className='basis-full xl:basis-1/2'>
            <p>{text}</p>
          </div>
        </div>
        <div className='flex flex-col xl:flex-row gap-6 xl:gap-12 mb-14 md:mb-24 xl:mb-28'>
          {workers.map((item) => (
            <div className='basis-full xl:basis-1/3' key={item.name}>
              <Card
                name={item.name}
                text={item.text}
                jobTitle={item.jobTitle}
                imgSrc={item.imgSrc}
              />
            </div>
          ))}
        </div>
        <div className='flex flex-row flex-wrap md:flex-nowrap justify-center gap-10 xl:gap-28 mb-14 md:mb-24 xl:mb-28'>
          {companyes.map((item) => (
            <div className='basis-5/12 md:basis-1/4' key={item.name}>
              <img
                src={item.imgSrc}
                alt=''
                className='w-full h-full object-contain'
              />
            </div>
          ))}
        </div>
        <div className='cta'>
          <div className='mask'></div>
          <div className='flex flex-wrap md:flex-nowrap items-center gap-10 md:gap-0'>
            <div className='basis-full md:basis-8/12'>
              <h2 className='mb-6'>Let’s try our service now!</h2>
              <p>
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
            </div>
            <div className='basis-full md:basis-4/12 flex justify-start md:justify-center xl:justify-end'>
              <Button text='Get started' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
