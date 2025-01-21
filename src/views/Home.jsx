import { useTranslation } from "react-i18next";
import { Button, Card } from 'react-bootstrap';
import { useState } from "react";

export default function Home() {
    const { t } = useTranslation();

    const [text, setText] = useState('')

    let handleClick = () => {
        setText("You clicked the btn")
    }
    return (
        <div>
            {t('homeTitle')}
            <div className="fw-bold text-primary">{text}</div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{t('cardTitle')}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
