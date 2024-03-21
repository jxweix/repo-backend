import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  processUserData(userData: any): string {
    // ทำการประมวลผลข้อมูลผู้ใช้ที่รับเข้ามาและคืนค่าเป็นข้อความ
    console.log(userData);
    
    return `Processing user data: ${JSON.stringify(userData)}`;
  }
}
