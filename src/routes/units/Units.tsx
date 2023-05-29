import { useEffect, useState } from "react"

type Unit = {
    companyId: string;
    id: string;
    name: string;
}

const Units = () => {

    const [units, setUnits] = useState<Unit[]>([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/tractian/fake-api/units')
            .then(response => response.json())
            .then(data => {
                setUnits(data)
            })
    }, [])
    return (
        <ul>
            {units.map(unit => {
                return (
                    <li key={unit.id}>
                        <p>COMPANY ID: {unit.companyId}</p>
                        <p>ID: {unit.id}</p>
                        <p>NAME: {unit.name}</p>
                    </li>
                )
            })}
        </ul>
  )
}

export default Units