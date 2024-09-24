// Import the neccesary modules.
// const service = require("@services/page.service");
const { season } = require("@config/constants");

exports.submitAddress = async (req, res, next) => {
  let campaign = req.params.campaign;
  let telegram_id = req.query.telegram_id;
  let data = req.body;
  query = {
    text: 'INSERT INTO addresses(campaign, telegram_id, address) VALUES($1, $2, $3)',
    values: [campaign, telegram_id, data.address],
  }
  
  await pgClient.query(query);
  return res.json({})
}
