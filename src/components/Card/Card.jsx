import './Card.css'

import { FaCircle } from "react-icons/fa";
import UserIcon from '../UserIcon/UserIcon';
const Card = ({ ticket, user, icon, statusIcon, statusColor, bgColor }) => {
    const userIntials = user?.name.split(' ').map(word => word.charAt(0)).join('');
    return (
        <div className='card'>
            <div className='card_header'>
                <p className='card_id'>{ticket?.id}</p>
                {user && <UserIcon intials={userIntials} available={user?.available} bgColor={bgColor} />}
            </div>
            <div className='card_info'>
                <span style={{ color: statusColor }}>{statusIcon}</span>
                <p>
                    {ticket?.title}
                </p>
            </div>
            <div className='card_footer'>
                {icon && <div>
                    {icon}
                </div>}
                <div className="card_tag">
                    <FaCircle />
                    {
                        ticket?.tag.map((tg, id) => (
                            <p key={id} >{tg}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Card