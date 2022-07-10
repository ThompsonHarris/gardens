const gardenRouter = require("express").Router();
const {
  validateAuth,
  validateGarden,
  cacheValidationError,
} = require("./utils");
const { Member, Garden } = require("../models/index");

gardenRouter.get("/", (req, res, next) => {
  Garden.findAll({
    include: { model: Member },
  })
    .then((gardens) => {
      res.status(200).send(gardens);
    })
    .catch((e) => {
      res.status(500).send({ error: "critical error retrieving members" });
    });
});

gardenRouter.put("/:id/addmember", validateAuth(), (req, res, next) => {
  const { id } = req.params;
  const { memberId } = req.body;
  Garden.findByPk(id, {
    include: { model: Member },
  })
    .then((garden) => garden.addMember(memberId))
    .then((response) => {
      if (response.status === "failed") {
        throw new Error(response.message);
      }
      res.status(200).send({ message: "member added" });
    })
    .catch((e) => {
      console.log("catching error", e);
      res.status(500).send({ error: e.message });
    });
});

gardenRouter.put("/:id/removemember", validateAuth(), (req, res, next) => {
  const { id } = req.params;
  const { memberId } = req.body;

  Garden.findByPk(id, {
    include: { model: Member },
  })
    .then((garden) => garden.removeMember(memberId))
    .then((response) => {
      if (response.status === "failed") {
        throw new Error(response.message);
      }
      res.status(200).send({ message: "member removed" });
    })
    .catch((e) => {
      res.status(500).send({ error: e.message });
    });
});

gardenRouter.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Garden.findByPk(id, {
    include: { model: Member },
  })
    .then((garden) => {
      res.status(200).send(garden);
    })
    .catch((e) => {
      res.status(500).send({ error: "critical error retrieving garden" });
    });
});

gardenRouter.put(
  "/:id",
  validateAuth(),
  validateGarden,
  cacheValidationError(),
  (req, res, next) => {
    const { id } = req.params;
    const { name, description, address, city, state, zipcode, memberlimit } =
      req.body;
    Garden.update(
      { name, description, address, city, state, zipcode, memberlimit },
      { where: { id } }
    )
      .then((response) => {
        res.status(200).send({ message: "updated garden" });
      })
      .catch((e) => {
        res.status(500).send({ error: "critical error retrieving garden" });
      });
  }
);

gardenRouter.post(
  "/",
  validateAuth(),
  validateGarden,
  cacheValidationError(),
  (req, res, next) => {
    const { name, description, address, city, state, zipcode, memberlimit } =
      req.body;
    Garden.create({
      name,
      description,
      address,
      city,
      state,
      zipcode,
      memberlimit,
    })
      .then((garden) => {
        res.status(200).send(garden.data);
      })
      .catch((e) => {
        res.status(500).send({ error: "critical error creating garden" });
      });
  }
);

gardenRouter.delete("/:id", validateAuth(), (req, res, next) => {
  const { id } = req.params;
  Garden.findByPk(id)
    .then((garden) => garden.destroy())
    .then((message) =>
      res.status(200).send({ message: `garden ${id} deleted` })
    )
    .catch((err) => next(err));
});

module.exports = gardenRouter;
