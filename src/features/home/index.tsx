import { useTranslation } from 'react-i18next';
import SEOHeader from '../../components/SEOHeader';
import { homePage } from '../../constants/SEO';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <SEOHeader {...homePage} />
      <h1 className="text-3xl font-bold mx-auto text-center">{t('title')}</h1>
    </div>
  );
}
