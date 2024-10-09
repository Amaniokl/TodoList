import { BsThreeDots, BsFillInfoSquareFill } from "react-icons/bs"
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark, FaRegCircle } from "react-icons/fa6";
import { TbCircleDotted } from "react-icons/tb";
import { RxHalf2 } from "react-icons/rx";
import { GiNetworkBars } from "react-icons/gi";

const bgColors = ["#B57136", "#868728", "#4D9446", "#5F80E4"];

export const priorities = [
    { title: "no priority", color: "gray", icon: <BsThreeDots /> },
    { title: "low", color: "lightgray", icon: <GiNetworkBars /> },
    { title: "medium", color: "gray", icon: <GiNetworkBars /> },
    { title: "high", color: "black", icon: <GiNetworkBars /> },
    { title: "urgent", color: "orange", icon: <BsFillInfoSquareFill /> }
];
export const status = [
    { title: "backlog", color: "black", icon: <TbCircleDotted /> },
    { title: "todo", color: "lightgrey", icon: < FaRegCircle /> },
    { title: "in progress", color: "#EBCB62", icon: <RxHalf2 /> },
    { title: "done", color: "#606ACB", icon: <FaCheckCircle /> },
    { title: "cancelled", color: "gray", icon: <FaCircleXmark /> },
];

export const statusIcons = {
    backlog: {
        color: "black",
        icon: <TbCircleDotted />,
    },
    todo: {
        color: "lightgrey",
        icon: <FaRegCircle />,
    },
    "in progress": {
        color: "#EBCB62",
        icon: <RxHalf2 />,
    },
    done: {
        color: "#606ACB",
        icon: <FaCheckCircle />,
    },
    cancelled: {
        color: "gray",
        icon: <FaCircleXmark />,
    },
};
export const generateIntials = (name) => {
    return name.split(' ').map(word => word.charAt(0)).join('');
}
export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
};