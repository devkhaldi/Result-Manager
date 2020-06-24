import React from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Footer from '../../../components/Footer'

const Results = () => {
  return (
    <React.Fragment>
      <Header />
      <AcademicsSidebar />
      <div className='content-wrapper'>
        <section className='content-header'>
          <h1>
            <i className='fa fa-trophy' style={{ marginRight: '7px' }}></i>
            Result form
          </h1>
        </section>

        <section class='content'>
          <div class='row'>
            <div class='col-xs-12'>
              <form>
                <div class='box'>
                  <div class='box-body form-horizontal'>
                    <div class='row'>
                      <div class='col-md-6'>
                        <div class='form-group'>
                          <label for='field_id_roll' class='col-sm-4 control-label'>
                            Roll
                          </label>
                          <div class='col-sm-8'>
                            <input type='text' class='form-control' value='' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-md-6'>
                        <div class='form-group'>
                          <label for='field_id_department' class='col-sm-4 control-label'>
                            Select Department
                          </label>
                          <div class='col-sm-8'>
                            <select
                              name='department'
                              id='department'
                              class='form-control required'>
                              <option value='0'> Select Department </option>
                              <option value='1'>A</option>
                              <option value='2'>B</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-md-6'>
                        <div class='form-group'>
                          <label for='field_id_class' class='col-sm-4 control-label'>
                            Seelct class
                          </label>
                          <div class='col-sm-8'>
                            <select
                              name='class_name'
                              id='class'
                              class='form-control required'>
                              <option value='0'> Select Class </option>
                              <option value='1'>One</option>
                              <option value='2'>Two</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-md-6'>
                        <div class='form-group'>
                          <label for='field_id_exam' class='col-sm-4 control-label'>
                            Seelct exam
                          </label>
                          <div class='col-sm-8'>
                            <select
                              id='exam'
                              name='exam_name'
                              class='form-control required examBox'>
                              <option value='0'> Select Exam </option>
                              <option value='1'>1st Tearminal</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-md-6'>
                        <div class='form-group'>
                          <label for='field_id_year' class='col-sm-4 control-label'>
                            Select year
                          </label>
                          <div class='col-sm-8'>
                            <select
                              id='id_year'
                              class='form-control'
                              name='year'
                              required='required'>
                              <option value='2015'>2015</option>
                              <option value='2016'>2016</option>
                              <option value='2017'>2017</option>
                              <option value='2018'>2018</option>
                              <option value='2019'>2019</option>
                              <option value='2020' selected='selected'>
                                2020
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-md-6'>
                        <div class='form-group'>
                          <div class='col-sm-4 control-label'></div>
                          <div class='col-sm-8'>
                            <input
                              type='submit'
                              class='btn btn-primary'
                              value='View result'
                              name=''
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </React.Fragment>
  )
}

export default Results
