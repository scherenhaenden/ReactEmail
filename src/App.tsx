import HtmlInlineStylesConvertor from './features/styling/html-inline-styles-convertor';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmailsBox from './components/emails-box';
import SideBarMenu from './components/side-bar-menu';


function App() {

  const htmlInlineStylesConvertor = new HtmlInlineStylesConvertor();


  return (
    <div className="App">

<nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" 
  aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
  <ul className="navbar-nav px-3">
    <li className="nav-item text-nowrap">
      <a className="nav-link" href="#">Sign out</a>
    </li>
  </ul>
</nav>





      
      <div className="container-fluid">
  <div className="row panel-row-no-header">

  <SideBarMenu />   



    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor" 
    style={htmlInlineStylesConvertor.GetReactStyleByInlineInput("position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;")}
    
    
    >
      <div className="chartjs-size-monitor-expand" 
    style={htmlInlineStylesConvertor.GetReactStyleByInlineInput("position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;")}    
    >
      <div 
    style={htmlInlineStylesConvertor.GetReactStyleByInlineInput("position:absolute;width:1000000px;height:1000000px;left:0;top:0")} 
    
    ></div></div><div className="chartjs-size-monitor-shrink" 
    style=
    {htmlInlineStylesConvertor.GetReactStyleByInlineInput("position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;")} 
    >
      <div style=
      {htmlInlineStylesConvertor.GetReactStyleByInlineInput("position:absolute;width:200%;height:200%;left:0; top:0")} 
      
      >
        </div>
        </div>
        </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group mr-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            This week
          </button>
        </div>
      </div>


      <EmailsBox />   

      <h2>Section title</h2>
    </main>
  </div>
</div>
    </div>
  );
}

export default App;
