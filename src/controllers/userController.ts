import { Context, Hono } from "hono";
import UserServices from "../services/UserServices";

const userRouter = new Hono();

userRouter.get("/", async (c: Context) => {
  try {
    const users = await UserServices.getAllUsers();
    if (users.length === 0) {
      return c.json({
        status: "Success",
        endpoint: "/users",
        data: [],
        message: "Tidak ada data pengguna yang tersedia",
      });
    }
    return c.json({
      status: "Success",
      endpoint: "/users",
      data: users,
    });
  } catch (error) {
    return c.json(
      {
        status: "Error",
        message: "Terjadi kesalahan pada server",
        error: error,
      },
      500
    );
  }
});
userRouter.get("/:id", async (c: Context) => {
  const id = BigInt(c.req.param("id"));
  try {
    const user = await UserServices.getUserById(id);
    if (user) {
      return c.json({
        status: "Success",
        endpoint: `/users/${id}`,
        data: user,
      });
    } else {
      return c.json(
        {
          status: "Error",
          message: "User not found",
        },
        404
      );
    }
  } catch (error) {
    return c.json(
      {
        status: "Error",
        message: error,
      },
      500
    );
  }
});

export default userRouter;
