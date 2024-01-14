"use client";

import {ReactNode, useEffect, useState} from "react";
import styles from "./styles.module.scss";
import {Avatar, Button, Dropdown, Layout, Menu, theme} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartSimple,
  faCrown,
  faGear,
  faNoteSticky, faSignOut, faStore, faUser,
  faUsers,
  faUtensils
} from "@fortawesome/free-solid-svg-icons";
import LogoHorizontal from "@/components/layouts/merchant/MerchantDashboard/LogoHorizontal";
import {faBell, faQuestionCircle} from "@fortawesome/free-regular-svg-icons";
import {useRouter} from "next/navigation";

interface MerchantDashboardProps {
  children: ReactNode;
}

export default function MerchantDashboard(props: MerchantDashboardProps) {
  const {token} = theme.useToken();
  const [siderCollapsed, setSiderCollapsed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log(router)
  }, [router]);

  const menuItems = [{
    key: 'statistics',
    label: 'Statistics',
    icon: <FontAwesomeIcon icon={faChartSimple}/>,
    onClick: () => {
      router.push('/merchant/');
    }
  }, {
    key: 'orders',
    label: 'Orders',
    icon: <FontAwesomeIcon icon={faNoteSticky}/>,
    onClick: () => {
      router.push('/merchant/orders/');
    }
  }, {
    key: 'management',
    label: 'Management',
    icon: <FontAwesomeIcon icon={faGear}/>,
    children: [{
      key: 'customers',
      label: 'Customers',
      icon: <FontAwesomeIcon icon={faUsers}/>,
      onClick: () => {
        router.push('/merchant/customers/');
      }
    }, {
      key: 'loyalty',
      label: 'Loyalty',
      icon: <FontAwesomeIcon icon={faCrown}/>,
      onClick: () => {
        router.push('/merchant/loyalty/');
      }
    }, {
      key: 'menu',
      label: 'Menu',
      icon: <FontAwesomeIcon icon={faUtensils}/>,
      onClick: () => {
        router.push('/merchant/menu/');
      }
    }]
  }];

  return <Layout className={styles.merchantDashboard}>
    <Layout.Sider
      collapsed={siderCollapsed}
      className={styles.sider}
      style={{
        backgroundColor: token.colorBgContainer
      }}
    >
      <LogoHorizontal/>
      <Menu
        items={menuItems}
      />
    </Layout.Sider>
    <Layout>
      <Layout.Header
        className={styles.header}
        style={{
          background: token.colorBgContainer,
          padding: '0 16px',
        }}
      >
        <Button
          type={'text'}
          icon={<FontAwesomeIcon icon={faBars}/>}
          onClick={() => setSiderCollapsed(!siderCollapsed)}
        />
        <div className={styles.controls}>
          <Button
            shape={'circle'}
            type={'text'}
            icon={<FontAwesomeIcon icon={faBell}/>}
          />
          <Button
            className={styles.item}
            shape={'round'}
            type={'text'}
            icon={<FontAwesomeIcon icon={faQuestionCircle}/>}
          >
            Help
          </Button>
          <Dropdown
            menu={{
              items: [{
                key: 'merchant',
                label: 'Merchant',
                icon: <FontAwesomeIcon icon={faStore}/>
              }, {
                type: 'divider',
              }, {
                key: 'account',
                label: 'Account',
                icon: <FontAwesomeIcon icon={faUser}/>
              }, {
                key: 'settings',
                label: 'Settings',
                icon: <FontAwesomeIcon icon={faGear}/>
              }, {
                type: 'divider'
              }, {
                key: 'logout',
                label: 'Sign Out',
                icon: <FontAwesomeIcon icon={faSignOut}/>,
                danger: true,
              }]
            }}
          >
            <Button
              className={styles.item} type={'text'}
              icon={<Avatar icon={<FontAwesomeIcon icon={faUser}/>} size={20}/>}
              shape={'round'}
            >
              D Brand Foods
            </Button>
          </Dropdown>
        </div>
      </Layout.Header>
      <Layout.Content>
        {props.children}
      </Layout.Content>
    </Layout>
  </Layout>
}
