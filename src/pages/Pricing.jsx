// Uses the same styles as Product
import { useEffect } from "react";
// import styles from "./Product.module.css";

import PageNav from "../ui/header/PageNav";
import Main from "../ui/global/Main";

export default function Product() {
    // const [state, setState] = useState(0);
    // useEffect(() => {
    //     document.title = `pricing ${state}`;
    // }, [state]);
    useEffect(() => {
        document.title = `WorldWise: Pricing`;
    }, []);

    return (
        <>
            <PageNav />

            <Main type="pricingpage">
                <div className="container">
                    <section>
                        <div>
                            <h2>
                                Simple pricing.
                                <br />
                                Just $9/month.
                            </h2>

                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Vitae vel labore mollitia
                                iusto. Recusandae quos provident, laboriosam
                                fugit voluptatem iste.
                            </p>
                        </div>

                        <div className="img">
                            <img
                                src="images/img-2.jpg"
                                alt="overview of a large city with skyscrapers"
                            />
                        </div>
                    </section>
                </div>
            </Main>
        </>
    );
}
