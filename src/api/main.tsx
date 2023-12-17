import axios from "axios";

interface InputData {
    string: string
    k: number
}

export const get_books = async (input_data: InputData) => {
    try {
        const res = await axios.post(`http://localhost:8001/predict`, input_data);
        return res.data.output_value;
    }
    catch (err) {
        return err;
    }
}

export const example_books = async () => {
    try {
        const res = await axios.get(`http://localhost:8000/get-post/`);
        return res.data;
        // return res.data;
    }
    catch (err) {
        return err;
    }
}