const express = require('express');
const { createError } = require('../middleware/errors');

const { updateStatus } = require('../services/logs');

const router = express.Router();


router.get('/:logsStatus', async (req, res, next) => {
  try {
    const param = req.params.logsStatus;
      
    const status = await updateStatus(param);
  if (!status) {
    throw createError(404, "Not found");
  } else {
    res.json(status);
  }
  } catch (e) {
    next(e);
  }
 
})


module.exports = router