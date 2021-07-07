import { Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'

export const ButtonClick = () => {
    return (
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
    )
}
