import { Link } from 'react-router-dom';

function Home(): JSX.Element {
    return (
        <div
            className="background-photo"
            style={{
                backgroundImage: 'url(/images/backgroundImage.jpeg)',
                width: '100vw',
                height: '100vh',
            }}>
            <div className="front-page">
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
