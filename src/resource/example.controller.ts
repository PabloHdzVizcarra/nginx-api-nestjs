import { Controller, Get } from '@nestjs/common';
import { settings } from '../settings';

@Controller('/music')
export class ExampleController {
  @Get('/blink')
  public helloBlink(): string {
    return settings.blink;
  }

  @Get('/imagine.dragons')
  public helloImagineDragons(): string {
    return settings.dragons;
  }

  @Get('/twenty')
  public helloTwentyOnePilots(): string {
    return settings.pilots;
  }
}
