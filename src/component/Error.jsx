import { Link } from "react-router"

function Error() {
  return (
    <>
        <h2>Error 404</h2>
        <p>Axtardığınız səhifə tapılmayıb</p>
        <p><Link to="/">Ana səhifə</Link>yə qayıt</p>
    </>
  )
}

export default Error