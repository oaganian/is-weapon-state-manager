import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import AppLayout from '../../layout/AppLayout';

const { Content } = Layout;

const ArmsRegServicesAddr = (props) => {
  return (
    <AppLayout>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Адреса служб по регистрации оружия</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ padding: 24, minHeight: 360, background: 'white' }}>
          <section className="arms-reg-services-addr">
            <h2>Отделы лицензионно-разрешительной работы Краснодара</h2>
            <ul className="arms-reg-services-addr-list">
              <li>
                <article>
                  <h3>ОЛРР по городу Краснодару и Динскому району</h3>
                  <ul className="arms-reg-services-addr-list_item">
                    <li>
                      <p><small>Адрес: </small> Краснодар, улица Гагарина, 103</p>
                    </li>
                    <li>
                      <p><small>Время работы: </small>
                        пн, ср, пт: с 09:00 до 18:00
                        сб: с 09:00 до 13:00
                      </p>
                    </li>
                    <li>
                      <p><small>Телефон:</small>
                        +7 (861) 221-40-48
                      </p>
                    </li>
                  </ul>
                </article>
              </li>
              <li>
                <article>
                  <h3>ОЛРР по городу Краснодару и Динскому району</h3>
                  <ul className="arms-reg-services-addr-list_item">
                    <li>
                      <p><small>Адрес: </small>
                      Краснодар, улица Димитрова, 131/1</p>
                    </li>
                    <li>
                      <p><small>Время работы: </small>
                        пн, ср, пт: с 09:00 до 18:00
                        сб: с 09:00 до 13:00
                      </p>
                    </li>
                    <li>
                      <p><small>Телефон:</small>
                        +7 (861) 233-13-03
                      </p>
                    </li>
                  </ul>
                </article>
              </li>
              <li>
                <article>
                  <h3>ОЛРР по городу Краснодару и Динскому району</h3>
                  <ul className="arms-reg-services-addr-list_item">
                    <li>
                      <p><small>Адрес: </small>
                      Краснодар, Октябрьская улица, 121</p>
                    </li>
                    <li>
                      <p><small>Время работы: </small>
                        пн, ср, пт: с 09:00 до 18:00
                        сб: с 09:00 до 13:00
                      </p>
                    </li>
                    <li>
                      <p><small>Телефон:</small>
                        +7 (861) 255-55-70
                      </p>
                    </li>
                  </ul>
                </article>
              </li>
              <li>
                <article>
                  <h3>ЦЛРР Главного управления Федеральной службы войск национальной гвардии РФ по Краснодарскому краю</h3>
                  <ul className="arms-reg-services-addr-list_item">
                    <li>
                      <p><small>Адрес: </small>
                        Краснодар, шоссе Нефтяников, 38
                      </p>
                    </li>
                    <li>
                      <p><small>Время работы: </small>
                        пн-чт: с 09:00 до 18:00
                        пт: с 09:00 до 17:00
                      </p>
                    </li>
                    <li>
                      <p><small>Телефон:</small>
                      +7 (861) 212-42-32<br />
                      +7 (861) 224-24-87
                      </p>
                    </li>
                  </ul>
                </article>
              </li>
              <li>
                <article>
                  <h3>ОЛРР по городу Краснодару и Динскому району</h3>
                  <ul className="arms-reg-services-addr-list_item">
                    <li>
                      <p><small>Адрес: </small>
                      Краснодар, улица Дмитрия Благоева, 24
                      </p>
                    </li>
                    <li>
                      <p><small>Время работы: </small>
                        пн, ср, пт: с 09:00 до 18:00
                        сб: с 09:00 до 13:00
                      </p>
                    </li>
                    <li>
                      <p><small>Телефон:</small>

                        +7 (861) 237-53-04
                      </p>
                    </li>
                  </ul>
                </article>
              </li>
            </ul>
          </section>
        </div>
      </Content>
    </AppLayout>
  );
}

export default ArmsRegServicesAddr;