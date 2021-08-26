import React from 'react'
import useTranslation from '../i18n';
import pic05 from '../assets/images/pic01.jpg';
export default function EmploymentHistory() {
    const { t } = useTranslation();
    return (
        <section id="work_experience_home" className="panel spotlight short center">
            <div className="content span-5">
                <h2 className="major">{t("employment_history")}</h2>
                <ul className="alt">
                    <li><strong>CEREZA GROUP S.A.S.</strong>, BOGOTÁ - Representante Legal - Dirección y programación de aplicaciones web y móviles en React y React Native - 18/03/20 - ACTUALIDAD </li>
                    <li><strong>FEDERACIÓN COLOMBIANA DE LA INDUSTRIA DEL SOFTWARE Y TI (FEDESOFT)</strong>, BOGOTÁ - Formador Programación Fullstack - Formación en aplicación de aplicaciones móviles híbridas con POSTGRESQL, RUBY y IONIC - 12/07/18 - 06/11/18 </li>
                    <li><strong>TRIBUNAL SUPERIOR DEL DISTRITO JUDICIAL DE MOCOA - PUTUMAYO</strong>, MOCOA - Técnico de Sistemas grado 11 - Apoyo en sistemas de gestión documental 12/01/16 - 05/02/17 </li>
                    <li><strong>INFOTECH INGENIERÍA</strong>, MOCOA - Programador - Creación de aplicaciones web y móviles. Instalaciones y mantenimiento de computadores y redes 12/01/09 - 12/11/15 </li>
                </ul>
            </div>
            <div className="image filtered tinted" data-position="top right">
                <img src={pic05} alt="" />
            </div>
        </section>
    )
}
