import './section-hero.scss';
import { discount, robot } from '../../assets/img';

function Advantages({ advantagesList }) {
  return (
    <div className='grid grid-cols-3 mt-20 xl:gap-0 px-4 xl:px-0 devide-y'>
      {advantagesList.map((item) => (
        <div
          key={item.title}
          className='col-span-3 xl:col-span-1 flex items-center justify-center gap-5 py-6 xl:py-0 px-4 xl:px-8 relative after:w-[20px] after:h-[1px] last:after:hidden after:bg-gray-400 after:absolute after:bottom-0 after:right-1/2 after:-translate-x-1/2 xl:after:-translate-x-0 xl:after:h-[14px] xl:after:w-[2px] xl:after:top-1/2 xl:after:right-0 xl:after:-translate-y-1/2'
        >
          <div className='text-[40px] leading-[130%] font-semibold'>
            {item.amount}
          </div>
          <div className='text-[20px] uppercase text-gradient'>
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SectionHero() {
  const list = [
    {
      title: 'User Active',
      amount: '3800+',
    },
    {
      title: 'TRUSTED BY COMPANY',
      amount: '230+',
    },
    {
      title: 'TRANSACTION',
      amount: '$230M+',
    },
  ];
  return (
    <section className='section-hero pt-[127px] relative pb-12 xl:pb-24'>
      <svg
        className='absolute left-0 top-1/2 -translate-y-1/2 w-[195px] h-[324px] hidden xl:block'
        viewBox='0 0 580 1026'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_f_310_667)'>
          <ellipse cx='32.5' cy='414' rx='97.5' ry='162' fill='white' />
        </g>
        <defs>
          <filter
            id='filter0_f_310_667'
            x='-515'
            y='-198'
            width='1095'
            height='1224'
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
              stdDeviation='225'
              result='effect1_foregroundBlur_310_667'
            />
          </filter>
        </defs>
      </svg>
      <div className='container relative px-0 xl:px-4 overflow-hidden lg:overflow-visible'>
        <div className='grid grid-cols-12 gap-y-16'>
          <div className='col-span-12 xl:col-span-7 px-4 xl:px-0'>
            <div className='badge mb-3'>
              <img src={discount} alt='' />
              <div className=''>20% DISCOUNT FOR 1 MONTH ACCOUNT</div>
            </div>
            <h1 className='mb-10'>
              The Next <span className='text-gradient'>Generation</span> Payment
              Method.
            </h1>
            <p className='xl:w-3/4'>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
          <div className='col-span-12 xl:col-span-5 relative'>
            <img
              src={robot}
              alt='billing'
              className='w-[100%] h-[100%] relative z-[5]'
            />
            <svg
              className='absolute -top-72 -left-52 w-[150%] h-[150%]'
              viewBox='0 0 767 768'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_f_310_493)'>
                <path
                  d='M124 73L298.468 644H502.608L702 73H124Z'
                  fill='url(#paint0_linear_310_493)'
                />
                <path
                  d='M124 73L298.468 644H502.608L702 73H124Z'
                  stroke='black'
                />
              </g>
              <defs>
                <filter
                  id='filter0_f_310_493'
                  x='0.324402'
                  y='-50.5'
                  width='825.38'
                  height='818'
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
                    stdDeviation='61.5'
                    result='effect1_foregroundBlur_310_493'
                  />
                </filter>
                <linearGradient
                  id='paint0_linear_310_493'
                  x1='413'
                  y1='73'
                  x2='413'
                  y2='644'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#BCA5FF' stop-opacity='0' />
                  <stop offset='1' stop-color='#214D76' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <Advantages advantagesList={list} />
      </div>
    </section>
  );
}
