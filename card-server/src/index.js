import express from 'express';
import cors from 'cors';
import { cardData, setCardData } from './utils/utility.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/card', (req, res) => {
    // console.log('here...');
    let resp = cardData;
    res.send(resp)
});

app.post('/card/add', (req, res) => {
    try {
        // console.log("req: ", req.body);
        const { new_card } = req.body;
        setCardData([...cardData, new_card]);
        return res
            .status(200)
            .json({ message: "Card Added Successfully." });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

app.delete('/card/delete', (req, res) => {
    try {
        let newList =
            cardData.filter(item =>
                item.key !== req.body._id);
        setCardData(newList);

        return res
            .status(200)
            .json({ message: "Card Deleted Successfully." });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

const server = app.listen(3030, function () {
    let host = server.address().address;
    let port = server.address().port;

    // console.log('Server is running with port: ', port);
});