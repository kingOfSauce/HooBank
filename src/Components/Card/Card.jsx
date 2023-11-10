import './card.scss';

export default function Card({ text, name, jobTitle, imgSrc }) {
  return (
    <div className='card h-full'>
      <div className='mask'></div>
      <div className='card-body flex flex-col justify-between h-full'>
        <svg
          className='mb-10'
          width='43'
          height='28'
          viewBox='0 0 43 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.7984 27.6L18.9984 0H12.3984L0.398438 27.6H11.7984ZM35.7984 27.6L42.9984 0H36.3984L24.3984 27.6H35.7984Z'
            fill='url(#paint0_linear_310_509)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_310_509'
              x1='28.8615'
              y1='-24.7969'
              x2='41.7939'
              y2='24.1471'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0.00887753' stop-color='#DEF9FA' />
              <stop offset='0.1723' stop-color='#BEF3F5' />
              <stop offset='0.4204' stop-color='#9DEDF0' />
              <stop offset='0.5512' stop-color='#7DE7EB' />
              <stop offset='0.7154' stop-color='#5CE1E6' />
              <stop offset='1' stop-color='#33BBCF' />
            </linearGradient>
          </defs>
        </svg>
        <p className='mb-6'>{text}</p>
        <div className='flex gap-4'>
          <img src={imgSrc} alt={jobTitle} />
          <div className='flex flex-col text-white'>
            <div className='text-xl leading-[32px]'>{name}</div>
            <p className='text-sm'>{jobTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
