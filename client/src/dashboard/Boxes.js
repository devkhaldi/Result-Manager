import React from 'react'

const Boxes = () => {
  return (
    <div className='dashboard-boxes row'>
      {data.map(item => (
        <div key={item.id} className='col-lg-3 col-xs-6'>
          <div className={`small-box p-5 ${item.color}`}>
            <div className='inner'>
              <h3>{item.value}</h3>
              <p>{item.title}</p>
            </div>
            <div className='icon my-2'>
              <i className={item.iconClass}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const data = [
  {
    id: 1,
    color: 'bg-aqua',
    value: 4,
    title: 'Total Students',
    iconClass: 'ion-ios-people',
  },
  {
    id: 2,
    color: 'bg-green',
    value: 2,
    title: 'Total Class',
    iconClass: 'fa fa-sitemap',
  },
  {
    id: 3,
    color: 'bg-yellow',
    value: 4,
    title: 'Total Subjects',
    iconClass: 'fa fa-book',
  },
  { id: 4, color: 'bg-red', value: 2, title: 'Total Exam', iconClass: 'fa fa-pencil' },
]

export default Boxes
