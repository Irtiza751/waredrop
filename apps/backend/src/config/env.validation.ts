import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  PORT: Joi.number().default(4000),
  // database
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().default(5432),
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  // development
  DATABASE_SYNC: Joi.boolean().default(false),
  DATABASE_AUTOLOAD: Joi.boolean().default(false),
  // JWT
  JWT_ACCESS_SECRET: Joi.string().required(),
  JWT_REFRESH_SECRET: Joi.string().required(),
  JWT_ISSUER: Joi.string().required(),
  JWT_ACCESS_TTL: Joi.number().required(),
  JWT_REFRESH_TTL: Joi.number().required(),
});
