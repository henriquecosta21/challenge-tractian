import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch'

import './Workorder.css'

type Workorders = {
  id: number;
  status: string;
  title: string;
  priority: string;
  description: string;
}

const Workorders = () => {
  const { data: workorders } = useFetch<Workorders[]>('https://my-json-server.typicode.com/tractian/fake-api/workorders/');
  
  return (
    <>
      <ul className="containerOrders">
        { workorders?.map(order => {
          return (
            <div className="card" key={order.id}>
              <li>
                <p>{`ORDER ID: ${order.id}`}</p>
                <p>{order.title}</p>
                <p>{order.status}</p>
                <p>{order.priority}</p>
                <p>{order.description}</p>
                <Link to={`/workorders/${order.id}`} className="btn">Open</Link>
              </li>
            </div>
            
          )
        })}
        </ul>
      </>
  )
}

export default Workorders