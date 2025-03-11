import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  // отримання інформації про користувача
  constructor(private readonly databaseService: DatabaseService) {}

  async getUserInfo(name: string): Promise<any> {
    const user = await this.databaseService.post.findFirst({
      where: {
        data: {
          path: '$.name',
          equals: name,
        },
      },
    });


    return user?.data ?? null;
  }

  // Збереження інформації коли користувач зареєструвався
  async save(dto: any) {
    return this.databaseService.post.create({
      data: {
        data: dto,
      },
    });
  }
}
