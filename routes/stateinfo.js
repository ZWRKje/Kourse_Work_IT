const { Router } = require("express");
const { StatesInfo } = require("../client/src/components/stateContext");
const state = require("../models/state");
const State = require("../models/state");
const router = Router();

// /api/info/show
router.get( '/show', async (req, res) => {
    try {
    console.log("hello")
    const states = await State.find()
    res.json(states)
    } catch (e) {
      res.status(500).json({ message: `error: ${e.mesage}` });
    }
  }
);

// /api/info//modyfi
router.put( '/modyfi', async (req, res) => {
  try {
  const change = req.body.stateName
  //console.log(change)
  //console.log(State.findOne({stateName:req.body.stateName}))
  const newdate=await State.findOne({stateName:change})
  newdate.stateText = req.body.stateText
  
  const rez = await newdate.save()
  res.json( rez) 
   } catch (e) {
     res.status(500).json({ message: `error: ${e.mesage}` });
  }
}
);
// /api/info/delete
router.delete( '/del', async (req, res) => {
  try {
  deleteId= req.body.unicName
  console.log(req.body.unicName)  
  const states = await State.findOneAndDelete({stateName:req.body.unicName})
  res.json(states)
  } catch (e) {
    res.status(500).json({ message: `error: ${e.mesage}` });
  }
}




);

module.exports = router;
