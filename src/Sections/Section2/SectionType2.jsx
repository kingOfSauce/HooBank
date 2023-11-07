import './section-type-2.scss';
import { star, shield, send } from '../../assets/img';
import Button from '../../UI/Button/Button';

export default function SectionType2(props) {
  const advantages = [
    {
      title: 'Rewards',
      text: 'The best credit cards offer some tantalizing combinations of promotions and prizes',
      icon: star,
    },
    {
      title: '100% Secured',
      text: 'We take proactive steps make sure your information and transactions are secure.',
      icon: shield,
    },
    {
      title: 'Balance Transfer',
      text: 'A balance transfer credit card can save you a lot of money in interest charges.',
      icon: send,
    },
  ];
  let rowClass = 'flex flex-col xl:gap-x-16';
  props.reverseDirection
    ? (rowClass += ' xl:flex-row-reverse')
    : (rowClass += ' xl:flex-row');
  return (
    <section className='py-12 xl:py-24 relative'>
      {props.isBlink && (
        <svg
          className='absolute -bottom-64 -left-64 h-full'
          width='781'
          height='1972'
          viewBox='0 0 781 1972'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_310_489)'>
            <ellipse
              cx='-172.118'
              cy='986.304'
              rx='202.5'
              ry='235.5'
              transform='rotate(176.617 -172.118 986.304)'
              fill='white'
              fill-opacity='0.6'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_310_489'
              x='-1124.75'
              y='0.905273'
              width='1905.26'
              height='1970.8'
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
                stdDeviation='375'
                result='effect1_foregroundBlur_310_489'
              />
            </filter>
          </defs>
        </svg>
      )}

      <div className='container'>
        <div className={rowClass}>
          <div className='xl:basis-1/2'>
            <h2 className='mb-6'>{props.title}</h2>
            <p className='mb-16'>{props.text}</p>
            {props.isButton && <Button text='Get started' />}
          </div>
          <div className='xl:basis-1/2 mt-16 xl:mt-0 flex flex-col gap-4'>
            {props.imageUrl ? (
              <img
                className='w-full h-full object-contain'
                src={props.imageUrl}
                alt={props.title}
              />
            ) : (
              advantages.map((item) => (
                <div
                  className='teaser flex gap-4 items-center justify-between'
                  key={item.title}
                >
                  <div className='mask'></div>
                  <div className='p-3 bg-teal-950 bg-opacity-40 rounded-full flex items-center justify-center'>
                    <img src={item.icon} alt='' className='w-11' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='font-semibold text-lg'>{item.title}</div>
                    <div className='text-gray-400'>{item.text}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
