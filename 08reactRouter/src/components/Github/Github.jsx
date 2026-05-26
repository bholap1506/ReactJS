
import { useLoaderData } from "react-router-dom"

function GitHub() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/bholap1506')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    return (
        <div className="text-center m-4 bg-amber-300 text-white text-4xl p-4">Github Followr: {data.followers}
        <h2 className="text-center text-green-700">Public Repos: {data.public_repos}</h2>
        <h2 className="text-center text-green-700">When was created: { new Date(data.created_at).toLocaleString()}</h2>
        

        <img src={data.avatar_url} alt="Git picture" width={200} />
        </div>
    )
}

export default GitHub

export const githubInfoLoader  = async () => {
    const response = await fetch('https://api.github.com/users/bholap1506')

    return response.json()
}