import * as bcrypt from 'bcryptjs';

export function encrypt(textToEncrypt: string, saltRounds: number) {
  const encrypted = bcrypt.hashSync(textToEncrypt, saltRounds);
  return encrypted;
}
