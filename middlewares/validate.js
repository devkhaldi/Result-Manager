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
        body('title', 'Invalid title').optional(),
        body('subject', 'Invalid subject').optional().isArray(),
        body('optionalSubjects', 'Invalid optionalSubjects').optional().isArray(),
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
        body('name', 'Invalid name').optional().isString(),
        body('date', 'Invalid date').optional().isDate(),
        body('classes', 'Invalid classes').optional().isArray(),
        body('status', 'Invalid status').optional().isIn(['P', 'U']),
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
        body('comment', 'Invalid comment').optional().isString(),
      ]
    }
    case 'UPDATE_GRADE': {
      return [
        body('name', 'Invalid name').optional().isString(),
        body('markFrom', 'Invalid markFrom').optional().isInt({ min: 0, max: 100 }),
        body('markUpTO', 'Invalid markUpTo').optional().isInt({ min: 0, max: 100 }),
        body('comment', 'Invalid comment').optional().isString(),
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
        body('adress', 'Invalid adress').optional().isString(),
        body('phone', 'Invalid phone').optional().isString(),
        body('website', 'Invalid website').optional().isString().isURL(),
        body('defaultLanguage', 'Invalid defaultLanguage').optional().isString(),
        body('yearStart', 'Invalid yearStart').optional().isInt({
          min: 2010,
          max: new Date().getFullYear(),
        }),
        body('yearEnd', 'Invalid yearEnd').optional().isInt({
          min: 2010,
          max: new Date().getFullYear(),
        }),
        body('theme', 'Invalid theme').optional().isString(),
      ]
    }
    case 'UPDATE_INSTITUTE': {
      return [
        body('name', 'Invalid name').optional().isString(),
        body('email', 'Invalid email').optional().isEmail(),
        body('password', 'Invalid password')
          .optional()
          .isString()
          .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
          .isLength({ min: 8 }),
        body('adress', 'Invalid adress').optional().isString(),
        body('phone', 'Invalid phone').optional().isString(),
        body('website', 'Invalid website').optional().isString().isURL(),
        body('defaultLanguage', 'Invalid defaultLanguage').optional().isString(),
        body('yearStart', 'Invalid yearStart').optional().isInt({
          min: 2010,
          max: new Date().getFullYear(),
        }),
        body('yearEnd', 'Invalid yearEnd').optional().isInt({
          min: 2010,
          max: new Date().getFullYear(),
        }),
        body('theme', 'Invalid theme').optional().isString(),
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
        body('middleName', 'Invalid middleName').optional().isString(),
        body('lastName', 'Invalid lastName').exists().isString(),
        body('adress', 'Invalid adress').exists(),
        body('fatherName', 'Invalid fatherName').exists().isString(),
        body('fatherPhone', 'Invalid fatherPhone').exists(),
        body('motherName', 'Invalid motherName').exists().isString(),
        body('motherPhone', 'Invalid motherPhone').exists(),
        body('guardianName', 'Invalid guardianName').optional().isString(),
        body('guardianPhone', 'Invalid guardianPhone').optional(),
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
        body('firstName', 'Invalid firstName').optional().isString(),
        body('middleName', 'Invalid middleName').optional().isString(),
        body('lastName', 'Invalid lastName').optional().isString(),
        body('adress', 'Invalid adress').optional(),
        body('fatherName', 'Invalid fatherName').optional().isString(),
        body('fatherPhone', 'Invalid fatherPhone').optional(),
        body('motherName', 'Invalid motherName').optional().isString(),
        body('motherPhone', 'Invalid motherPhone').optional(),
        body('guardianName', 'Invalid guardianName').optional().isString(),
        body('guardianPhone', 'Invalid guardianPhone').optional(),
        body('dateBirth', 'Invalid dateBirth').optional().isDate(),
        body('email', 'Invalid email').optional().isEmail(),
        body('sex', 'Invalid sex').optional().isIn(['F', 'M']),
        body('dateJoining', 'Invalid dateJoining').optional().isDate(),
        body('class', 'Invalid class').optional().isString(),
        body('section', 'Invalid section').optional().isString(),
        body('password', 'Invalid password').optional().isString(),
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
        body('name', 'Invalid name').optional().isString(),
        body('email', 'Invalid email').optional().isEmail(),
        body('subjects', 'Invalid subjects').optional().isArray(),
        body('password', 'Invalid password').optional(),
      ]
    }
  }
}
