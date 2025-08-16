import { useEffect, useState } from "react"
import { Outlet } from "react-router"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
import Header from "./Header"
import Basket from "./Basket"
import { pizza, size } from "../provider/data"
import { BasketContext, DataContext, FilterContext } from "../provider/context"
export { BasketContext, DataContext, FilterContext } from "../provider/context"


function App() {
  const [sebet, setSebet] = useState(sessionStorage["basket"] ? JSON.parse(sessionStorage["basket"]) : [])
  const [show, setShow] = useState(false)
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  useEffect(() => { sessionStorage.setItem("basket", JSON.stringify(sebet)) }, [sebet])

  function addToBasket (id, size, quant) {
    let index = sebet.findIndex(item => item.id == id && item.size == size)
    if (index >= 0) updateBasket (index, sebet[index].quant + quant)
    else setSebet([...sebet, {id, size, quant}])
    setShow(true)
  }

  function deleteFromBasket (ind) {
    setSebet(sebet.filter((_, i) => i != ind))
  }

  function updateBasket (ind, quant) {
    if(quant == 0) deleteFromBasket(ind)
    else {
      let obj = {...sebet[ind]}
      obj.quant = quant
      setSebet(sebet.map((item, i) => i == ind ? obj : item))
    }
  }

  function filterResult(array) {
    return filter == 'All' ? array :
                              array.filter(item => item.filter.includes(filter))
  }

  function searchResult(array) {
    return search == '' ? array : 
                          array.filter(item => item.name.toLowerCase().includes(search))
  }

  return (
    <DataContext value={{pizza, size}}>
      <BasketContext value={{sebet, setSebet, show, setShow, addToBasket, deleteFromBasket, updateBasket}}>
        <FilterContext value={{filter, setFilter, search, setSearch}}>

          <Header />
          <main className="py-5">
            <Container>
              <Outlet context={searchResult(filterResult(pizza))} />
            </Container>
          </main>
          <Footer />
          <Basket />
        
        </FilterContext>
      </BasketContext>
    </DataContext>
  )
}

export default App