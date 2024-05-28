"use strict";
// import { PrismaClient, users } from "@prisma/client";
// class UserServices {
//   private db: PrismaClient = new PrismaClient();
//   async createUser({ nama, username, jabatan, role, password }: users) {
//     return new Promise((resolve, reject) => {
//       this.db.users
//         .create({
//           data: {
//             nama,
//             username,
//             jabatan,
//             role,
//             password,
//           },
//         })
//         .then((value) => resolve(value.nama))
//         .catch((e) => reject(e));
//     });
//   }
// }
// // export default new UserServices();
// const usersvc = new UserServices();
// const us = async () => {
//   return await usersvc.createUser({
//     id: BigInt(0),
//     nama: "Roynaldi",
//     username: "idlan",
//     jabatan: "lksld",
//     role: "2",
//     password: "loremips",
//     remember_token: null,
//     created_at: new Date(),
//     updated_at: new Date(),
//   });
// };
// console.log(await us());
