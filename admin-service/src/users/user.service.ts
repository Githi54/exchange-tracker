import { Injectable } from '@nestjs/common';
import { prisma } from 'src/utils/prisma';

@Injectable()
export class UserService {
  async createUser(userData: { nickname: string }) {
    return prisma.user.create({
      data: {
        nickname: userData.nickname,
      },
    });
  }

  async findUserById(userId: string) {
    return prisma.user.findUniqueOrThrow({ where: { id: userId } });
  }

  async findUsers() {
    return prisma.user.findMany();
  }
}
