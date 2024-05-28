import { PrismaClient } from "@prisma/client";
import { bigintToString } from "../helper/bigInt";

class UserServices {
  private db: PrismaClient = new PrismaClient();
  async getAllUsers(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.users
        .findMany({
          select: {
            id: true,
            nama: true,
            username: true,
            jabatan: true,
            role: true,
            created_at: true,
            updated_at: true,
          },
        })
        .then((rows) => resolve(bigintToString(rows)))
        .catch((e) => reject(e));
    });
  }
  async getUserById(id: bigint) {
    return new Promise((resolve, reject) => {
      this.db.users
        .findUnique({
          where: { id },
          select: {
            id: true,
            nama: true,
            username: true,
            jabatan: true,
            role: true,
          },
        })
        .then((rows) => resolve(bigintToString(rows)))
        .catch((e) => reject(e));
    });
  }
async addUser(userData: {
  nama: string;
  username: string;
  jabatan: string;
  role: string;
}): Promise<any> {
  return new Promise((resolve, reject) => {
    this.db.users
      .create({
        data: userData,
        select: {
          id: true,
          nama: true,
          username: true,
          jabatan: true,
          role: true,
          created_at: true,
          updated_at: true,
        },
      })
      .then((user) => resolve(bigintToString(user)))
      .catch((e) => reject(e));
  });
}
}
export default new UserServices();
