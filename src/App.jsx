import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams, useRouteMatch } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function App() {
    return (
        <Router>
            <div className="mx-auto mt-3 flex-content" style={{ width: 500 }}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" activeClassName="selected">
                                Home
                            </Link>
                        </li>
                        <li>
                            <NavLink to="/first-level">First level</NavLink>
                        </li>
                        <li>
                            <Link to="/button">Button</Link>
                        </li>
                        <li>
                            <Link to="/form">Form</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/first-level">
                    <FirstLevel />
                </Route>
                <Route path="/button">
                    <ButtonClick />
                </Route>
                <Route path="/form">
                    <FormExample />
                </Route>
                <Route path="/danger">
                    <Danger />
                </Route>
            </Switch>
        </Router>
    )
}

const Home = () => {
    return (
        <HelmetProvider>
            <div className="mx-auto mt-3 flex-content" style={{ width: 500 }}>
                <Helmet>
                    <title>Home page</title>
                </Helmet>
                <h1>My Hacker Stories</h1>
                <p>Welcome to our page. Take a look around, check out our content</p>
                <Button variant="outline-primary w-50" className="m-1" href="/button">
                    Check our buttons{' '}
                </Button>{' '}
                <Button variant="outline-success w-50" className="m-1" href="/form">
                    Check our forms{' '}
                </Button>{' '}
            </div>
        </HelmetProvider>
    )
}

const FirstLevel = () => {
    const { path, url } = useRouteMatch()
    return (
        <HelmetProvider>
            <div className="mx-auto mt-3 flex-content" style={{ width: 500 }}>
                <Helmet>
                    <title>Choose a stage</title>
                </Helmet>
                <h2>Stages</h2>
                <ul>
                    <li>
                        <Link to={`${url}/first-stage`}>First stage</Link>
                    </li>
                    <li>
                        <Link to={`${url}/second-stage`}>Second stage</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a stage.</h3>
                    </Route>
                    <Route path={`${path}/:stageId`}>
                        <Stage />
                    </Route>
                </Switch>
            </div>
        </HelmetProvider>
    )
}

const Stage = () => {
    const { stageId } = useParams()

    return (
        <div>
            <h3>{stageId}</h3>
        </div>
    )
}

const ButtonClick = () => {
    return (
        <HelmetProvider>
            <div className="mx-auto mt-3 flex-content" style={{ width: 500 }}>
                <Helmet>
                    <title>Button variants</title>
                </Helmet>
                <Button variant="outline-success mt-2 w-50" href="/">
                    Success
                </Button>{' '}
                <Button variant="outline-danger mt-2 w-50" href="/danger">
                    Danger
                </Button>{' '}
                <Button variant="outline-primary mt-2 w-50" href="/">
                    Info
                </Button>{' '}
            </div>
        </HelmetProvider>
    )
}

const FormExample = () => {
    return (
        <HelmetProvider>
            <div className="mx-auto mt-3" style={{ width: 500 }}>
                <Helmet>
                    <title>Form variants</title>
                </Helmet>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </HelmetProvider>
    )
}

const Danger = () => {
    return (
        <HelmetProvider>
            <div className="mx-auto mt-3 flex-content" style={{ width: 500 }}>
                <Helmet>
                    <title>Danger page</title>
                </Helmet>
                <p>Why did you click it?!</p>
                <NavLink to="/">Try again, genius</NavLink>
            </div>
        </HelmetProvider>
    )
}

// const App = () => {
//     return (
//         <div className="mx-auto mt-3" style={{ width: 500 }}>
//             <h1>My Hacker Stories</h1>
//             <Button variant="outline-primary" className="m-1" href="https://react-bootstrap.github.io/">
//                 Click me
//             </Button>{' '}
//             <hr />
// ;<Form>
//     <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
//     </Form.Group>

//     <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//     </Form.Group>
//     <Button variant="primary" type="submit">
//         Submit
//     </Button>
// </Form>
//         </div>
//     )
// }

// export default App
