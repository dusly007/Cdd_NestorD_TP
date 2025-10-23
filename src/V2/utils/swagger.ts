import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Media API",
      version: "2.0.0",
      description: "API for managing movies, series, ratings, and users.",
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/*.ts", "./controllers/*.ts"],
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: any) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
};
