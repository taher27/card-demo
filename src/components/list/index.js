import React, { useState } from "react";
import "./list.css";
import Card from "../card";

function List() {
    const [listItems, setListItems] = useState(
        [
            { key: "one", value: "one" },
            { key: "two", value: "two" },
            { key: "three", value: "three" },
            { key: "four", value: "four" },
            { key: "five", value: "five" },
        ]
    );

    // useEffect(() => {
    //     // make a getCards api call and setListItems here.
    // }, []);


    const addCard = () => {
        let d = Date.now();
        setListItems(
            [...listItems, { key: d, value: d }]
        );
    }

    const deleteCard = (removeItem) => {
        let newList =
            listItems.filter(item =>
                item.key !== removeItem.key);

        setListItems(newList);
        console.log('newList: ', newList);
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
