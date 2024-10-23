import Cards from "./Cards"
import list from "../../public/list.json"
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
    <div className="max-w-scrreen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl">we are delighted to have you <span className="text-pink-500">Here! :)</span></h1>
            <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime sapiente incidunt facere voluptatibus consequatur excepturi, quaerat praesentium cum vitae neque dolores ab hic ad nisi, unde numquam eaque, doloribus similique iusto voluptatem voluptas. Voluptas quisquam dicta tenetur, soluta assumenda autem harum dolorum, reiciendis in accusamus mollitia ut nisi odit?</p>
            <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-300 mt-6">Back</button>
            </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
               list.map((item)=>(
                <Cards key={item.id} item={item} />
            ))}
        </div>
    </div>
    </>
  );
}

export default Course
