import { useContext } from "react"
import { Button, Modal, Table } from "react-bootstrap"
import { FaRegTrashAlt } from "react-icons/fa"
import { BasketContext, DataContext } from "./App"

function Basket() {
    const {show, setShow, sebet, deleteFromBasket, updateBasket} = useContext(BasketContext)
    const {pizza} = useContext(DataContext)
    let path = './assets/img/'
    return (
        <Modal show={show} onHide={() => setShow(false)} size="lg" centered >
            <Modal.Header closeButton>
                <Modal.Title>Səbət</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Sifariş:</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Şəkil</th>
                            <th>Ad</th>
                            <th>Ölçü</th>
                            <th>Qiymət</th>
                            <th>Say</th>
                            <th>Məbləğ</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sebet.map((item, i) => {
                            let p = pizza.find(elm => elm.id == item.id)
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td><img className="thumb" src={path + p.img} alt={p.name} /></td>
                                    <td>{p.name}</td>
                                    <td>{item.size}</td>
                                    <td>{p.price[item.size]}₼</td>
                                    <td>
                                         <Button onClick={() => updateBasket(i, item.quant - 1)} variant="outline-secondary"> - </Button>
                                        <span className="p-2">{item.quant}</span>
                                        <Button onClick={() => updateBasket(i, item.quant + 1)} variant="outline-secondary"> + </Button>
                                    </td>
                                    <td>{item.quant * p.price[item.size]}₼</td>
                                    <td><FaRegTrashAlt onClick={() => deleteFromBasket(i)} /></td>
                                </tr>
                            )
                        } )}
                    </tbody>
                    </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setShow(false)}>Bağla</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Basket