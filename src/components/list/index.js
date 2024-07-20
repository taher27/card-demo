import React, { useEffect, useState } from "react";
import "./list.css";
import Card from "../card";
import axios from "axios";
import {
    getAllCardData,
    addCardData,
    deleteCardData
} from "../../utils/apiConfig.js";

function List() {
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        // make a getCards api call and setListItems here.
        fetchAllCardData();
    }, []);


    const fetchAllCardData = async () => {
        const cardData = await axios.get(`${getAllCardData}`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("cardData: ", cardData.data);
        setListItems(cardData.data);
    };

    const addCard = async () => {
        let d = Date.now();

        const cardCreated = await axios.post(`${addCardData}`, {
            new_card: { key: d, value: d }
        });

        if (cardCreated.status === 200) {
            fetchAllCardData();
        }
        console.log('cardCreated: ', cardCreated);
    }

    const deleteCard = async (removeItem) => {
        // Delete card w/o using API.
        // let newList =
        //     listItems.filter(item =>
        //         item.key !== removeItem.key);

        // setListItems(newList);
        // console.log('newList: ', newList);

        // Delete card with API.

        const cardDeleted = await axios.delete(`${deleteCardData}`, {
            data: {
                _id: removeItem.key,
            },
        });
        console.log(cardDeleted);
        if (cardDeleted.status === 200) {
            fetchAllCardData();
        }
    }

    const renderList = () => {
        return listItems && listItems.map(item => {
            return (
                <Card
                    key={item.key}
                    value={item.value}
                    onClickHandler={() => {
                        deleteCard(item);
                    }}
                />
            )
        })
    }
    return (
        <div className={'container'}>
            <div className={'header'}>
                <div className={'button'}
                    onClick={() => {
                        addCard();
                    }}
                >
                    <span>Add Card</span>
                </div>
            </div>
            <div className={'body'}>
                <div className={'listContainer'}>
                    {renderList()}
                </div>
            </div>
        </div>
    );
}

export default List;
