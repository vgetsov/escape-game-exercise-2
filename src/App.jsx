import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = React.useState(localStorage.getItem(key) || initialState)

    React.useEffect(() => {
        localStorage.setItem(key, value)
    }, [value, key])

    return [value, setValue]
}

const App = () => {
    const stories = [
        {
            title: 'React',
            url: 'https://reactjs.org/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0,
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org/',
            author: 'Dan Abramov',
            num_comments: 2,
            points: 5,
            objectID: 1,
        },
    ]

    const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React')

    const handleSearch = (event) => setSearchTerm(event.target.value)

    const searchedStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div className="mx-auto mt-3" style={{ width: 500 }}>
            <h1>My Hacker Stories</h1>
            <InputWithLabel id="search" value={searchTerm} type="text" onInputChange={handleSearch}>
                <Text />
                <strong>Search:</strong>
            </InputWithLabel>
            <p>
                We are searching for <strong>{searchTerm}</strong>
            </p>
            <Button variant="outline-primary" className="m-1" href="https://react-bootstrap.github.io/">
                Click me
            </Button>{' '}
            <hr />
            <List list={searchedStories} />
            <div className="shadow-lg p-3 mb-3 bg-body rounded">Larger shadow</div>
            <div className="shadow p-3 mb-3 bg-body rounded">Regular shadow</div>
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
    )
}

const Text = () => <p>Search through our database</p>

const InputWithLabel = ({ id, value, type, onInputChange, children }) => (
    <>
        <label htmlFor={id}>{children}</label>
        &nbsp;
        <input id={id} type={type} value={value} onChange={onInputChange} />
    </>
)

const List = ({ list }) => list.map((item) => <Item key={item.objectID} item={item} />)

const Item = ({ item }) => (
    <div>
        <span>
            <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
    </div>
)

export default App
