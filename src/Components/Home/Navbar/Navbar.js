import React from 'react';
import  './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse Navbar-sided " id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-5 active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">Dentel Services</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link text-white " href="#">Reviews</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link text-white " href="#">Blogs</a>
                    </li>

                    <li class="nav-item mr-5">
                        <a class="nav-link text-white " href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
