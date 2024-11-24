import { useLoaderData } from "react-router-dom"

function Phone() {

    const phone = useLoaderData();
    console.log(phone)

  return (
    <div>
      <h3 className="text-xl font-semibold">Name : {phone.name}</h3>
      <img className="mx-auto rounded-xl my-2" src={phone.image} alt={phone.name} />
      <p>Price : {phone.price}$</p>
    </div>
  )
}

export default Phone
