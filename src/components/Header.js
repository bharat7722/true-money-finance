import React, {  useMemo } from 'react';
import Connect from './Connect';
import { Link } from 'react-router-dom';
export default function Header() {
    
    return (
        <React.Fragment>
            <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="assets/images/logo-1.png" alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menubar" aria-controls="menubar" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="menubar">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#how-works">How It Works</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#earn">Earn</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#tokenomics">Tokenomics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://True+Money.gitbook.io/True+Money/" target="_blank">Docs</a>
                            </li>
                            <li class="nav-item">
                            <Link class="btn button-49" to="/app">Launching Dapp</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
            
        </React.Fragment>
    )
}


