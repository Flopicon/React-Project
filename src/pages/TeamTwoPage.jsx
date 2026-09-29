import { Typography, Card, Tag, Avatar, List, Row, Col, Space } from 'antd'
import { TeamOutlined, UserOutlined, MailOutlined, RocketOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography

const team2Members = [
  { name: 'Morgan Taylor', role: 'Product Manager', email: 'morgan@example.com' },
  { name: 'Taylor Brooks', role: 'DevOps Specialist', email: 'taylor@example.com' },
  { name: 'Casey Zhang', role: 'Data Analyst', email: 'casey@example.com' },
]

function TeamTwoPage() {
  return (
    <div className="team-page">
      <div style={{ marginBottom: 20 }}>
        <Tag color="volcano" icon={<TeamOutlined />} style={{ marginBottom: 8 }}>
          Submenu Route
        </Tag>
        <Title level={2} style={{ margin: '4px 0 8px 0' }}>
          Team 2 - Operations & Growth
        </Title>
        <Paragraph type="secondary" style={{ margin: 0, maxWidth: 600 }}>
          Second team view connected to the submenu routing structure.
        </Paragraph>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={14}>
          <Card title="Team Members" variant="borderless" style={{ border: '1px solid #f0f0f0', borderRadius: 10 }}>
            <List
              itemLayout="horizontal"
              dataSource={team2Members}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar style={{ backgroundColor: '#fa541c' }} icon={<UserOutlined />} />}
                    title={<Text strong>{item.name}</Text>}
                    description={
                      <Space size="middle">
                        <Tag color="volcano">{item.role}</Tag>
                        <Text type="secondary" style={{ fontSize: 13 }}>
                          <MailOutlined style={{ marginRight: 4 }} />
                          {item.email}
                        </Text>
                      </Space>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} md={10}>
          <Card title="Mission & Goals" variant="borderless" style={{ border: '1px solid #f0f0f0', borderRadius: 10 }}>
            <Paragraph>
              <RocketOutlined style={{ color: '#fa541c', marginRight: 8 }} />
              Focused on scaling inventory workflows, analytics dashboards, and deployment automation.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default TeamTwoPage
