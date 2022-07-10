const { STRING, TEXT, INTEGER, UUID, UUIDV4 } = require("sequelize");
const db = require("./db");
const GardenMember = require("./GardenMember");
const Member = require("./Member");

const Garden = db.define("garden", {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    allowNull: true,
  },
  description: {
    type: TEXT,
    allowNull: true,
  },
  address: {
    type: STRING,
    allowNull: true,
  },
  city: {
    type: STRING,
    allowNull: true,
  },
  state: {
    type: STRING,
    allowNull: true,
  },
  zipcode: {
    type: STRING,
    allowNull: true,
  },
  memberlimit: {
    type: INTEGER,
    allowNull: true,
  },
});

Garden.prototype.addMember = async function (memberId) {
  try {
    const { members } = await Garden.findByPk(this.id, { include: Member });
    if (members.length < this.memberlimit) {
      await GardenMember.create({
        gardenId: this.id,
        memberId: memberId,
      });
      return { status: "success", message: "member added" };
    } else {
      throw new Error("Garden is full");
    }
  } catch (e) {
    return { status: "failed", message: e.message };
  }
};

Garden.prototype.removeMember = async function (memberId) {
  try {
    const membership = await GardenMember.findOne({
      where: { memberId: memberId, gardenId: this.id },
    });
    if (membership) {
      await membership.destroy();
      return { status: "success", message: "member removed" };
    } else {
      throw new Error("Provided member is not a member of this garden");
    }
  } catch (e) {
    console.log(e)
    return { status: "failed", message: e.message };
  }
};

module.exports = Garden;