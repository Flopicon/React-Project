import { useNavigate } from 'react-router'
import { Result, Button } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" icon={<HomeOutlined />} onClick={() => navigate('/')}>
          Back Home
        </Button>
      }
    />
  )
}

export default NotFoundPage
