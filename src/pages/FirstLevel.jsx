import { Helmet } from 'react-helmet-async'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import { Stage } from '../components/Stage'

export const FirstLevel = () => {
    const { path, url } = useRouteMatch()
    return (
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
    )
}
