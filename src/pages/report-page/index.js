import { Layout } from 'antd';
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderTimeDaily from '../../components/header/HeaderTimeDaily'

function ReportPage() {
  const { Header, Sider, Content } = Layout;

  return (
    <>
      <Layout>
        <Sider theme="light" width={326} className="sidebar">
          <Sidebar />
        </Sider>

        <Layout>
          <HeaderTimeDaily />
          <Content style={{ padding: 40 }} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. At volutpat diam ut venenatis tellus in metus. Aliquet nec ullamcorper sit amet risus. Sit amet dictum sit amet. Sit amet consectetur adipiscing elit ut aliquam. Vitae elementum curabitur vitae nunc sed velit dignissim. Amet consectetur adipiscing elit duis. Mi sit amet mauris commodo quis imperdiet massa. Eget est lorem ipsum dolor. Rutrum quisque non tellus orci ac. Semper auctor neque vitae tempus quam pellentesque nec. Cursus mattis molestie a iaculis at erat pellentesque.

            Et tortor at risus viverra adipiscing at in. Pulvinar mattis nunc sed blandit libero volutpat sed. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Tortor consequat id porta nibh venenatis. Morbi non arcu risus quis varius. Metus vulputate eu scelerisque felis imperdiet. Elementum tempus egestas sed sed risus pretium quam. In est ante in nibh mauris cursus mattis molestie. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Etiam dignissim diam quis enim. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum.

            Penatibus et magnis dis parturient montes nascetur ridiculus mus. Dapibus ultrices in iaculis nunc. Amet facilisis magna etiam tempor orci eu lobortis elementum. Ultricies mi eget mauris pharetra et ultrices neque. Eleifend mi in nulla posuere sollicitudin aliquam. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Quis blandit turpis cursus in hac. Massa tincidunt dui ut ornare lectus sit amet est. Dignissim convallis aenean et tortor at risus viverra. Pulvinar pellentesque habitant morbi tristique senectus et. Rhoncus dolor purus non enim praesent elementum facilisis. Nunc consequat interdum varius sit amet mattis.

            Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Porta non pulvinar neque laoreet. Morbi leo urna molestie at elementum eu facilisis. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Gravida quis blandit turpis cursus in hac. Quis lectus nulla at volutpat diam ut. Sed risus pretium quam vulputate dignissim suspendisse in est. Mauris a diam maecenas sed enim ut. Quis enim lobortis scelerisque fermentum. Nec feugiat nisl pretium fusce id. Tellus rutrum tellus pellentesque eu. Consequat mauris nunc congue nisi. Id velit ut tortor pretium viverra suspendisse potenti nullam. Mauris nunc congue nisi vitae suscipit tellus mauris. Nec nam aliquam sem et tortor consequat id porta nibh. Cras pulvinar mattis nunc sed blandit libero volutpat. Arcu non odio euismod lacinia at quis risus sed vulputate. Suspendisse sed nisi lacus sed. Eros donec ac odio tempor orci.

            Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Leo duis ut diam quam. Dui nunc mattis enim ut tellus. Ultrices neque ornare aenean euismod elementum nisi quis. Volutpat blandit aliquam etiam erat velit. Nisi quis eleifend quam adipiscing vitae proin. Id diam vel quam elementum pulvinar etiam non quam. Blandit libero volutpat sed cras ornare. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Augue interdum velit euismod in pellentesque massa placerat duis ultricies.
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default ReportPage

// style={{ background: 'none' }}
