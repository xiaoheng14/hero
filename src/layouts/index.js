import styles from './index.css';
import { Layout, Menu } from 'antd';
import Link from 'umi/link';
import React from 'react';

const {Header, Content, Footer } = Layout;

const menuData = [
  {route: 'hero', name: '英雄'},
  {route: 'item', name: '局内道具'},
  {route: 'summoner', name: '召唤师技能'},
];

function BasicLayout(props) {
  // 从属性中取出当前的路由
  // const location = props.location;
  // const pathname = location.pathname;

    const {
        location: { pathname },
        children,
    } = props;
    console.log(pathname);
  return (
    <Layout>
      <Header>
          <div className={styles.logo}>
              <Link to={'/'}>王者荣耀资料库</Link>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[pathname]}
            style={{ lineHeight: '64px' }}
            >
            {menuData.map(menu => (
              <Menu.Item key={`/${menu.route}`}>
                <Link to={menu.route}>{menu.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
      </Header>
      <Content style={{ padding: '0 50ox' }}>
        <div style={{ background: '#fff', padding: 24,
        minHeight: 280}}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Umi 入门</Footer>
    </Layout>
  );
}

export default BasicLayout;
