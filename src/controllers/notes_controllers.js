import { request, response } from "express";
import db from "../../prisma/connection";

// membuat notes
export const notes_create = async (req = request, res = response) => {
    try {
        // membuat variabel data yang isinya permintaan body
        const data = await req.body;

        // membuat variabel result 
        const createNote = await db.notes.create({
            data: data
        })
        return res.status(201).json(
            {
                // menampilkan pesan sukses
                success: true,
                message: "Berhasil menambahkan note ke database",
                note: createNote
            }
        )
    } catch (error) {
        // mengembalikan respons kedalam bentuk json
        return res.status(500).json(
            {
                // menampilkan pesan error
                success: false,
                error: error.message
            }
        )
    }
}

// membaca notes
export const notes_read = async (req = request, res = response) => {
    try {
        // membuat variabel result
        const result = await db.notes.findMany();

        // mengembalikan permintaan kedalam bentuk json
        return res.status(201).json(
            {
                // menampilkan pesan sukses
                success: true,
                notes: result
            }
        )
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
};