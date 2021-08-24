import React from 'react'
import useTranslation from '../i18n';
import pic03 from '../assets/images/pic03.jpg';
export default function AppliedStudies() {
    const { t } = useTranslation();
    return (
        <section className="panel spotlight short left">
            <div className="content span-5">
                <h2 className="major">{t("applied_studies")}</h2>
                <h4>{t("professionals")}</h4>
                <ul className="alt">
                    <li>{t("system_engineering_and_computating")} - {t("national_university_of_colombia")} - 2015</li>
                </ul>
                <h4>{t("technicals")}</h4>
                <ul className="alt">
                    <li>{t("system_technique")} - {t("putumayo_institute_of_education")} - 2008</li>
                </ul>
                <h4>{t("basic")}</h4>
                <ul className="alt">
                    <li>{t("school_leaver")} - {t("pio_xii_educational_institution")}- 2008</li>
                </ul>
            </div>
            <div className="image filtered tinted" data-position="top right">
                <img src={pic03} alt="" />
            </div>
        </section>
    )
}
