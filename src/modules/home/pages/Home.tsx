import { Link } from 'react-router-dom';

function Home(): JSX.Element {
    return (
        <div
            className="backgroundPhoto"
            style={{
                backgroundImage: 'url(/images/backgroundImage.jpeg)',
                // backgroundSize: "cover",
                width: '100vw',
                height: '100vh',
                // opacity: 0.9,
            }}>
            <div className="Front-page">
                <h1 className="title">Battle-Buddy</h1>
                <Link to={'/log'}>
                    <button className="enter" type="button">
                        LOG
                    </button>
                </Link>
                <Link to={'https://smoothcomp.com'}>
                    <button className="site">COMPETE</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
