import { randomBytes } from 'crypto'

export const generateRandom = () => randomBytes(11).toString('hex')