import Joi from 'joi';

const registerSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .messages({ 'string.empty': 'first name is required.' }),
  lastName: Joi.string()
    .required()
    .trim()
    .messages({ 'string.empty': 'last name is required.' }),
  email: Joi.string().required().email({ tlds: false }).messages({
    'string.empty': 'invalid email address.',
  }),
  password: Joi.string()
    .required()
    .pattern(/^[0-9a-zA-z]{6,}$/)
    .messages({
      'string.empty': 'password is required',
      'string.pattern.base':
        'password must be at least 6 characters and contain only alphabet and number.',
    }),
  confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
    'string.empty': 'confirm password is required.',
    'any.only': 'password and confirm password did not match',
  }),
  role: Joi.string().required().messages({
    'string.empty': 'role is required',
  }),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    // console.log(result)
    console.dir('validate', error);
    return result;
  }
};

export default validateRegister;
