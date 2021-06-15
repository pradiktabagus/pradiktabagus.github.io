import React from 'react';
import Sidebar from 'al-comps/sidebar';
import 'al-styles/base.scss';
export default function App() {
  return (
    <div className="root">
      <div className="section-app">
        <Sidebar />
        <div className="content">
          <div className="inner-body">
            <div className="section-convertation">
              <div />
              <div />
            </div>
            <div className="section-footer">
              <div className="section-quetion">
                <textarea
                  className="quetion-area"
                  placeholder="Ask anything about me...!"
                />
                <div className="btn-area">
                  <button className="btn-send">send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="header-fixed">
        <nav className="navbar-fixed">
          <Search placeholder="Search" />
          <NavLink to="/auth" className="login">
            Login
          </NavLink>
        </nav>
      </div>
      <div className="section">
        <Switch>
          <Route exact="exact" path="/" component={HomePage} />
          <Route path="/auth" component={Auth} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <GlobalStyle /> */}
    </div>
  );
}
