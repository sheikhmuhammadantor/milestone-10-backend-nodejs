import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {

  const phonesData = useLoaderData();

  return (
    <div>
      <h1 className="my-6">Phones {phonesData.length}</h1>
      <div className="flex flex-col gap-1 font-semibold text-lg">
        {
           phonesData.map((phone) => <Link to={`/phones/${phone.id}`} key={phone.id}>{phone.id}. {phone?.name}</Link> )
        }
      </div>
    </div>
  );
};

export default Phones;
