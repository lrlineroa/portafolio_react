import React from 'react';
import pic02 from '../assets/images/pic02.jpg';
import useTranslation from '../i18n';
export default () => {
    const { t } = useTranslation();
    return (
        <section className="panel spotlight medium right" id="first">
            <div className="content span-7">
                <h2 className="major">{t('details')}</h2>
                <p><strong>{t('birth_date')}</strong>: {t("my_birth_date")}</p>
                <p><strong>{t('place_of_birth')}</strong>: Mocoa(Putumayo)</p>
                <p><strong>{t('address')}</strong>: Cra 62 No. 67b - 58</p>
                <p><strong>{t('city')}</strong>: Bogotá D.C.</p>
                <p><strong>{t('phone')}</strong>: 3163407568 - 3157020623</p>
                <p><strong>{t('email')}</strong>: leonardoraulinero@gmail.com</p>
            </div>
            <div className="image filtered tinted" data-position="top left">
                <img src={pic02} alt="" />
            </div>
        </section>
    )
}