import React from "react";
import useTranslation from "../i18n";
import pic05 from "../assets/images/pic01.jpg";
export default function EmploymentHistory() {
  const { t } = useTranslation();
  return (
    <section id="work_experience_home" className="panel spotlight short center">
      <div className="content span-5">
        <h2 className="major">{t("employment_history")}</h2>
        <ul className="alt">
          <li>
            <strong>VAI COMMUNITY S.A.S.</strong>, BOGOTÁ - Fullstack Developer
            - Development and support of mobile app, Vai Community - November
            1, 2022 - September 22 , 2023{" "}
          </li>
          <li>
            <strong>EVOLUTION S.A.S.</strong>, MEDELLÍN - Desarrollador frontend
            - I developed in the mobile app, LendingPoint as support and
new features front developer. - September
            10, 2021 - October 21 2022{" "}
          </li>

          <li>
            <strong>CEREZA GROUP S.A.S.</strong>, BOGOTÁ - Representante Legal -
            I Lead and programing web and mobile apps, for customers
in Colombia, Argentina, United Kingdom and Chile. - 18/03/20 - PRESENT{" "}
          </li>
          <li>
            <strong>
              FEDERACIÓN COLOMBIANA DE LA INDUSTRIA DEL SOFTWARE Y TI (FEDESOFT)
            </strong>
            , BOGOTÁ - Fullstack programming Trainer - Trainer in hybrids fullstack apps with POSTGRESQL, RUBY y IONIC -
            12/07/18 - 06/11/18{" "}
          </li>
          {/* <li>
            <strong>
              TRIBUNAL SUPERIOR DEL DISTRITO JUDICIAL DE MOCOA - PUTUMAYO
            </strong>
            , MOCOA - Técnico de Sistemas grado 11 - Apoyo en sistemas de
            gestión documental 12/01/16 - 05/02/17{" "}
          </li> */}
        </ul>
      </div>
      <div className="image filtered tinted" data-position="top right">
        <img src={pic05} alt="" />
      </div>
    </section>
  );
}
