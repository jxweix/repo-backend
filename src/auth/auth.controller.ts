import { Body, Controller, Get, Query, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  // @Get()
  // getSupabase() {
  //   return this.authService.getData();
  // }

  @Post()
  async getUserId(
    @Body("userId") userId: number,
    @Body("name") name: string) {
    const user = await this.authService.getUserId(userId,name)

    return user
  }
}
