import Header from './Components/Header/Header';
import SectionHero from './Sections/SectionHero/SectionHero';
import SectionType2 from './Sections/Section2/SectionType2';
import SectionType3 from './Sections/Section3/SectionType3';
import Footer from './Components/Footer/Footer';
import { bill, card } from './assets/img/index';

function App() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionType2
        title='You do the business, we’ll handle the money.'
        text='With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.'
        isButton={true}
      />
      <SectionType2
        title='Easily control your billing & invoicing.'
        text='Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.'
        reverseDirection={true}
        imageUrl={bill}
        isBlink={true}
      />
      <SectionType2
        title='Find a better card deal in few easy steps.'
        text='Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.'
        isButton={true}
        imageUrl={card}
      />
      <SectionType3
        title='What people are saying about us'
        text='Everything you need to accept card payments and grow your business anywhere on the planet.'
      />
      <Footer />
    </>
  );
}

export default App;
