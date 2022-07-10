const { db, Member, Garden } = require("./src/server/models");

const seed = async () => {
  try {
    await db.sync({ force: true });
    const member1 = await Member.create({
        firstname: "James",
        lastname: "Brooks",
        email: "JamesSBrooks@indeed.com",
    });
    const member2 = await Member.create({
        firstname: "Kevin",
        lastname: "Espinoza",
        email: "inEEspinoza@indeed.com",
    });
    const member3 = await Member.create({
        firstname: "Walter",
        lastname: "Hudson",
        email: "WalterJHudson@indeed.com",
    });
    const member4 = await Member.create({
        firstname: "Robert",
        lastname: "Maldonado",
        email: "RobertCMaldonado@indeed.com",
      });
    const member5 = await Member.create({
        firstname: "Chester",
        lastname: "Flynn",
        email: "ChesterLFlynn@indeed.com",
      });
    const garden1 = await Garden.create({
        name: "11th Street Community Garden",
        description: "This is the description of the garden",
        address: "422 E 11th St",
        state: "NY",
        city: "NY",
        zipcode: "10009",
        memberlimit: "12",
    });
    const garden2 = await Garden.create({
        name: "Clinton Community Garden",
        description: "This is the description of the garden",
        address: "434 W 48th St",
        state: "NY",
        city: "NY",
        zipcode: "10036",
        memberlimit: "10",
    });
    const garden3 = await Garden.create({
        name: "9th Street",
        description: "This is the description of the garden",
        address: "703 E 9th St",
        state: "NY",
        city: "NY",
        zipcode: "10009",
        memberlimit: "0",
    });
    const garden4 = await Garden.create({
        name: "Peach Tree Garden",
        description: "This is the description of the garden",
        address: "236 E 2nd St",
        state: "NY",
        city: "NY",
        zipcode: "10009",
        memberlimit: "0",
      });
    await garden1.addMember(member1);
    await garden2.addMember(member2);
    console.log(`Successful seeding in garden database.`);
    await process.exit(0);
  } catch (e) {
    console.log("ERROR", e);
    console.error(`Error with seeding garden database!`);
    process.exit(1);
  }
};

module.exports = seed;

if (require.main === module) {
  seed();
}
