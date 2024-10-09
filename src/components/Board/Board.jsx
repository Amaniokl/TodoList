import './Board.css'
import { IoMdAdd } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import Card from '../Card/Card';
import UserIcon from '../UserIcon/UserIcon';
import { generateIntials, getRandomColor, priorities, statusIcons } from '../../utils/data';

const Board = (props) => {
    const { tickets, users, group, level, userId, order, data } = props;

    let filteredTickets = [];
    if (group === 'status')
        filteredTickets = tickets.filter(ticket => ticket.status.toLowerCase() === data.title.toLowerCase());
    else if (group === 'priority')
        filteredTickets = tickets.filter(ticket => ticket.priority === level);
    else
        filteredTickets = tickets.filter(ticket => ticket.userId === userId);

    if (order === 'priority')
        filteredTickets = filteredTickets.slice().sort((a, b) => b.priority - a.priority);
    else
        filteredTickets = filteredTickets.slice().sort((a, b) => a.title.localeCompare(b.title));

    if (group === 'user') {
        return (
            <div className='board'>
                <div className='board_top'>
                    <div className="board_top_name">
                        <span><UserIcon intials={generateIntials(data?.name)} available={data?.available} bgColor={getRandomColor()} /></span>
                        <p>{data?.name} </p>
                        <span>{filteredTickets.length}</span>
                    </div>
                    <div className="board_top_options">
                        <IoMdAdd />
                        <SlOptions />
                    </div>
                </div>
                <div className="board_container">
                    {
                        filteredTickets.map((ticket) => {
                            return (<Card
                                ticket={ticket}
                                key={ticket.id}
                                icon={priorities[ticket?.priority].icon}
                                group={group} statusIcon={statusIcons[ticket?.status.toLowerCase()].icon}
                                statusColor={statusIcons[ticket?.status.toLowerCase()].color}
                                bgColor={getRandomColor()}
                            />)
                        })
                    }
                </div>

            </div>
        )
    }
    if (group === 'priority') {
        return (
            <div className='board'>
                <div className='board_top'>
                    <div className="board_top_name">
                        <span style={{ color: data.color }}>{data.icon}</span>
                        <p>{data.title} </p>
                        <span>{filteredTickets.length}</span>
                    </div>
                    <div className="board_top_options">
                        <IoMdAdd />
                        <SlOptions />
                    </div>
                </div>
                <div className="board_container">
                    {
                        filteredTickets.map((ticket) => {
                            const user = users?.find(user => user.id === ticket.userId)
                            return (<Card
                                ticket={ticket}
                                key={ticket.id}
                                user={user}
                                group={group}
                                statusIcon={statusIcons[ticket?.status.toLowerCase()].icon}
                                statusColor={statusIcons[ticket?.status.toLowerCase()].color}
                                bgColor={getRandomColor()}
                                icon="" />)
                        })
                    }
                </div>
            </div>
        )
    }
    return (
        <div className='board'>
            <div className='board_top'>
                <div className="board_top_name">
                    <span style={{ color: data.color }}>{data.icon}</span>
                    <p>{data.title} </p>
                    <span>{filteredTickets.length}</span>
                </div>
                <div className="board_top_options">
                    <IoMdAdd />
                    <SlOptions />
                </div>
            </div>
            <div className="board_container">
                {
                    filteredTickets.map((ticket) => {
                        const user = users?.find(user => user.id === ticket.userId)
                        return (<Card
                            ticket={ticket}
                            key={ticket.id}
                            statusIcon=""
                            icon={priorities[ticket?.priority].icon}
                            user={user}
                            group={group}
                            bgColor={getRandomColor()}
                            statusColor="" />)
                    })
                }
            </div>
        </div>
    )
}

export default Board