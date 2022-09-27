import Link from 'next/link';
import Button from 'react-bootstrap/Button'

const Header = props => {
  return (
    <header className="header-bg-purple text-black mo-left" id="fix-header">
      <div className="main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix">
          <div className="container clearfix">
            {/* <!-- Website Logo --> */}
            <div className="logo-header mostion logo-dark">
              <Link href="/"><a><img src="/images/logo/logo-loudspeaker.png" alt=""/></a></Link>
            </div>
            <div 
              style={{ 
                height: '85px', alignItems: 'center', display: 'flex'
              }}>
              <Button style={{ marginLeft: 'auto' }}>Logout</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header