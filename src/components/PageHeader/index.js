import React from 'react';
import './index.scss'

function PageHeader(props) {
  const { primaryTitle, secondaryTitle } = props;
  return (
    <div className='custom-container'>
      <div className='page-header d-flex ai-c'>
        <div className='primary-title'>
          {primaryTitle}
        </div>
        <div className='secondary-title'>
          {secondaryTitle}
        </div>
      </div>
    </div>
  )
}
export default PageHeader;