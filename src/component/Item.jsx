import { useContext, useState } from "react"
import { Button, Card, Form, InputGroup } from "react-bootstrap"
import { BasketContext, DataContext } from "./App"

function Item({item: {id, name, img, price, desc}}) {
    const {addToBasket} = useContext(BasketContext)
    const {size} = useContext(DataContext)
    const [olcu, setOlcu] = useState(Object.keys(price)[0])
    const [say, setSay] = useState(1)
    const path = './assets/img/'

    return (
        <Card>
            <Card.Img variant="top" src={path + img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Form.Select onChange={e => setOlcu(e.target.value)}>
                    {Object.keys(price).map(s => <option key={s} value={s}>{size[s]}</option>)}
                </Form.Select>
                <div className="d-flex space-between align-items-center py-3">
                    <InputGroup size="sm" className="mb-3">
                        <Button onClick={() => setSay(say > 1 ? say - 1 : 1)} variant="outline-secondary"> - </Button>
                        <span className="p-2">{say}</span>
                        <Button onClick={() => setSay(say + 1)} variant="outline-secondary"> + </Button>
                    </InputGroup>
                    <h5>{say * price[olcu]}₼</h5>
                </div>
                <div className="d-grid gap-2">
                    <Button onClick={() => addToBasket(id, olcu, say)} variant="warning">Ye məni !</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Item