import { request, response } from "express";
import db from "../../prisma/connection";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

// membuat users
export const users_create_register = async (req = request, res = response) => {
    try {
        // membuat variabel data yang isinya permintaan body
        const data = await req.body;

        // membuat createUser/result yang isinya mengambil database user yang akan dibuat
        const result = await db.users.create(
            {
                // mengambil variabel data yang ada didalam schema database
                data: data,
            }
        );

        // membuat objek secret key
        const { SECRET_KEY } = process.env;

        // melakukan generate jsonwebtoken
        const token = jwt.sign(
            {
                id: result.id,
                email: result.email,
            },
            // secret key
            SECRET_KEY
        );

        // mengembalikan permintaan status kedalam bentuk json
        return res.status(201).json(
            {
                // menampilkan pesan bahwa pesan berhasil dibuat
                success: true,
                message: "Data User Berhasil Ditambahkan",
                token: token,
            }
        )
    } catch (error) {
        // mengembalikan respons kedalam bentuk json
        return res.status(500).json(
            {
                // menampilkan pesan error
                success: false,
                message: error.message,
            }
        )
    }
}