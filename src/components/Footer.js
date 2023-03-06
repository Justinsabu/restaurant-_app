import React from 'react'
import Card from 'react-bootstrap/Card';

function Footer() {
    return (
        <div>    <Card className="bg-dark text-center text-white">
            <Card.Body>ABOUT Brio</Card.Body>
            <Card.Header>
Over 2000 years of history have shaped the cuisine of the idyllic Indian coastal region of Malabar. Once the epicenter of the old spice trade, the settlers from the Arab world, Portugal, Turkey, and the Netherlands all helped create the delicious and unique dishes.</Card.Header>
            <Card.Body>
                <Card.Text>
                    CONTACT: www.briorestaurant.com
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">© 2023 Brio Restaurant</Card.Footer>
        </Card></div>
    )
}

export default Footer