const express = require('express');
const onboardCtrl = require('@controllers/onboard.controller');
const router = express.Router();

router.route('/onboarding/:campaign').post(onboardCtrl.submitAddress);
router.route('/onboarding').post(onboardCtrl.submitAddress);

module.exports = router;
