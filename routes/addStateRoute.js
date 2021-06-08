const { Router } = require("express");
const State = require("../models/state");
const router = Router();

// /api/addState/new
router.post( '/new', async (req, res) => {
    try {
     // console.log("Body:",req.body)
      // console.log("Body:",req.body)
      // return res.status(400).json({message:"Help"})
      const {
        stateName,
        stateText,
        teaType,
        teaStruct
      } = req.body
      
     

      const param = await  State.findOne({ stateName });
      if (param) {
        
        return res.status(400).json({ message: "Такая статья уже существует" });
      }

     
      console.log(req.body.stateName)
      if (!req.body.stateName) {     
        return res.status(400).json({ message: "Имя статьи пустое" });
      }

      if (!req.body.stateText ) {     
        return res.status(400).json({ message: "Тескт должен существовать" });
      }

      
      const state = new State({
        stateName,
        stateText,
        teaType,
        teaStruct
      });
      console.log("Body:",state)
      await state.save();
     
      res.status(200).json({ message: "Статья созданна" });
      
    } catch (e) {
      res.status(500).json({ message: `error: ${e.mesage}` });
    }
  }
);

module.exports = router;
