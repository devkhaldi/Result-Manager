const { body, param, query } = require('express-validator/check')

exports.ValidateClasse = method => {
  switch (method) {
    case 'CREATE_CLASSE': {
      return [
        body('title', 'Invalid title').exists(),
        body('subject', 'Invalid subject').exists().isArray(),
        body('optionalSubjects', 'Invalid optionalSubjects').isArray(),
      ]
    }
    case 'UPDATE_CLASSE': {
      return [
        body('title', 'Invalid title'),
        body('subject', 'Invalid subject').isArray(),
        body('optionalSubjects', 'Invalid optionalSubjects').isArray(),
      ]
    }
  }
}
exports.ValidateExam = method => {
  switch (method) {
    case 'CREATE_EXAM': {
      return [
        body('name', 'Invalid name').exists().isString(),
        body('date', 'Invalid date').exists().isDate(),
        body('classes', 'Invalid classes').exists().isArray(),
        body('status', 'Invalid status').exists().isLength({ max: 1 }),
      ]
    }
    case 'UPDATE_EXAM': {
      return [
        body('name', 'Invalid name').isString(),
        body('date', 'Invalid date').isDate(),
        body('classes', 'Invalid classes').isArray(),
        body('status', 'Invalid status').isIn(['P', 'U']),
      ]
    }
  }
}
exports.ValidateGrade = method => {
  switch (method) {
    case 'CREATE_GRADE': {
      return [
        body('name', 'Invalid name').exists().isString(),
        body('markFrom', 'Invalid markFrom').exists().isInt({ min: 0, max: 100 }),
        body('markUpTO', 'Invalid markUpTo').exists().isInt({ min: 0, max: 100 }),
        body('comment', 'Invalid comment').isString(),
      ]
    }
    case 'UPDATE_GRADE': {
      return [
        body('name', 'Invalid name').isString(),
        body('markFrom', 'Invalid markFrom').isInt({ min: 0, max: 100 }),
        body('markUpTO', 'Invalid markUpTo').isInt({ min: 0, max: 100 }),
        body('comment', 'Invalid comment').isString(),
      ]
    }
  }
}
exports.ValidateInstitute = method => {
  switch (method) {
    case 'CREATE_INSTITUTE': {
      return [
        body('name', 'Invalid name').exists().isString(),
        body('email', 'Invalid email').exists().isEmail(),
        body('password', 'Invalid password')
          .exists()
          .isString()
          .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
          .isLength({ min: 8 }),
        body('adress', 'Invalid adress').isString(),
        body('phone', 'Invalid phone').isString(),
        body('website', 'Invalid website').isString().isURL(),
        body('defaultLanguage', 'Invalid defaultLanguage').isString(),
        body('yearStart', 'Invalid yearStart').isInt({
          min: 2010,
          max: new Date().getFullYear(),
        }),
        body('yearEnd', 'Invalid yearEnd').isInt({
          min: 2010,
          max: new Date().getFullYear(),
        }),
        body('theme', 'Invalid theme').isString(),
      ]
    }
    case 'UPDATE_INSTITUTE': {
      return [
        body('name', 'Invalid name').isString(),
        body('email', 'Invalid email').isEmail(),
        body('password', 'Invalid password')
          .exists()
          .isString()
          .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
          .isLength({ min: 8 }),
        body('adress', 'Invalid adress').isString(),
        body('phone', 'Invalid phone').isString(),
        body('website', 'Invalid website').isString().isURL(),
        body('defaultLanguage', 'Invalid defaultLanguage').isString(),
        body('yearStart', 'Invalid yearStart').isInt({
          min: 2010,
          max: new Date().getFullYear(),
        }),
        body('yearEnd', 'Invalid yearEnd').isInt({
          min: 2010,
          max: new Date().getFullYear(),
        }),
        body('theme', 'Invalid theme').isString(),
      ]
    }
  }
}
exports.ValidateSection = method => {
  switch (method) {
    case 'CREATE_SECTION':
    case 'UPDATE_SECTION': {
      return [body('name', 'Invalid name').exists().isString()]
    }
  }
}
exports.ValidateStudent = method => {
  switch (method) {
    case 'CREATE_STUDENT': {
      return [
        body('firstName', 'Invalid firstName').exists().isString(),
        body('middleName', 'Invalid middleName').isString(),
        body('lastName', 'Invalid lastName').exists().isString(),
        body('adress', 'Invalid adress').exists().isString(),
        body('fatherName', 'Invalid fatherName').exists().isString(),
        body('fatherPhone', 'Invalid fatherPhone').exists().isString(),
        body('motherName', 'Invalid motherName').exists().isString(),
        body('motherPhone', 'Invalid motherPhone').exists().isString(),
        body('guardianName', 'Invalid guardianName').isString(),
        body('guardianPhone', 'Invalid guardianPhone').isString(),
        body('dateBirth', 'Invalid dateBirth').exists().isString(),
        body('email', 'Invalid email').exists().isString(),
        body('sex', 'Invalid sex').exists().isString(),
        body('dateJoining', 'Invalid dateJoining').exists().isString(),
        body('class', 'Invalid class').exists().isString(),
        body('section', 'Invalid section').exists().isString(),
        body('password', 'Invalid password').exists().isString(),
      ]
    }
    case 'UPDATE_STUDENT': {
      return []
    }
  }
}
exports.ValidateSubejct = method => {
  switch (method) {
    case 'CREATE_EXAM': {
      return []
    }
    case 'UPDATE_EXAM': {
      return []
    }
  }
}
exports.ValidateTeacher = method => {
  switch (method) {
    case 'CREATE_EXAM': {
      return []
    }
    case 'UPDATE_EXAM': {
      return []
    }
  }
}
