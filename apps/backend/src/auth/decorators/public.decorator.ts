import { SetMetadata } from '@nestjs/common';
export const AUTH_PUBLIC_KEY = 'authType';

export const MarkPublic = () => SetMetadata(AUTH_PUBLIC_KEY, true);
