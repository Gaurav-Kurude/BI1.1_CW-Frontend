import useFetch from "../hooks/useFetch";

const MovieByTitle = ({title}) =>{
   
    const {data, loading, error} = useFetch(`http://localhost:3000/movies/${title}`);
    console.log(data);
};
export default MovieByTitle;