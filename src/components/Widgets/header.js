import React from 'react';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { routes } from "./../../App"
import appleLogo from "./../../assets/images/apple-logo.png"
import './widgets.scss'
import useWindowDimensions from 'hooks/window-dimensions';
import MaterialIcon from 'react-google-material-icons';

const { Header: HeaderAntd } = Layout;

export default function Header(props) {
  const history = useHistory()
  const { width } = useWindowDimensions();


  const windowHeader = <div className="custom-container">
    <Menu
      mode="horizontal"
      selectedKeys={[routes.home.path]}
    >
      <div className='d-flex ai-c j-sb w-100'>
        <Menu.Item className="header__logo" onClick={() => history.replace("/")}>
          <div className='main-logo'>
            <img src={appleLogo} className="logo" alt="logo" />
          </div>
        </Menu.Item>
        <Menu.Item className="header-item" onClick={() => history.replace("/")}>
          Store
        </Menu.Item>
        <Menu.Item className="header-item" onClick={() => history.replace("/")}>
          Mac
        </Menu.Item>
        <Menu.Item className="header-item" onClick={() => history.replace("/")}>
          iPad
        </Menu.Item>
        <Menu.Item className="header-item" onClick={() => history.replace("/")}>
          iPhone
        </Menu.Item>
        <Menu.Item className="header-item" onClick={() => history.replace("/")}>
          Watch
        </Menu.Item>
        <Menu.Item className="header-item" onClick={() => history.replace("/")}>
          AirPods
        </Menu.Item>
        <Menu.Item className="header-item" onClick={() => history.replace("/")}>
          TV & Home
        </Menu.Item>
        <Menu.Item className="header-item" onClick={() => history.replace("/")}>
          Only on Apple
        </Menu.Item>
        <Menu.Item className="header-item" onClick={() => history.replace("/")}>
          Accessories
        </Menu.Item>
        <Menu.Item className="header-item" onClick={() => history.replace("/")}>
          Suport
        </Menu.Item>
        <Menu.Item className="header-item direct" onClick={() => history.replace("/")}>
          <MaterialIcon icon="search" size={17} />
        </Menu.Item>
        <Menu.Item className="header-item direct" onClick={() => history.replace("/")}>
          <MaterialIcon icon="work" size={17} />
        </Menu.Item>
      </div>
    </Menu>
  </div>;


  const menuMobileContent = <Menu
    mode="vertical"
    selectedKeys={[routes.home.path]}
  >
    <div className='d-flex ai-c j-sb w-100'>
      <Menu.Item className="header-item" onClick={() => history.replace("/")}>
        Store
      </Menu.Item>
      <Menu.Item className="header-item" onClick={() => history.replace("/")}>
        Mac
      </Menu.Item>
      <Menu.Item className="header-item" onClick={() => history.replace("/")}>
        iPad
      </Menu.Item>
      <Menu.Item className="header-item" onClick={() => history.replace("/")}>
        iPhone
      </Menu.Item>
      <Menu.Item className="header-item" onClick={() => history.replace("/")}>
        Watch
      </Menu.Item>
      <Menu.Item className="header-item" onClick={() => history.replace("/")}>
        AirPods
      </Menu.Item>
      <Menu.Item className="header-item" onClick={() => history.replace("/")}>
        TV & Home
      </Menu.Item>
      <Menu.Item className="header-item" onClick={() => history.replace("/")}>
        Only on Apple
      </Menu.Item>
      <Menu.Item className="header-item" onClick={() => history.replace("/")}>
        Accessories
      </Menu.Item>
      <Menu.Item className="header-item" onClick={() => history.replace("/")}>
        Suport
      </Menu.Item>
    </div>
  </Menu>;

  const mobileHeader = <div className='mobile-header'>
    <div className='main-logo'>
      <img src={appleLogo} className="logo" alt="logo" />
    </div>
  </div>

  const header = width >= 700 ? windowHeader : mobileHeader;
  return (
    <HeaderAntd className="header">
      {header}
    </HeaderAntd>
  );
}
