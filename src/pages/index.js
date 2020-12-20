import BuyMeACoffee from '../components/HomePageSections/BuyMeACoffee';
import DarkModeFeature from '../components/HomePageSections/DarkModeFeature';
import LandingPageFeature from '../components/HomePageSections/LandingPageFeature';
import TypographyFeature from '../components/HomePageSections/TypographyFeature';
import UtilitiesFeature from '../components/HomePageSections/UtilitiesFeature';
import homepageStyles from '../css/modules/home.module.css';
export default function Home() {
  return (
    <div className={homepageStyles.homepageContianer}>
      <LandingPageFeature />
      <TypographyFeature />
      <DarkModeFeature />
      <UtilitiesFeature />
      <BuyMeACoffee />
    </div>
  )
}
