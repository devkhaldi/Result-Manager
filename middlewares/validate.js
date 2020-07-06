const { body, param, query } = require('express-validator')

exports.validateClasse = method => {
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
exports.validateExam = method => {
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
exports.validateGrade = method => {
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
exports.validateInstitute = method => {
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
exports.validateSection = method => {
  switch (method) {
    case 'CREATE_SECTION':
    case 'UPDATE_SECTION': {
      return [body('name', 'Invalid name').exists().isString()]
    }
  }
}

exports.validateStudent = method => {
  switch (method) {
    case 'CREATE_STUDENT': {
      return [
        body('firstName', 'Invalid firstName').exists().isString(),
        body('middleName', 'Invalid middleName').isString(),
        body('lastName', 'Invalid lastName').exists().isString(),
        body('adress', 'Invalid adress').exists(),
        body('fatherName', 'Invalid fatherName').exists().isString(),
        body('fatherPhone', 'Invalid fatherPhone').exists(),
        body('motherName', 'Invalid motherName').exists().isString(),
        body('motherPhone', 'Invalid motherPhone').exists(),
        body('guardianName', 'Invalid guardianName').isString(),
        body('guardianPhone', 'Invalid guardianPhone'),
        body('dateBirth', 'Invalid dateBirth').exists().isDate(),
        body('email', 'Invalid email').exists().isEmail(),
        body('sex', 'Invalid sex').exists().isIn(['F', 'M']),
        body('dateJoining', 'Invalid dateJoining').exists().isDate(),
        body('class', 'Invalid class').exists().isString(),
        body('section', 'Invalid section').exists().isString(),
        body('password', 'Invalid password').exists().isString(),
      ]
    }
    case 'UPDATE_STUDENT': {
      return [
        body('firstName', 'Invalid firstName').isString(),
        body('middleName', 'Invalid middleName').isString(),
        body('lastName', 'Invalid lastName').isString(),
        body('adress', 'Invalid adress'),
        body('fatherName', 'Invalid fatherName').isString(),
        body('fatherPhone', 'Invalid fatherPhone'),
        body('motherName', 'Invalid motherName').isString(),
        body('motherPhone', 'Invalid motherPhone'),
        body('guardianName', 'Invalid guardianName').isString(),
        body('guardianPhone', 'Invalid guardianPhone'),
        body('dateBirth', 'Invalid dateBirth').isDate(),
        body('email', 'Invalid email').isEmail(),
        body('sex', 'Invalid sex').isIn(['F', 'M']),
        body('dateJoining', 'Invalid dateJoining').isDate(),
        body('class', 'Invalid class').isString(),
        body('section', 'Invalid section').isString(),
        body('password', 'Invalid password').isString(),
      ]
    }
  }
}
exports.validateSubejct = method => {
  switch (method) {
    case 'CREATE_SUBJECT':
    case 'UPDATE_SUBJECT': {
      return [body('name', 'Invalid name').exists().isString()]
    }
  }
}
exports.validateTeacher = method => {
  switch (method) {
    case 'CREATE_TEACHER': {
      return [
        body('name', 'Invalid name').exists().isString(),
        body('email', 'Invalid email').exists().isEmail(),
        body('subjects', 'Invalid subjects').exists().isArray(),
        body('password', 'Invalid password').exists(),
      ]
    }
    case 'UPDATE_TEACHER': {
      return [
        body('name', 'Invalid name').isString(),
        body('email', 'Invalid email').isEmail(),
        body('subjects', 'Invalid subjects').isArray(),
        body('password', 'Invalid password'),
      ]
    }
  }
}
