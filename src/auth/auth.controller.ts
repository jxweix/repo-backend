import { Body, Controller, Get, Query, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiOkResponse, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';
import { typeformData } from './type/auth.type';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  // @Get()
  // getSupabase() {
  //   return this.authService.getData();
  // }

  @Post()
  @ApiQuery({ name: 'userId', description: 'This is parameter userId' })
  // @ApiBody({ name: 'name', required: false })
  async getUserId(
    @Body("userId") userId: number,
    @Query("name") name: string) {
    const user = await this.authService.getUserId(userId, name)

    return user
  }

  // @ApiQuery({ name: 'userId', description: 'This is parameter userId' })
  @Post('formData')
  @ApiBody({ type: typeformData })
  async getUpload(
    @Body() body: any,
    @Query('userId') userId: number) {
    const formData = body; // รับข้อมูล form-data ที่ส่งมา
    const data = await this.authService.getUpload(formData, userId)
    return data
  }
}