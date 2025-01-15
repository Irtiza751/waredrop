import { SetMetadata } from '@nestjs/common';
import { AUTH_PUBLIC_KEY } from 'src/constants/auth.keys';

export const MarkPublic = () => SetMetadata(AUTH_PUBLIC_KEY, true);
