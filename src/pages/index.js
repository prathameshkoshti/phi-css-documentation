import BuyMeACoffee from '../components/HomePageSections/BuyMeACoffee';
import DarkModeFeature from '../components/HomePageSections/DarkModeFeature';
import TypographyFeature from '../components/HomePageSections/TypographyFeature';
import UtilitiesFeature from '../components/HomePageSections/UtilitiesFeature';
import homepageStyles from '../css/modules/home.module.css';
export default function Home() {
  return (
    <div className={homepageStyles.homepageContianer}>
      <TypographyFeature />
      <DarkModeFeature />
      <UtilitiesFeature />
      <BuyMeACoffee />
    </div>
  )
}
