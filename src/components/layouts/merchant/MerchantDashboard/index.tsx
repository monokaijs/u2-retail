"use client";

import {ReactNode} from "react";
import styles from "./styles.module.scss";
import {Layout, Menu, theme} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartSimple, faNoteSticky, faUsers} from "@fortawesome/free-solid-svg-icons";

interface MerchantDashboardProps {
  children: ReactNode;
}

export default function MerchantDashboard(props: MerchantDashboardProps) {
  const {token} = theme.useToken();
  const menuItems = [{
    key: 'statistics',
    label: 'Statistics',
    icon: <FontAwesomeIcon icon={faChartSimple}/>
  }, {
    key: 'orders',
    label: 'orders',
    icon: <FontAwesomeIcon icon={faNoteSticky}/>
  }, {
    key: 'customers',
    label: 'Customers',
    icon: <FontAwesomeIcon icon={faUsers}/>
  }];

  return <Layout className={styles.merchantDashboard}>
    <Layout.Sider className={styles.sider} style={{
      backgroundColor: token.colorBgContainer
    }}>
      <Menu
        items={menuItems}
      />
    </Layout.Sider>
    <Layout.Content>
      Main content goes here
    </Layout.Content>
  </Layout>
}
