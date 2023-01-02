import { request, response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

// membuat variabel user_middleware
const user_middleware = async (req = request, res = response, next) => {
    try {

        // membuat variabel authorization untuk melakukan pengecekkan apakah ada authorization
        const authorization = await req.headers.authorization;

        if (!authorization) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Authorization tidak ditemukan..",
                }
            )
        };

        // membuat variabel token
        const token = authorization.split(" ")[1];

        // melakukan validasi token
        const verify = await jwt.verify(token, process.env.SECRET_KEY);

        // mengecek verify 
        if (!verify) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Token tidak terverifikasi",
                }
            )
        };

        // melanjutkan verifikasi
        next();

    } catch (error) {
        // mengembalikan respons kedalam bentuk json
        return res.status(500).json(
            {
                // menampilkan pesan error
                success: false,
                error: error.message,
            }
        )
    }
}

// untuk bisa dipakai di file ini
export default user_middleware;