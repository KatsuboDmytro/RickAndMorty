import React from "react";
import { Routes, Route } from "react-router-dom";

import RickAndMorty from "./pages/RickAndMorty";
import CharacterInfo from "./pages/CharacterInfo";
import './scss/main.scss'
import { AuthProvider } from "./Auth/Auth";

function App() {
    return (
        <>
        <AuthProvider>
            <Routes>
                <Route path={`/`} element={<RickAndMorty />} />
                <Route path={`/character/:id`} element={<CharacterInfo />} />
            </Routes>
        </AuthProvider>
        </>
    );
}

export default App;
