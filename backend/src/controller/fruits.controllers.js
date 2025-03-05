import { pool } from '../db.js';

// Ruta para obtener la lista de frutas
export const getFruits = (req, res) => {

    //Retornar lista de frutas 
    res.json({
        frutas: ['manzana', 'pera', 'limón, mango', 'kiwi', 'melón', 'papaya']
    });
    // res.send('Hello World!');
}

// Verificar conexión con MySQL
export const getPin = async (req, res) => {
    const result = await pool.query('SELECT NOW()');
    res.json(result[0]);
}

// Ruta para obtener la lista de frutas desde MySQL
export const selectFruit = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM fruits');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching fruits from DB:', error);
        res.status(500).json({ message: 'Error fetching fruits' });
    }
}