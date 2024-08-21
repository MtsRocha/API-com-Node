import userRepository from "../repositories/UserRepository.js";

const saveUser = (userModel) =>{
    return userRepository.saveUser(userModel);
}

const getUserById = (id) =>{
    return userRepository.getUserById(id);
}


const getAllUsers = () =>{
    return userRepository.getAllUsers();
}

const deleteUserById = (id) =>{
    return userRepository.deleteUserById(id);
}

const updateById = (id, userModel) =>{
    return userRepository.updateById(id, userModel);
}



const service = {
    saveUser,
    getUserById,
    getAllUsers,
    deleteUserById,
    updateById
}

export default service;