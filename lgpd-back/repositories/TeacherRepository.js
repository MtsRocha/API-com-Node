import Teacher from "../models/Teacher.js";

const saveTeacher = async (TeacherModel) => {
    const save = await Teacher.create(TeacherModel);
    return save;   
}

const getAllTeachers = async () => {
    return await Teacher.findAll({
        order: [
            ['id', 'ASC']
        ]}
    )
}

const getTeacherById = async (id) => {
    return await Teacher.findByPk(id);
}

const deleteTeacherById = async(id) => {
    return await Teacher.destroy({where: {id : id}});
}

const updateTeacherById = async (id, TeacherModel) => {
    try {
        const result = await Teacher.update(TeacherModel, {where: {id: id}});
        if(result){
            return {message: "Professor atualizado com sucesso!"};
        }else{
            return {message: "Professor não encontrado!", status: 404};
        }
    } catch (error) {
        console.error();
    }
}


export default factory;