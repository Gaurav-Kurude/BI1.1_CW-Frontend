import useFetch from "../hooks/useFetch";

const Movies = () =>{
   const { data, loading , error } = useFetch("https://bi-1-1-cw-backend-zeta.vercel.app/");
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