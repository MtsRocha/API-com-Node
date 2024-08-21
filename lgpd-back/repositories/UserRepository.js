import User from "../models/User.js";

const saveUser = async (UserModel) => {
    const save = await User.create(UserModel);
    return save;   
}

const getAllUsers = async () => {
    return await User.findAll({
        order: [
            ['id', 'ASC']
        ]}
    )
}

const getUserById = async (id) => {
    return await User.findByPk(id);
}

const deleteUserById = async(id) => {
    return await User.destroy({where: {id : id}});
}

const updateUserById = async (id, userModel) => {
    try {
        const result = await User.update(userModel, {where: {id: id}});
        if(result){
            return {message: "Usuário atualizado com sucesso!"};
        }else{
            return {message: "Usuário não encontrado!", status: 404};
        }
    } catch (error) {
        console.error();
    }
}


const factory = {
    saveUser,
    getAllUsers,
    getUserById,
    deleteUserById 

}

export default factory;