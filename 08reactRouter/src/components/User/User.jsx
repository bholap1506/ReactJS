
import { useParams } from "react-router-dom"

function User() {
    const { userid } = useParams()
    return (
        <div className="bg-green-700 text-gray-700 text-3xl">User: {userid}</div>
    )
}

export default User