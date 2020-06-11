import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import AppLayout from '../../layout/AppLayout';

const { Content } = Layout;

const MedInstitutionsAddr = (props) => {
  return (
    <AppLayout>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Адреса медицинских учреждений</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ padding: 24, minHeight: 360, background: 'white' }}>
          <section className="arms-reg-services-addr">
            <h2>Список медицинских учреждений Краснодара</h2>
            <ul className="arms-reg-services-addr-list">
              <li>
                <article>
                  <h3>МБУЗ «ГОРОДСКАЯ БОЛЬНИЦА № 1»</h3>
                  <p><small>Адрес: </small>350000, ул. Красная, 103/Длинная,123</p>
                </article>
              </li>
              <li>
                <article>
                  <h3>МБУЗ «ГОРОДСКАЯ ПОЛИКЛИНИКА № 1»»</h3>
                  <p><small>Адрес: </small>350000, ул. им. Северная 275/1</p>
                </article>
              </li>
              <li>
                <article>
                  <h3>МБУЗ «ГОРОДСКАЯ ПОЛИКЛИНИКА № 5»</h3>
                  <p><small>Адрес: </small>350004, ул. им. Калинина, 243</p>
                </article>
              </li>
              <li>
                <article>
                  <h3>МБУЗ ГОРОДСКАЯ ПОЛИКЛИНИКА № 19»</h3>
                  <p><small>Адрес: </small>350051, ул. Офицерская, 33</p>
                </article>
              </li>
              <li>
                <article>
                  <h3>МБУЗ «ГОРОДСКАЯ ПОЛИКЛИНИКА № 25»</h3>
                  <p><small>Адрес: </small>350089, ул. Платановый бульвар, 10/а</p>
                </article>
              </li>
              <li>
                <article>
                  <h3>МБУЗ «ГОРОДСКАЯ ПОЛИКЛИНИКА № 26»</h3>
                  <p><small>Адрес: </small>350063, ул. Постовая, 18</p>
                </article>
              </li>
              <li>
                <article>
                  <h3>ГБУЗ «КРАЕВАЯ БОЛЬНИЦА № 3» ДЗ КК</h3>
                  <p><small>Адрес: </small>350007, ул. им. Захарова, 59</p>
                </article>
              </li>
              <li>
                <article>
                  <h3>ФИЛИАЛ № 2 ФБУ «1602 ОВКГ» МО РФ</h3>
                  <p><small>Адрес: </small>350063, ул. Постовая, 6</p>
                </article>
              </li>
              <li>
                <article>
                  <h3>ПОЛИКЛИНИКА ФИЛИАЛА № 2  ФГУ «1602 ОВКГ» МО России</h3>
                  <p><small>Адрес: </small>350063, ул. Октябрьская, 2</p>
                </article>
              </li>
            </ul>
          </section>
        </div>
      </Content>
    </AppLayout>
  );
}

export default MedInstitutionsAddr;