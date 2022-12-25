import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

import { logo, sun } from "../assets";
import { navlinks } from "../constants"

const Sidebar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState("dashboard");

    const Icon = ({ styles, name, imgUrl, disabled, isActive, handleClick }) => (
        <div className={`w-[48px] h-[48px] rounded-[10px] 
        ${isActive && isActive === name && 'bg-[#2c2f32]'}
        flex justify-center items-center ${!disabled && 'cursor-pointer'}
        ${styles}`
        }
            onClick={handleClick}>
            {!isActive ?
                (<img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />)
                : 
                (<img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`} />)}
        </div>
    )

    return (
        <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
            <Link to="/">
                <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]"
                    imgUrl={logo}
                />
            </Link>

            <div className="flex justify-between items-center flex-col bg-[#1c1c24]
            rounded-[20px] w-[76px] py-4 mt-12">
                <div className="flex justify-center items-center flex-col gap-3">
                    {navlinks.map((link) =>
                    (
                        <Icon
                            key={link.name}
                            // imgUrl={link.imgUrl}        
                            // name={link.name}
                            {...link}
                            isActive={isActive}
                            handleClick={() => {
                                if (!link.disabled) {
                                    setIsActive(link.name);
                                    navigate(link.link);
                                }
                            }
                            }
                        />
                    )
                    )}
                </div>
            </div>
            <Icon 
            styles={"bg-[#1c1c24] shadow-secondary"}
            imgUrl={sun} 
            />

        </div>
    )
}

export default Sidebar