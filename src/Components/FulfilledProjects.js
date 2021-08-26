import React from 'react'
import useTranslation from '../i18n';
import Gallery from './Gallery';
import adminCuplooImg from '../assets/images/gallery/fulls/cuploo/admin.jpg';
import liveCuplooImg from '../assets/images/gallery/fulls/cuploo/live.jpg';
import homeCuplooImg from '../assets/images/gallery/fulls/cuploo/home.jpg';
import bookingFindHereImg from '../assets/images/gallery/fulls/findhere/booking.jpg';
import advertisersFindHereImg from '../assets/images/gallery/fulls/findhere/advertisers.jpg';
import selectDateFindHereImg from '../assets/images/gallery/fulls/findhere/select_date.jpg';
import homeSeguridadScannerImg from '../assets/images/gallery/fulls/seguridad_scanner/home.jpg';
import providersSeguridadScannerImg from '../assets/images/gallery/fulls/seguridad_scanner/providers.jpg';
import elementosSeguridadScannerImg from '../assets/images/gallery/fulls/seguridad_scanner/elementos.jpg';
import flyerCerezaImg from '../assets/images/gallery/fulls/cereza/flyer.jpg';
import newCerezaCerezaImg from '../assets/images/gallery/fulls/cereza/new_cereza.jpg';
import flyer2CerezaImg from '../assets/images/gallery/fulls/cereza/flyer_2.jpg';
export default function FulfilledProjects() {
    const { t } = useTranslation();
    const projects = [
        {
            appName: "FindHere", hint: t('find_here_hint'), id: "findhere",
            images: [
                bookingFindHereImg,
                advertisersFindHereImg,
                selectDateFindHereImg
            ]
        },
        {
            appName: "Cuploo", hint: t('cuploo_hint'), id: "cuploo",
            images: [
                adminCuplooImg,
                liveCuplooImg,
                homeCuplooImg
            ]
        },
        {
            appName: "Módulo de logística Seguridad Scanner LTDA", hint: t('seguridad_scanner_hint'), id: "seguridadscanner",
            images: [
                homeSeguridadScannerImg,
                providersSeguridadScannerImg,
                elementosSeguridadScannerImg
            ]
        },
        {
            appName: "Cereza", hint: t('cereza_hint'), id: "cereza",
            images: [
                flyerCerezaImg,
                newCerezaCerezaImg,
                flyer2CerezaImg
            ]
        },
        { appName: "Expo Renovables 2019", hint: t("expo_renovables_2019_hint"), id: "exporenovables2019" },
        { appName: "My Miracle", hint: t("my_miracle_hint"), id: "mymiracle" },
        { appName: "Tarjetaapp", hint: t("tarjetaapp_hint"), id: "tarjetaapp" },
        { appName: "Repensando la basura", hint: t('seguridad_scanner_hint'), id: "repensandolabasura" },
    ]
    return (
        <section id="portafolio_home" className="panel color2-alt">
            <div className="intro color2">
                <h2 className="major">{t('fulfilled_projects')}</h2>
                <p>{t('fulfilled_projects_hint')}</p>
            </div>
            <div className="intro">
                <h4>{t('frontend_libraries_and_frameworks')}</h4>
                <ul>
                    <li>React</li>
                    <li>React Native</li>
                    <li>IONIC</li>
                </ul>
                <h4>{t('frontend_libraries_and_frameworks')}</h4>
                <ul>
                    <li>Node, Express, Nextjs</li>
                    <li>Laravel PHP</li>
                </ul>
                <h4>{t('databases')}</h4>
                <ul>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            <div id='applications_home' className="intro color3">
                <h4 className="text-indigo-900">{t('applications')}</h4>
                <ol class="alt">
                    {
                        projects.map(project => (
                            <li className='text-yellow-900' key={Math.random()}>
                                <a href={`#${project.id}`}>{project.appName}</a>
                            </li>
                        ))
                    }
                </ol>
            </div>
            {
                projects.map(project => (
                    <Gallery project={project} />
                ))
            }
        </section>
    )
}
