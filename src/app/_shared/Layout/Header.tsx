import React from 'react'

const Header = () => {
    return (
        <>
            <div><header>
                <div className="px-3 py-2 bg-dark text-white">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <span className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                            </span>

                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <span className="nav-link text-secondary">
                                        <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                                        Sales Home
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            </div>
        </>
    )
}

export default Header