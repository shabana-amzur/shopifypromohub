import Banner from './components/Banner';
import Header from './components/Header';
import Features from './components/Features';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import JoinNow from './components/JoinNow';

import SeoMeta from './components/SeoMeta';
import './App.css';

function App() {
  return (
    <div className="App">
      <SeoMeta
        title="Shopify Product Launch Waitlist"
        description="Join the waitlist for our upcoming Shopify Marketplace product. Get early access, see features, benefits, FAQ, and demo video."
        keywords="Shopify, product launch, waitlist, demo, features, benefits, FAQ"
      />
      <Header />
      <Banner />
      <Features />
      <Benefits />
      <FAQ />
      {/* <JoinNow /> removed as requested */}
    </div>
  );
}

export default App;
