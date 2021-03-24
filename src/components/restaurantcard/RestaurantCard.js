import React from 'react';
import './restaurantCard.css';
import {Card,CardImg,CardBody,CardText,CardTitle,CardSubtitle,CardImgOverlay} from 'reactstrap';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Icon } from '@material-ui/core';

const RestaurantCard = ({item}) => {

    const img_address  = `http://localhost:3000/${item.image}`

    return (
        <div className='rest_card'>
            <Card className='card'>
                <CardImg src={img_address} className='card_img' />
                <CardImgOverlay className='card_body'>
                    <CardTitle tag='h5' className='Card_title'>{item.name}</CardTitle>
                    <CardSubtitle tag='h6' className='Card_subtitle'>{item.trademark}</CardSubtitle>
                    <CardText  className='card_text'>
                        <div className='card_text'>
                            <Icon className='fa fa-star-o' fontSize='small' style={{color:'gold',marginRight:'5px'}}/>
                            <h6 > {item.rating}</h6>
                        </div>
                        <div className='card_text'>
                            <Icon className='fa fa-inr' fontSize='small' />
                            <h6>{item.CostFor2} For Two</h6>
                        </div>
                    </CardText>
                </CardImgOverlay>
            </Card>
        </div>
    );
}

export default RestaurantCard;