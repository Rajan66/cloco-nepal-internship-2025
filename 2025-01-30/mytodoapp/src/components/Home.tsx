import TodoTable from './TodoTable'
import AddApplication from './AddApplication'
import { TApplication } from '../types/TApplication'
import { useState } from 'react';

const Home = () => {
    const [applications, setApplications] = useState<TApplication[]>([]); // default value is []
    const handleFormSubmit = (data: TApplication) => {
        console.log(data)
        setApplications((prevApps) => [...prevApps, data]);
    }

    return (
        <div>
            <AddApplication onSubmit={handleFormSubmit} />
            <TodoTable applications={applications} setApplications={setApplications} />
        </div>
    )
}

export default Home