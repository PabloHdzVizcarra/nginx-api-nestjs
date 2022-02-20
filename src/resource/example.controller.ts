import { Controller, Get } from '@nestjs/common';
import { settings } from '../settings';

@Controller('/music')
export class ExampleController {
  @Get('/blink')
  public helloBlink() {
    return {
      message: settings.blink,
    };
  }

  @Get('/imagine.dragons')
  public helloImagineDragons() {
    return {
      message: settings.dragons,
    };
  }

  @Get('/twenty')
  public helloTwentyOnePilots() {
    return {
      message: settings.pilots,
    };
  }
}
