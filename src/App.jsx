import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Home } from './pages/Home'
import { FirstLevel } from './pages/FirstLevel'
import { ButtonClick } from './pages/ButtonClick'
import { FormExample } from './pages/FormExample'
import { Danger } from './pages/Danger'

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

            <HelmetProvider>
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
            </HelmetProvider>
        </Router>
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
