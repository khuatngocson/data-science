import axios from "axios";

interface InputData {
    string: string
    k: number
}

export const get_books = async (input_data: InputData) => {
    try {
        const res = await axios.post(`http://localhost:8001/predict`, input_data);
        return res.data;
    }
    catch (err) {
        return err;
    }
}
