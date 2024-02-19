import { Router } from "express";
import { getUserById, getUsers, addUserHandler, deleteUserHandler, updateUserHandler } from "../controller/user.controller";

export const router =Router();

router.get("/",getUsers);
router.get("/:id",getUserById);
router.post("/",addUserHandler);
router.delete("/:id",deleteUserHandler);
router.patch("/:id",updateUserHandler);