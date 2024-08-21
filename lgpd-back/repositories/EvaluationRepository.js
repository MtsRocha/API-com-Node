import Evaluation from "../models/Evaluation.js";

const saveEvaluation = async (EvaluationModel) => {
    const save = await Evaluation.create(EvaluationModel);
    return save;   
}

const getAllEvaluations = async () => {
    return await Evaluation.findAll({
        order: [
            ['id', 'ASC']
        ]}
    )
}

const getEvaluationById = async (id) => {
    return await Evaluation.findByPk(id);
}

const deleteEvaluationById = async(id) => {
    return await Evaluation.destroy({where: {id : id}});
}

const updateEvaluationById = async (id, EvaluationModel) => {
    try {
        const result = await Evaluation.update(EvaluationModel, {where: {id: id}});
        if(result){
            return {message: "Avaliação atualizada com sucesso!"};
        }else{
            return {message: "Avaliação não encontrada!", status: 404};
        }
    } catch (error) {
        console.error();
    }
}


export default factory;