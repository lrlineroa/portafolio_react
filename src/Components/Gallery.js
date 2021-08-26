import React from 'react';
import im01 from '../assets/images/gallery/fulls/01.jpg';
import im02 from '../assets/images/gallery/fulls/02.jpg';
import im03 from '../assets/images/gallery/fulls/03.jpg';
import im04 from '../assets/images/gallery/fulls/04.jpg';
import im05 from '../assets/images/gallery/fulls/05.jpg';
import im06 from '../assets/images/gallery/fulls/06.jpg';
import im07 from '../assets/images/gallery/fulls/07.jpg';
import im08 from '../assets/images/gallery/fulls/08.jpg';
import im09 from '../assets/images/gallery/fulls/09.jpg';

export default ({ project }) => {
    const { appName, hint, id, images } = project;
    return (
        <section id={id} className="panel">
            <div className="intro color1">
                <h2 className="major">{appName}</h2>
                <p>{hint}</p>
                <a href="#applications_home" className="button primary color1 circle icon solid fa-angle-left" />
            </div>
            <div className="gallery">
                <div className="group span-3">
                    <a href={(images && images[0]) || "images/gallery/fulls/01.jpg"} className="image filtered span-3" data-position="bottom"><img src={(images && images[0]) || im01} alt="" /></a>
                    <a href={(images && images[1]) || "images/gallery/fulls/02.jpg"} className="image filtered span-1-5" data-position="center"><img src={(images && images[1]) ||im02} alt="" /></a>
                    <a href={(images && images[2]) || "images/gallery/fulls/03.jpg"} className="image filtered span-1-5" data-position="bottom"><img src={(images && images[2]) ||im03} alt="" /></a>
                </div>
            </div>
        </section>
    )
}