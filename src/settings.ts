import * as Path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({
  path: Path.resolve(__dirname, '..', process.env.NODE_ENV + '.env'),
});

const env = process.env;

export const settings = {
  blink: env.BLINK,
  dragons: env.IMAGINE_DRAGONS,
  pilots: env.TWENTY_ONE_PILOTS,
};

console.log('[ENV] =>', settings);
