import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'

export const Danger = () => {
    return (
        <div className="mx-auto mt-3 flex-content" style={{ width: 500 }}>
            <Helmet>
                <title>Danger page</title>
            </Helmet>
            <p>Why did you click it?!</p>
            <NavLink to="/">Try again, genius</NavLink>
        </div>
    )
}
