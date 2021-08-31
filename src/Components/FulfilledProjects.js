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
import homeExpoRenovables from '../assets/images/gallery/fulls/expo_renovables_2019/home.jpg';
import expositorsExpoRenovables from '../assets/images/gallery/fulls/expo_renovables_2019/expositors.jpg';
import scheduleExpoRenovables from '../assets/images/gallery/fulls/expo_renovables_2019/schedule.jpg';
import QRTarjetaapp from '../assets/images/gallery/fulls/tarjetaapp/tarjetaapp_QR.jpg';
import registerTarjetaapp from '../assets/images/gallery/fulls/tarjetaapp/tarjetaapp_register.jpg';
import loginTarjetaapp from '../assets/images/gallery/fulls/tarjetaapp/tarjetaapp_login.jpg';
import homeMymiracle from '../assets/images/gallery/fulls/my_miracle/my_miracle_home.jpg';
import loginMymiracle from '../assets/images/gallery/fulls/my_miracle/my_miracle_login.jpg';
import QRMymiracle from '../assets/images/gallery/fulls/my_miracle/my_miracle_QR.jpg';
import splashSermujer from '../assets/images/gallery/fulls/ser_mujer/ser_mujer_splash.jpg';
import homeSerMujer from '../assets/images/gallery/fulls/ser_mujer/ser_mujer_home.jpg';
import loginSermujer from '../assets/images/gallery/fulls/ser_mujer/ser_mujer_login.jpg';
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
        {
            appName: "Expo Renovables 2019", hint: t("expo_renovables_2019_hint"), id: "exporenovables2019",
            images: [
                homeExpoRenovables,
                expositorsExpoRenovables,
                scheduleExpoRenovables,
            ]
        },
        {
            appName: "My Miracle", hint: t("my_miracle_hint"), id: "mymiracle",
            images: [
                homeMymiracle,
                loginMymiracle,
                QRMymiracle,
            ]
        },
        {
            appName: "Tarjetaapp", hint: t("tarjetaapp_hint"), id: "tarjetaapp",
            images: [
                QRTarjetaapp,
                loginTarjetaapp,
                registerTarjetaapp,
            ]
        },
        {
            appName: "Ser Mujer", hint: t('ser_mujer_hint'), id: "sermujer",
            images: [
                homeSerMujer,
                splashSermujer,
                loginSermujer,
            ]
        },
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
                <h4>{t('backend_libraries_and_frameworks')}</h4>
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
