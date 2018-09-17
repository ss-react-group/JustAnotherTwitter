import * as bcrypt from 'bcryptjs';

export function encrypt(textToEncrypt: string, saltRounds: number) {
  return bcrypt.hashSync(textToEncrypt, saltRounds);
}
