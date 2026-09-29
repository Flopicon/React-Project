import { Typography, Card, Tag, Avatar, List, Row, Col, Space } from 'antd'
import { TeamOutlined, UserOutlined, MailOutlined, SafetyCertificateOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography

const team1Members = [
  { name: 'Alex Johnson', role: 'Lead Developer', email: 'alex@example.com' },
  { name: 'Sam Rivera', role: 'UI/UX Designer', email: 'sam@example.com' },
  { name: 'Jordan Lee', role: 'QA Engineer', email: 'jordan@example.com' },
]

function TeamOnePage() {
  return (
    <div className="team-page">
      <div style={{ marginBottom: 20 }}>
        <Tag color="geekblue" icon={<TeamOutlined />} style={{ marginBottom: 8 }}>
          Submenu Route
        </Tag>
        <Title level={2} style={{ margin: '4px 0 8px 0' }}>
          Team 1 - Core Development
        </Title>
        <Paragraph type="secondary" style={{ margin: 0, maxWidth: 600 }}>
          This page demonstrates nested routing via React Router connected to the sidebar submenu.
        </Paragraph>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={14}>
          <Card title="Team Members" variant="borderless" style={{ border: '1px solid #f0f0f0', borderRadius: 10 }}>
            <List
              itemLayout="horizontal"
              dataSource={team1Members}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar style={{ backgroundColor: '#1677ff' }} icon={<UserOutlined />} />}
                    title={<Text strong>{item.name}</Text>}
                    description={
                      <Space size="middle">
                        <Tag color="blue">{item.role}</Tag>
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
          <Card title="Department Overview" variant="borderless" style={{ border: '1px solid #f0f0f0', borderRadius: 10 }}>
            <Paragraph>
              <SafetyCertificateOutlined style={{ color: '#52c41a', marginRight: 8 }} />
              Responsible for core inventory modules, routing architecture, and component state management.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default TeamOnePage
