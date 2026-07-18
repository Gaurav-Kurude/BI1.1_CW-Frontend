import useFetch from "../hooks/useFetch";

const Movies = () =>{
   const { data, loading , error } = useFetch("https://vercel.com/gaurav-kurude/bi-1-1-cw-frontend/2qMxt6wBNQwMioJLUdF8bGvBn6bE");
    console.log(data)

    return (
        <div>
            <ul>
              {data?.map((movie) => (
                <li>{movie.title}</li>
              ))}
            </ul>
        </div>
    )
};
export default Movies;