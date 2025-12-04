import Banner from './components/Banner';
import Header from './components/Header';
import Features from './components/Features';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import JoinNow from './components/JoinNow';
import OverviewSection from './components/OverviewSection';

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
      <Banner id="banner" />
      <OverviewSection id="overview" />
      <Features id="features" />
      <Benefits id="benefits" />
      <FAQ id="faq" />
      {/* <JoinNow /> removed as requested */}
    </div>
  );
}

export default App;
