import React, { useCallback } from 'react';
import pic01 from '../assets/images/profile_picture.jpg';
import { LOCALES } from '../Constants';
import useTranslation from '../i18n';
import { getObjectById } from '../utils';
import github from '../assets/svg/github.svg';
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

                <h1 className="major">{t("hello")}, {t("my_name_is") + " "}<br />
                    Leonardo Raúl Linero Aristizábal</h1>
                <p>{t('summary')}</p>
                <ul className="actions">
                    <li>
                        <a title={'Curriculum Vitae'} href="https://drive.google.com/file/d/1B989mtcam_A_wb2mKE_VUbOyv7ayc2HH/view?usp=sharing"
                            target="_blank"
                            className="button primary color1 circle icon solid fa-file-download">
                        </a>
                    </li>
                    <li><a title="Localization"
                        style={{ display: 'flex', justifyContent: "center", alignItems: "center", borderRadius: "100%", width: "3.125rem", height: "3.125rem" }}
                        className="button primary color1 circle solid"
                        onClick={_changeLocale}
                    >
                        <span className="text-base">
                            {getNextLocaleProvider().name.toUpperCase()}
                        </span>
                    </a></li>
                    <li>
                        <a href="#first" className="button primary color1 circle icon solid fa-angle-right" />
                    </li>
                    <li>
                        <a title="Portafolio" href="#portafolio_home" className="button primary color1 circle icon solid fa-briefcase" />
                    </li>
                    <li>
                        <a title="Work experience" href="#work_experience_home" className="button primary color1 circle icon solid fa-handshake" />
                    </li>
                    <li>
                        <a href="https://github.com/lrlineroa/portafolio_react" target="_blank">
                            <img src={github}
                             alt="github"
                                style={{ display: 'flex', justifyContent: "center", alignItems: "center", borderRadius: "100%", width: "3.125rem", height: "3.125rem" }}
                            />
                        </a>

                    </li>
                </ul>
            </div>
            <div
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                className="color0 span-1-75" data-position="25% 25%">
                <img className="my-4" src={pic01} style={{
                    height: 200, width: 200, borderRadius: '50%'
                }} />
            </div>
        </section>
    )
}