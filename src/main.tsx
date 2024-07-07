import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout style={{ height: '100vh' }}>
      <Sider width={100}>Sider</Sider>
      <Layout>
        <Header style={{ backgroundColor: "lightblue" }}>Header</Header>
        <Content>
          <App />
        </Content>
        <Footer style={{ backgroundColor: "pink" }}>Footer</Footer>
      </Layout>
    </Layout>
  </React.StrictMode>,
)
