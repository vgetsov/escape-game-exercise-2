import { Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'

export const Home = () => {
    return (
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
    )
}
