import Footer from 'src/containers/footer'
import Sidebar from 'src/containers/sidebar'

export default function Layout({ Children }) {
  return (
    <>
      <Sidebar></Sidebar>
      {Children}
      <Footer></Footer>
    </>
  )
}
