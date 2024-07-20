import React from "react";
import "./card.css";


function Card(props) {
    const { value, onClickHandler } = props;
    return (
        <div className={'cardContainer'}>
            <div className={'cardHeader'}>
                <p>Time Created:</p>
                <p>{value}</p>
            </div>
            <div className={'cardBody'}>
                <div
                    className={'button'}
                    onClick={onClickHandler}>
                    <span>{'Delete'}</span>
                </div>
            </div>

        </div>
    );
}

export default Card;
