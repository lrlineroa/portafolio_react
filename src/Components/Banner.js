import React, { useCallback } from 'react';
import pic01 from '../assets/images/profile_picture.jpg';
import { LOCALES } from '../Constants';
import useTranslation from '../i18n';
import { getObjectById } from '../utils';
export default () => {
    const { t, localeProvider, changeLocale } = useTranslation();
    const getNextLocaleProviderId = () => {
        return ((localeProvider.id + 1) % Object.keys(LOCALES).length);
    }
    const getNextLocaleProvider = () => {
        return getObjectById(LOCALES, getNextLocaleProviderId())
    }
    const _changeLocale = useCallback(() => {
        changeLocale(getNextLocaleProvider());
    }, [changeLocale, localeProvider.id]);
    return (
        <section className="panel banner right">
            <div className="content color0 span-3-75">

                <h1 className="major">{t("hello")}, {t("my_name_is")}<br />
                    Leonardo Raúl Linero Aristizábal</h1>
                <p>{t('summary')}</p>
                <ul className="actions">
                    <li><a href="#first" className="button primary color1 circle icon solid fa-angle-right">Next</a></li>
                    <li><a style={{ display: 'flex', justifyContent: "center", alignItems: "center", borderRadius: "100%", width: "3.125rem", height: "3.125rem" }} onClick={_changeLocale} className="button primary color1 circle solid">{
                        getNextLocaleProvider().name.toUpperCase()
                    }</a></li>
                </ul>
            </div>
            <div
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                className="color0 span-1-75" data-position="25% 25%">
                <img src={pic01} style={{
                    height: 200, width: 200, borderRadius: '50%'
                }} />
            </div>
        </section>
    )
}