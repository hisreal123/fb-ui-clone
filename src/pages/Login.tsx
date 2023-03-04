import React from 'react'
import fbLogo from '../../assets/fbLogo.svg'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header'


const data = [
    {
        isLoggedIn: true,
        username: " George ",
        link: ' #',
        image: '/assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg',
        style: 'CardWrapper'
    },
    {
        isLoggedIn: false,
        username: " Add Account",
        link: ' #',
        image: '/assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg',
        style: 'CardWrapper'
    }
]

// logos
// const fbLogo = ;
export default function Login() {
    return (
        <>
            {/* <Header /> */}
            <div className="login">
                <div className="Container">
                    <a href="/Home">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                            alt=""
                            height='80px'
                            width='100%'
                        />
                    </a>
                    <h4> Recent logins </h4>
                    <p> Click your picture or add an account  </p>

                    <div className="Card">
                        {data.map((item) => {
                            return (
                                <>
                                    <Card isLoggedIn={item.isLoggedIn} username={item.username} link={item.link} style={item.style} image={item.image} />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
