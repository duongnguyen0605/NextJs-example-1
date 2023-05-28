import { myTranslation } from '@app/i18n';
import Link from 'next/link';

// set dynamic metadata
export async function generateMetadata({ params: { lng } }) {
  const { t } = await myTranslation(lng);

  return ({
    title: t('Trang chủ'),
    description: t('Đây là nội dung trang chủ')
  })
}

const Page = async ({ params: { lng } }) => {
  const { t } = await myTranslation(lng);

  return (
    <>
      <h1>{t('Xin chào')}</h1>
      <Link href={`/${lng}/second-page`}>
        {t('Trang thứ hai')}
      </Link>
    </>
  )
}

export default Page;