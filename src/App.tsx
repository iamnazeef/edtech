import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

const App = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider width={100}>Sider</Sider>
      <Layout>
        <Header style={{ backgroundColor: "lightblue" }}>Header</Header>
        <Content>
          Hello World
        </Content>
        <Footer style={{ backgroundColor: "pink" }}>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default App;