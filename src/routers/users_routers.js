import express from "express";
import { users_create_register } from "../controllers/users_controllers";

// membuat variabel user_routes
const user_routes = express.Router();

// membuat route create user menggunakan method post
user_routes.post("/user/register", users_create_register)

// memanggil secara default
export default user_routes