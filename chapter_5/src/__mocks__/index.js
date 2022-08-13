import { createServer, Response } from "miragejs";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import wait from "utils/wait";

const users = [
  {
    id: "e7ef3e70-e190-4610-82ab-a3d5373cc398",
    email: "demo@kiki.cat",
    name: "Celsus Yuval",
    password: "pasword123",
  },
];

const JWT_SECRET = "kiki-secret-key";
const JWT_EXPIRES_IN = "5 days";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/account/me", (schema, request) => {
      try {
        const { Authorization } = request.requestHeaders;

        if (!Authorization) {
          throw new Error("Authorization token missing");
        }

        const accessToken = Authorization.split(" ")[1];
        const { userId } = jwt.verify(accessToken, JWT_SECRET);
        const user = users.find((user) => user.id === userId);

        if (!user) {
          throw new Error("Invalid authorization token");
        }

        return {
          user: {
            id: user.id,
            email: user.email,
          },
        };
      } catch (err) {
        return new Response(401, { some: "header" }, { errors: [err.message] });
      }
    });

    this.post("/account/login", async (schema, request) => {
      try {
        await wait(1000);

        console.log(JSON.parse(request.requestBody));

        const { email, password } = JSON.parse(request.requestBody);
        const user = users.find((user) => user.email === email);

        if (!user) {
          throw new Error("Please check your email and password");
        }

        if (user.password !== password) {
          throw new Error("Invalid password");
        }

        const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRES_IN,
        });

        return {
          accessToken,
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            avatar: user.avatar,
          },
        };
      } catch (err) {
        return new Response(401, { some: "header" }, { errors: [err.message] });
      }
    });

    this.post("/account/register", async (schema, request) => {
      try {
        await wait(1000);

        const { email, password } = JSON.parse(request.requestBody);
        let user = users.find((user) => user.email === email);

        console.log(user);

        if (user) {
          throw new Error("User already exists");
        }

        user = {
          id: uuidv4(),
          email,
          name: email,
          password,
          avatar: "https://ui-avatars.com/api/?name=" + email,
        };

        const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRES_IN,
        });

        return {
          accessToken,
          user: {
            id: user.id,
            email: user.email,
            name: user.email,
            avatar: "https://ui-avatars.com/api/?name=" + user.email,
          },
        };
      } catch (err) {
        return new Response(401, { some: "header" }, { errors: [err.message] });
      }
    });

    this.passthrough();
  },
});
