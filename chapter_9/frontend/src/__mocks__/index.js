import { createServer, Response } from "miragejs";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import moment from "moment";
import wait from "utils/wait";

const users = [
  {
    id: "e7ef3e70-e190-4610-82ab-a3d5373cc398",
    email: "demo@kiki.cat",
    name: "Celsus Yuval",
    password: "pasword123",
    avatar: "/static/images/avatars/avatar_1.png",
  },
];

const projects = [
  {
    id: "e7ef-e190-4610-82ab-38e4",
    title: "Frontend Mock up",
    description: "This is our first frontend project.",
    image: "/static/images/projects/project_1.jpg",
    tags: ["React", "Dashboard"],
    currency: "$",
    budget: 4600,
    membersCount: 3,
    author: {
      avatar: "/static/images/avatars/avatar_1.png",
      name: "Celsus Yuval",
    },
    createdAt: moment()
      .subtract(10, "hours")
      .subtract(35, "minutes")
      .subtract(1, "seconds")
      .toDate()
      .getTime(),
    members: [
      {
        avatar: "/static/images/avatars/avatar_1.png",
        name: "Celsus Yuval",
      },
      {
        avatar: "/static/images/avatars/avatar_2.png",
        name: "Netta Elías",
      },
      {
        avatar: "/static/images/avatars/avatar_3.png",
        name: "Mahthildis Rashid",
      },
    ],
    activities: [
      {
        id: "e7ef-e190-4610-82ab-38e4-bdfe",
        createdAt: moment().subtract(3, "hours").toDate().getTime(),
        description: "updated the project description",
        subject: "Project manager",
        type: "update_project",
      },
      {
        id: "e7ef-e190-4610-82ab-38e4-5e8d",
        createdAt: moment().subtract(27, "hours").toDate().getTime(),
        description: "joined the project as a team member",
        subject: "Netta Elías",
        type: "join_project",
      },
      {
        id: "e7ef-e190-4610-82ab-38e4-5cf1",
        createdAt: moment()
          .subtract(7, "days")
          .subtract(3, "hours")
          .toDate()
          .getTime(),
        description: "joined the project as a team member",
        subject: "Mahthildis Rashid",
        type: "join_project",
      },
      {
        id: "e7ef-e190-4610-82ab-38e4-d8f4",
        createdAt: moment().subtract(8, "days").toDate().getTime(),
        description: "updated the project budget",
        subject: "Project manager",
        type: "budget_change",
      },
      {
        id: "e7ef-e190-4610-82ab-38e4-21c5",
        createdAt: moment().subtract(9, "days").toDate().getTime(),
        description: "was created",
        subject: "Springboard",
        type: "item_created",
      },
    ],
  },
  {
    id: "b35y-e190-4610-82ab-38e4",
    title: "Component design",
    currency: "$",
    budget: 1800,
    image: "/static/images/projects/project_2.jpg",
    membersCount: 3,
    author: {
      avatar: "/static/images/avatars/avatar_2.png",
      name: "Netta Elías",
    },
    createdAt: moment()
      .subtract(100, "hours")
      .subtract(12, "minutes")
      .subtract(29, "seconds")
      .toDate()
      .getTime(),
    members: [
      {
        avatar: "/static/images/avatars/avatar_2.png",
        name: "Miller Edwards",
      },
      {
        avatar: "/static/images/avatars/avatar_3.png",
        name: "Mahthildis Rashid",
      },
      {
        avatar: "/static/images/avatars/avatar_4.png",
        name: "Merrile Burgett",
      },
    ],
    activities: [
      {
        id: "b35y-e190-4610-82ab-38e4-bdfe",
        createdAt: moment().subtract(3, "hours").toDate().getTime(),
        description: "updated the project description",
        subject: "Project manager",
        type: "update_project",
      },
      {
        id: "b35y-e190-4610-82ab-38e4-5e8d",
        createdAt: moment().subtract(27, "hours").toDate().getTime(),
        description: "joined the project as a team member",
        subject: "Mahthildis Rashid",
        type: "join_project",
      },
      {
        id: "b35y-e190-4610-82ab-38e4-5cf1",
        createdAt: moment()
          .subtract(7, "days")
          .subtract(3, "hours")
          .toDate()
          .getTime(),
        description: "joined the project as a team member",
        subject: "Merrile Burgett",
        type: "join_project",
      },
      {
        id: "b35y-e190-4610-82ab-38e4-d8f4",
        createdAt: moment().subtract(8, "days").toDate().getTime(),
        description: "updated the project budget",
        subject: "Project manager",
        type: "budget_change",
      },
      {
        id: "b35y-e190-4610-82ab-38e4-21c5",
        createdAt: moment().subtract(9, "days").toDate().getTime(),
        description: "was created",
        subject: "Springboard",
        type: "item_created",
      },
    ],
  },
  {
    id: "b35y-e190-4610-uy55-38e4",
    title: "Scalable application development",
    currency: "$",
    budget: 6600,
    image: "/static/images/projects/project_3.jpg",
    membersCount: 2,
    author: {
      avatar: "/static/images/avatars/avatar_3.png",
      name: "Mahthildis Rashid",
    },
    createdAt: moment()
      .subtract(30, "days")
      .subtract(30, "minutes")
      .subtract(30, "seconds")
      .toDate()
      .getTime(),
    members: [
      {
        avatar: "/static/images/avatars/avatar_5.png",
        name: "Lei Zhang",
      },
      {
        avatar: "/static/images/avatars/avatar_1.png",
        name: "Mahthildis Rashid",
      },
    ],
    activities: [
      {
        id: "b35y-e190-4610-uy55-38e4-bdfe",
        createdAt: moment().subtract(3, "hours").toDate().getTime(),
        description: "updated the project description",
        subject: "Project manager",
        type: "update_project",
      },
      {
        id: "b35y-e190-4610-uy55-38e4-5e8d",
        createdAt: moment().subtract(27, "hours").toDate().getTime(),
        description: "joined the project as a team member",
        subject: "Lei Zhang",
        type: "join_project",
      },
      {
        id: "b35y-e190-4610-uy55-38e4-d8f4",
        createdAt: moment().subtract(8, "days").toDate().getTime(),
        description: "updated the project budget",
        subject: "Project manager",
        type: "budget_change",
      },
      {
        id: "b35y-e190-4610-uy55-38e4-21c5",
        createdAt: moment().subtract(9, "days").toDate().getTime(),
        description: "was created",
        subject: "Springboard",
        type: "item_created",
      },
    ],
  },
  {
    id: "b35y-e190-11y6-uy55-38e4",
    title: "Customized enterprise software",
    currency: "$",
    budget: 2500,
    image: "/static/images/projects/project_4.jpg",
    membersCount: 3,
    author: {
      avatar: "/static/images/avatars/avatar_4.png",
      name: "Hild Yasin",
    },
    createdAt: moment()
      .subtract(10, "days")
      .subtract(40, "minutes")
      .subtract(30, "seconds")
      .toDate()
      .getTime(),
    members: [
      {
        avatar: "/static/images/avatars/avatar_1.png",
        name: "Anje Keizer",
      },
      {
        avatar: "/static/images/avatars/avatar_2.png",
        name: "Celsus Yuval",
      },
      {
        avatar: "/static/images/avatars/avatar_4.png",
        name: "Merrile Burgett",
      },
    ],
    activities: [
      {
        id: "b35y-e190-11y6-uy55-38e4-bdfe",
        createdAt: moment().subtract(3, "hours").toDate().getTime(),
        description: "updated the project description",
        subject: "Project manager",
        type: "update_project",
      },
      {
        id: "b35y-e190-11y6-uy55-38e4-5e8d",
        createdAt: moment().subtract(27, "hours").toDate().getTime(),
        description: "joined the project as a team member",
        subject: "Celsus Yuval",
        type: "join_project",
      },
      {
        id: "b35y-e190-4610-82ab-38e4-5cf1",
        createdAt: moment()
          .subtract(7, "days")
          .subtract(3, "hours")
          .toDate()
          .getTime(),
        description: "joined the project as a team member",
        subject: "Merrile Burgett",
        type: "join_project",
      },
      {
        id: "b35y-e190-11y6-uy55-38e4-d8f4",
        createdAt: moment().subtract(8, "days").toDate().getTime(),
        description: "updated the project budget",
        subject: "Project manager",
        type: "budget_change",
      },
      {
        id: "b35y-e190-11y6-uy55-38e4-21c5",
        createdAt: moment().subtract(9, "days").toDate().getTime(),
        description: "was created",
        subject: "Springboard",
        type: "item_created",
      },
    ],
  },
  {
    id: "b35y-tx41-11y6-uy55-38e4",
    title: "Embedded web application",
    currency: "$",
    budget: 3900,
    image: "/static/images/projects/project_5.jpg",
    membersCount: 1,
    author: {
      avatar: "/static/images/avatars/avatar_5.png",
      name: "Lei Zhang",
    },
    createdAt: moment()
      .subtract(30, "days")
      .subtract(11, "minutes")
      .subtract(6, "seconds")
      .toDate()
      .getTime(),
    members: [
      {
        avatar: "/static/images/avatars/avatar_4.png",
        name: "Merrile Burgett",
      },
    ],
    activities: [
      {
        id: "b35y-tx41-11y6-uy55-38e4-bdfe",
        createdAt: moment().subtract(3, "hours").toDate().getTime(),
        description: "updated the project description",
        subject: "Project manager",
        type: "update_project",
      },
      {
        id: "b35y-tx41-11y6-uy55-38e4-d8f4",
        createdAt: moment().subtract(8, "days").toDate().getTime(),
        description: "updated the project budget",
        subject: "Project manager",
        type: "budget_change",
      },
      {
        id: "b35y-tx41-11y6-uy55-38e4-21c5",
        createdAt: moment().subtract(9, "days").toDate().getTime(),
        description: "was created",
        subject: "Springboard",
        type: "item_created",
      },
    ],
  },
];

const JWT_SECRET = "kiki-secret-key";
const JWT_EXPIRES_IN = "5 days";

createServer({
  routes() {

    this.passthrough(process.env.REACT_APP_BACKEND_URL + "/**");

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
          user,
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

    this.get("/latest-projects", async () => {
      return { projects };
    });

    this.get("/latest-activities", async () => {
      const activities = [
        {
          id: "e7ef-e190-4610-82ab",
          title: "Use GraphQL for the project",
          time: moment().subtract(3, "days").toDate().getTime(),
          members: [
            {
              avatar: "/static/images/avatars/avatar_1.png",
              name: "Celsus Yuval",
            },
            {
              avatar: "/static/images/avatars/avatar_2.png",
              name: "Netta Elías",
            },
            {
              avatar: "/static/images/avatars/avatar_3.png",
              name: "Mahthildis Rashid",
            },
          ],
          project: {
            id: "e7ef-e190-4610-82ab-38e4",
            name: "Frontend Mock up",
          },
        },
        {
          id: "a654-e190-4610-82ab",
          title: "Redesign the topbar",
          time: moment().subtract(2, "days").toDate().getTime(),
          members: [
            {
              avatar: "/static/images/avatars/avatar_2.png",
              name: "Miller Edwards",
            },
            {
              avatar: "/static/images/avatars/avatar_3.png",
              name: "Mahthildis Rashid",
            },
            {
              avatar: "/static/images/avatars/avatar_4.png",
              name: "Merrile Burgett",
            },
          ],
          project: {
            id: "b35y-e190-4610-82ab-38e4",
            name: "Component design",
          },
        },
        {
          id: "a654-b21u-4610-82ab",
          title: "Develop the landing page",
          time: moment().subtract(5, "days").toDate().getTime(),
          members: [
            {
              avatar: "/static/images/avatars/avatar_2.png",
              name: "Miller Edwards",
            },
            {
              avatar: "/static/images/avatars/avatar_3.png",
              name: "Mahthildis Rashid",
            },
            {
              avatar: "/static/images/avatars/avatar_4.png",
              name: "Merrile Burgett",
            },
          ],
          project: {
            id: "b35y-e190-4610-82ab-38e4",
            name: "Component design",
          },
        },
        {
          id: "a654-b21u-te47-82ab",
          title: "Testing cases of the backend",
          time: moment().subtract(7, "days").toDate().getTime(),
          members: [
            {
              avatar: "/static/images/avatars/avatar_5.png",
              name: "Lei Zhang",
            },
            {
              avatar: "/static/images/avatars/avatar_1.png",
              name: "Mahthildis Rashid",
            },
          ],
          project: {
            id: "b35y-e190-4610-uy55-38e4",
            name: "Scalable application development",
          },
        },
        {
          id: "a654-b21u-te47-36tt",
          title: "Develop FAQ pages",
          time: moment().subtract(8, "days").toDate().getTime(),
          members: [
            {
              avatar: "/static/images/avatars/avatar_1.png",
              name: "Anje Keizer",
            },
            {
              avatar: "/static/images/avatars/avatar_2.png",
              name: "Celsus Yuval",
            },
            {
              avatar: "/static/images/avatars/avatar_4.png",
              name: "Merrile Burgett",
            },
          ],
          project: {
            id: "b35y-e190-4610-uy55-38e4",
            name: "Customized enterprise software",
          },
        },
      ];

      return { activities };
    });

    this.get("/revenue", async () => {
      const revenue = {
        data: [20, 15, 12, 11, 16, 24, 15, 14, 8, 10, 19, 15],
        labels: [
          "Oct",
          "Nov",
          "Dec",
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      };

      return { revenue };
    });

    this.get("/analytics", async () => {
      const analytics = {
        visitors: [103, 112, 131, 149, 199, 153, 123, 116, 137, 153, 156, 182],
        pages: [
          {
            pathname: "/home",
            views: "14",
          },
          {
            pathname: "/login",
            views: "8",
          },
          {
            pathname: "/register",
            views: "6",
          },
          {
            pathname: "/projects",
            views: "20",
          },
          {
            pathname: "/theme",
            views: "11",
          },
          {
            pathname: "/projects/create",
            views: "3",
          },
        ],
      };

      return { analytics };
    });

    this.passthrough();
  },
});
