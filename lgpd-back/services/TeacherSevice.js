import teacherRepository from "../repositories/teacherRepository.js";

const saveTeacher = (teacherModel) =>{
    return teacherRepository.saveTeacher(teacherModel);
}

const getTeacherById = (id) =>{
    return teacherRepository.getTeacherById(id);
}


const getAllTeachers = () =>{
    return teacherRepository.getAllTeachers();
}

const deleteTeacherById = (id) =>{
    return teacherRepository.deleteTeacherById(id);
}

const updateById = (id, teacherModel) =>{
    return teacherRepository.updateById(id, teacherModel);
}



const service = {
    saveTeacher,
    getTeacherById,
    getAllTeachers,
    deleteTeacherById,
    updateById
}

export default service;