import { createServer } from "miragejs";
import { v4 as uuidv4 } from "uuid";
import jwt from 'jsonwebtoken';
import wait from "utils/wait";

const users = [
  {
    id: 'e7ef3e70-e190-4610-82ab-a3d5373cc398',
    email: 'demo@kiki.cat',
    name: 'Celsus Yuval',
    password: 'pasword123',
  }
];

const JWT_SECRET = 'kiki-secret-key';
const JWT_EXPIRES_IN = '5 days';

createServer({
  routes() {
    this.namespace = "api";

    this.get("/account/me", (schema, request) => {
      try {
        const { Authorization } = request.requestHeaders;

        if (!Authorization) {
          return [401, { message: "Authorization token missing" }];
        }

        const accessToken = Authorization.split(" ")[1];
        const { userId } = jwt.verify(accessToken, JWT_SECRET);
        const user = users.find((_user) => _user.id === userId);

        if (!user) {
          return [401, { message: "Invalid authorization token" }];
        }

        return {
          user: {
            id: user.id,
            email: user.email,
          },
        };
      } catch (err) {
        console.error(err);
        return { message: "Internal server error" };
      }
    });

    this.post("/account/login", async (schema, request) => {
      try {
        await wait(1000);

        console.log(JSON.parse(request.requestBody))

        const { email, password } = JSON.parse(request.requestBody);
        const user = users.find((_user) => _user.email === email);

        if (!user) {
          return [400, { message: "Please check your email and password" }];
        }

        if (user.password !== password) {
          return [400, { message: "Invalid password" }];
        }

        const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRES_IN,
        });

        return {
            accessToken,
            user: {
              id: user.id,
              email: user.email,
            },
          };
      } catch (err) {
        console.error(err);
        return { message: "Internal server error" };
      }
    });

    this.post("/account/register", async (schema, request) => {
      try {
        await wait(1000);

        const { email, password } = JSON.parse(request.requestBody);
        let user = users.find((_user) => _user.email === email);

        if (user) {
          return { message: "User already exists" };
        }

        user = {
          id: uuidv4(),
          email,
          password,
        };

        const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRES_IN,
        });

        return {
            accessToken,
            user: {
              id: user.id,
              email: user.email,
            },
          };
      } catch (err) {
        console.error(err);
        return { message: "Internal server error" };
      }
    });

    this.passthrough();
  },
});
