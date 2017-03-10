import { readBuffer, readByte } from 'bitwise';
import Debug from 'debug';

/* Adds bit array debug formatter %b */
Debug.formatters.b = v => Buffer.isBuffer(v) ? readBuffer(v) : readByte(v);

/* Adds hex string debug formatter %h */
Debug.formatters.h = v => v.toString('hex');

export default Debug;
