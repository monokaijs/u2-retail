import {Card, Col, Row} from "antd";
import styles from "./styles.module.scss";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faUser} from "@fortawesome/free-solid-svg-icons";

function StatisticCard({stat, desc, icon}: {stat: string, desc: string, icon?: IconProp}) {
  return <Card
    className={styles.statisticCard} bodyStyle={{padding: 0}}
  >
    <div className={styles.stat}>
      {stat}
    </div>
    <div className={styles.desc}>
      {desc}
    </div>
  </Card>
}

export default function () {
  return <div style={{padding: 16}}>
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={12} xl={6}>
        <StatisticCard
          stat={'100'}
          desc={'New Customer'}
          icon={faUser}
        />
      </Col>
      <Col xs={24} sm={24} md={12} xl={6}>
        <StatisticCard
          stat={'100'}
          desc={'New Customer'}
        />
      </Col>
      <Col xs={24} sm={24} md={12} xl={6}>
        <StatisticCard
          stat={'100'}
          desc={'New Customer'}
        />
      </Col>
      <Col xs={24} sm={24} md={12} xl={6}>
        <StatisticCard
          stat={'100'}
          desc={'New Customer'}
        />
      </Col>
    </Row>
  </div>
}
