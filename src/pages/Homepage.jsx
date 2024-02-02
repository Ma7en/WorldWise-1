/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";

import PageNav from "../ui/header/PageNav";
import Main from "../ui/global/Main";
import Button from "../ui/global/Button";

export default function Homepage() {
    const navigate = useNavigate();

    return (
        <>
            <PageNav />

            <Main type="homepage">
                <div className="container">
                    <section>
                        <h1>
                            You travel the world.
                            <br />
                            WorldWise keeps track of your adventures.
                        </h1>

                        <h2>
                            A world map that tracks your footsteps into every
                            city you can think of. Never forget your wonderful
                            experiences, and show your friends how you have
                            wandered the world.
                        </h2>

                        <Button size="large" onClick={() => navigate("/login")}>
                            Start tracking now
                        </Button>
                        {/* <Link to="/login" className="cta">
                            Start tracking now
                        </Link> */}
                    </section>
                </div>
            </Main>
        </>
    );
}
