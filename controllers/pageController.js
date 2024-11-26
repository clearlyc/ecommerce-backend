const runAllSeeders = require("../seeders/runAllSeeders")
const resetDataBase = require("../createDatabaseTables")

async function resetDB(req, res) {
  try {
    await resetDataBase()
    await runAllSeeders()
    res.send("DB restored")
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  resetDB,
};
