import React from 'react';
import { Breadcrumb, Table, Drawer } from 'antd';
import AdminProfileAllDetail from './Detail/Detail';

const AdminProfileAll = (props) => {
  const columns = [
    {
      title: 'Логин',
      dataIndex: 'login',
    },
    {
      title: 'Пароль',
      dataIndex: 'password'
    },
    {
      title: 'ФИО',
      dataIndex: 'fio',
    },
    {
      title: 'Серия паспорта',
      dataIndex: 'passportSeries'

    },
    {
      title: 'Номер паспорта',
      dataIndex: 'passportNumber'
    },
    {
      title: 'Место прописки',
      dataIndex: 'registerPlace'
    }
  ];
  return (
    <div>
      <div style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Список всех пользователей</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ padding: 24, minHeight: 360, background: 'white' }}>
          <Table
            style={{ marginTop: 30 }}
            columns={columns}
            rowKey={record => record._id}

            dataSource={props.data}
            pagination={props.pagination}
            loading={props.loading}
            onChange={(e) => { props.tableChange(e.current, props.limit) }}
            onRow={(r) => ({
              onDoubleClick: (e) => { props.adminFetchUserById(r._id) }    // при нажатии нужно фиксировать id человека
            })}
          />
          <Drawer
            width={640}
            placement="right"
            closable={false}
            visible={props.drawer.visible}
            onClose={(e) => {
              props.closeDrawer();
            }}
          >
            <AdminProfileAllDetail
              currentUser={props.currentUser}
              adminDeleteUserById={props.adminDeleteUserById}
            />
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AdminProfileAll;