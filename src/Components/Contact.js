import React from 'react'
import useTranslation from '../i18n';

export default () => {
    const {t} = useTranslation();
    return (
        <section className="panel color4-alt">
            <div className="intro color4">
                <h2 className="major">{t('contact')}</h2>
                <p>{t('contact_hint')}</p>
            </div>
            <div className="inner columns divided">
                <div className="span-3-25">
                    <form method="post" action="#">
                        <div className="fields">
                            <div className="field half">
                                <label for="name">{t('name')}</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="field half">
                                <label for="email">{t('email')}</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className="field">
                                <label for="message">{t('message')}</label>
                                <textarea name="message" id="message" rows="4"></textarea>
                            </div>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value={t('send_message').toUpperCase()} className="button primary" /></li>
                        </ul>
                    </form>
                </div>
                <div className="span-1-5">
                    <ul className="contact-icons color1">
                        <li className="icon brands fa-twitter"><a href="#">@lrlineroa</a></li>
                        <li className="icon brands fa-facebook-f"><a href="#">facebook.com/lrlineroa</a></li>
                        <li className="icon brands fa-snapchat-ghost"><a href="#">@lrlineroa</a></li>
                        <li className="icon brands fa-instagram"><a href="#">@lrlineroa</a></li>
                        <li className="icon brands fa-medium-m"><a href="#">medium.com/lrlineroa</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
