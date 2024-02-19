import { Request, Response } from "express";
import { users } from "../data/user.data";
import { v4 as uuidv4 } from 'uuid';
import { User } from "../types/user.type";

export const getUsers = (req: Request, res: Response) => {
    res.status(200).json(users);
}

export const getUserById=(req: Request, res: Response)=>{
    const id= req.params.id;
    const userFound= users.find(user=> user.id===id);
    if(userFound){
        res.status(200).json(userFound);
    }else{
        res.status(404).json({message:"User not found"});
    }
}

export const addUserHandler=(req: Request, res: Response)=>{
    const user: User = req.body;
    users.push({...user, id:uuidv4()});
    res.status(200).json(users);
};

export const deleteUserHandler=(req: Request, res: Response)=>{
    const id= req.params.id;
    const indexUserFound= users.findIndex(user=> user.id===id);
    if(indexUserFound!==-1){
        res.status(200).json({
            message:"User deleted successfully",
            users:users[indexUserFound]
        });
        users.splice(indexUserFound,1);
    }else{
        res.status(404).json({message:"User not found"});
    }
}

export const updateUserHandler=(req: Request, res: Response)=>{
    const indexUserFound= users.findIndex(user=> user.id===req.params.id);
    if(indexUserFound!==-1){
        res.status(200).json({
            message:"User modified successfully",
            users:users[indexUserFound]
        });
        Object.assign(users[indexUserFound], req.body);
    }else{
        res.status(404).json({message:"User not found"});
    }
}

