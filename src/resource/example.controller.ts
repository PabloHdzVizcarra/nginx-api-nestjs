import { Controller, Get } from '@nestjs/common';

@Controller('/music')
export class ExampleController {
  @Get('/blink')
  public helloBlink(): string {
    return 'I Miss You';
  }

  @Get('/imagine.dragons')
  public helloImagineDragons(): string {
    return 'Thunder';
  }

  @Get('/twenty')
  public helloTwentyOnePilots(): string {
    return 'Level Of Concern';
  }
}
