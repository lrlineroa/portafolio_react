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

export default () => {
    return (
        <section className="panel">
            <div className="intro color2">
                <h2 className="major">Elit integer</h2>
                <p>Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.</p>
            </div>
            <div className="gallery">
                <div className="group span-3">
                    <a href="images/gallery/fulls/01.jpg" className="image filtered span-3" data-position="bottom"><img src={im01} alt="" /></a>
                    <a href="images/gallery/fulls/02.jpg" className="image filtered span-1-5" data-position="center"><img src={im02} alt="" /></a>
                    <a href="images/gallery/fulls/03.jpg" className="image filtered span-1-5" data-position="bottom"><img src={im03} alt="" /></a>
                </div>
                <a href="images/gallery/fulls/04.jpg" className="image filtered span-2-5" data-position="top"><img src={im04} alt="" /></a>
                <div className="group span-4-5">
                    <a href="images/gallery/fulls/05.jpg" className="image filtered span-3" data-position="top"><img src={im05} alt="" /></a>
                    <a href="images/gallery/fulls/06.jpg" className="image filtered span-1-5" data-position="center"><img src={im06} alt="" /></a>
                    <a href="images/gallery/fulls/07.jpg" className="image filtered span-1-5" data-position="bottom"><img src={im07} alt="" /></a>
                    <a href="images/gallery/fulls/08.jpg" className="image filtered span-3" data-position="top"><img src={im08} alt="" /></a>
                </div>
                <a href="images/gallery/fulls/09.jpg" className="image filtered span-2-5" data-position="right"><img src={im09} alt="" /></a>
            </div>
        </section>
    )
}