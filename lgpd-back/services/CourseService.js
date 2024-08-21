import courseRepository from "../repositories/CourseRepository.js";

const saveCourse = (courseModel) =>{
    return courseRepository.saveCourse(courseModel);
}

const getCourseById = (id) =>{
    return courseRepository.getCourseById(id);
}


const getAllCourses = () =>{
    return courseRepository.getAllCourses();
}

const deleteCourseById = (id) =>{
    return courseRepository.deleteCourseById(id);
}

const updateById = (id, courseModel) =>{
    return courseRepository.updateById(id, courseModel);
}



export default service;