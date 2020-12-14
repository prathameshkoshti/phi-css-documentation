import BuyMeCoffee from '../components/BuyMeCoffee';
import DarkModeFeature from '../components/HomePageSections/DarkModeFeature';
import TypographyFeature from '../components/HomePageSections/TypographyFeature';
import homepageStyles from '../css/modules/home.module.css'
export default function Home() {
  return (
    <div className={homepageStyles.homepageContianer}>
      <DarkModeFeature />
      <TypographyFeature />
      <BuyMeCoffee />
    </div>
  )
}
