import express from "express";
let router = express.Router();

import evaluationService from "../services/EvaluationService";

router.post("/addEvaluation", async function (req, res) {

    const evaluationModel = {
        concept: req.body.concept
    }
    
    const evaluation = await evaluationService.saveEvaluation(evaluationModel);
    return res.status(200).json(evaluation);
});

router.get("/getAllEvaluations", async function (req, res) {
    
    const allEvaluations = await evaluationService.getAllEvaluations();
    return res.status(200).json(allEvaluations);
});


router.get("/evaluation/:id", async function (req, res) {
    
    const evaluation = await evaluationService.getEvaluationById(req.params.id);
    return res.status(200).json(evaluation);
});

router.delete("/deleteEEvaluation/:id", async function (req, res) {
    
    const evaluation = await evaluationService.deleteEvaluationById(req.params.id);
    return res.status(200).json(evaluation);
});

router.post("/updateEvaluation", async function (req, res) {

    const evaluationModel = {
        concept: req.body.concept
    }
    
    const evaluation = await evaluationService.updateById(req.params.id, evaluationModel);
    return res.status(200).json(evaluation);
});

export default router;