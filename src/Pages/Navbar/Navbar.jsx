import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg">
            <div className="container-fluid">
                <div className="navbar-brand" >PTP </div>
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <div className="nav-link" > UserName </div>
                </div>
                <div>About</div>
            </div>
        </nav>
    )
}