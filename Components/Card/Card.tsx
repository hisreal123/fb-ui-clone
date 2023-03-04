import React from 'react'
import user from '../../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'

type CardPorps = {
    isLoggedIn: boolean;
    username: string;
    link: string;
    image: string;
    style: string
}


const addUserIcon = <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#1877f2" d="M12 17q.425 0 .713-.288T13 16v-3h3.025q.425 0 .7-.288T17 12q0-.425-.288-.713T16 11h-3V7.975q0-.425-.288-.7T12 7q-.425 0-.713.288T11 8v3H7.975q-.425 0-.7.288T7 12q0 .425.288.713T8 13h3v3.025q0 .425.288.7T12 17Zm0 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z" /></svg>
const deleteUserButton = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="whitesmoke" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z" /></svg>

export default function Card({ isLoggedIn, username, link, image, style }: CardPorps) {
    return (
        <>
            {isLoggedIn ? (
                <a href={link} className={` ${style}`}>
                    <div className="topFloater">
                        <div className="close">{deleteUserButton}</div>
                        <div className="msg">{22}</div>
                    </div>
                    <div className="imageWrapper">
                        <div className="top">
                            <img src={image}
                                height="100px"
                                width="100%"
                                alt="" />
                        </div>
                        <div className="bottom">
                            <h3>
                                {username}
                            </h3>
                        </div>
                    </div>
                </a>
            ) :
                (
                    <a href={link} className={` ${style}`}>
                        <div className=" NotLoggedIn imageWrapper">
                            <div className="top  ">
                                <h2>{addUserIcon} </h2>
                            </div>
                            <div className="bottom">
                                <h3>
                                    {username}
                                </h3>
                            </div>
                        </div>
                    </a>
                )}
        </>
    )
}
