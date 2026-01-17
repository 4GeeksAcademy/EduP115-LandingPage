function Portada() {
    return (
        <div className="d-flex justify-content-center">
            <div className="container-fluid" style={{ width: "90%" }}>
                <div className="jumbotron text bg-light p-5 mt-3">
                    <h1>A Warm Welcome</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button type="button" className="btn btn-primary">Call to action!</button>
                </div>
            </div>
        </div>
    )
}

export default Portada;