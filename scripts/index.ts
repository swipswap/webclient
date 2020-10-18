import { randomBytes } from 'crypto'


export const generateRandom = () => randomBytes(16).toString('hex')