import React from 'react'

const Content = ({ icon, pageHeader, description = '', breadcrumbs = [], children }) => {
  // generate breadcumbs
  const breadcrumbContent = breadcrumbs.length
    ? breadcrumbs.map((item, index) =>
        index === 0 ? (
          <li key={index}>
            <a>
              <i className='fa fa-dashboard'></i> {item}
            </a>
          </li>
        ) : index === breadcrumbs.length - 1 ? (
          <li key={index} className='active'>
            {item}
          </li>
        ) : (
          <li key={index}>{item}</li>
        )
      )
    : null

  return (
    <div className='content-wrapper'>
      <section className='content-header'>
        <h1>
          {icon !== '' && <i className={icon} style={{ marginRight: '7px' }}></i>}
          {pageHeader}
          <small>{description}</small>
        </h1>
        <ol className='breadcrumb'>{breadcrumbContent}</ol>
      </section>
      <section className='content container-fluid'>{children}</section>
    </div>
  )
}

export default Content
