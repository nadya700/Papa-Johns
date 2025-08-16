import { useContext } from "react"
import { Form } from "react-bootstrap"
import { FilterContext } from "./App"

const farr = ['All', 'chicken', 'meat', 'vegan', 'spicy']

function Filter() {
    const {filter, setFilter, search, setSearch} = useContext(FilterContext)
    return (
        <div>
            <Form className="py-3">
                {farr.map(f => <Form.Check
                    onChange={() => setFilter(f)}
                    checked={f == filter}
                    label={f}
                    key={f}
                    type='radio'
                    name='filter'
                    inline
                />)}
            </Form>
            <div className="pb-3">
                <Form.Control onInput={e => setSearch(e.target.value.toLowerCase())} value={search} type="seaRCH" placeholder="Axtar..." />
            </div>
        </div>
    )
}

export default Filter