import { Col, Row } from "react-bootstrap"
import Item from "./Item"
import { useOutletContext } from "react-router"
import Filter from "./Filter"

function Menu() {
    const pizza = useOutletContext()

    return (
        <>
            <h2>Menyu</h2>
            <Filter />
            <Row xs={1} md={2} xl={4} className="g-4">
                {pizza.map(item => (
                    <Col key={item.id}>
                        <Item item={item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Menu