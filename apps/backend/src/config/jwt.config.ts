import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  jwtIssuer: process.env.JWT_ISSUER,
  secret: process.env.JWT_ACCESS_SECRET,
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  jwtAccessTtl: process.env.JWT_ACCESS_TTL,
  jwtRefreshTtl: process.env.JWT_ACCESS_TTL,
}));
