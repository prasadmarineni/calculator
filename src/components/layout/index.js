import Header from '../header';
import Footer from '../footer';

function Layout({children}) {
  return (
    <div className="main">
      <Header/>
      <br></br>
      <div className="container">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
