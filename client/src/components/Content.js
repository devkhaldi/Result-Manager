import React from 'react'

const Content = ({ icon, pageHeader, description = '', breadcrumbs = [], children }) => {
  // generate breadcumbs
  const breadcrumbContent = breadcrumbs.length
    ? breadcrumbs.map((item, index) =>
        index === 0 ? (
          <li key={index}>
            <a href='#'>
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
      {/* Content Header (Page header)  */}
      <section className='content-header'>
        <h1>
          {icon !== '' && <i className={icon} style={{ marginRight: '7px' }}></i>}
          {pageHeader}
          <small>{description}</small>
        </h1>
        <ol className='breadcrumb'>{breadcrumbContent}</ol>
      </section>

      {/* Main content  */}
      <section className='content container-fluid'>{children}</section>
      {/* /.content  */}
    </div>
  )
}

export default Content
