import { Injectable } from '@nestjs/common';
import { HashingProvider } from './hashing.provider';
import argon2 from 'argon2';

@Injectable()
export class ArgonProvider extends HashingProvider {
  async comparePassword(
    data: string | Buffer,
    encrypted: string,
  ): Promise<boolean> {
    return await argon2.verify(encrypted, data);
  }

  hashPassword(data: string | Buffer): Promise<string> {
    return argon2.hash(data);
  }
}
