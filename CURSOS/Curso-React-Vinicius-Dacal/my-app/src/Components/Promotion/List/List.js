import React from 'react';
import PromotionCard from '../Card/Card';
import "./List.css"

const PromotionList = ({ loading, promotions }) => {
    if (loading) {
        return <div> Carregando...</div>;
    } else {
        return (
            <div className='promotion-list'>
                {promotions.map((promotion) => (
                    <PromotionCard promotion={promotion} />
                ))}
            </div>
        );
    }
};

export default PromotionList;
