// import styles from "./AppLayout.module.css";

import Main from "../ui/global/Main";
import Sidebar from "../components/Sidebar.";

import User from "../components/User";
import Map from "../components/Map";

// import styled from "styled-components";

// const StyledAppLayout = styled.div`
//     height: 100vh;
//     padding: 2.4rem;
//     overscroll-behavior-y: none;
//     display: flex;
//     position: relative;
// `;

const AppLayout = () => {
    return (
        <>
            <Main type="applayout">
                <div className="container">
                    <section>
                        <User />
                        <Sidebar />
                        <Map />
                    </section>
                </div>
            </Main>
        </>
    );
};

export default AppLayout;
