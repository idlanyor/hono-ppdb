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
}
export default new UserServices();
