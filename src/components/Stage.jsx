import { useParams } from 'react-router-dom'

export const Stage = () => {
    const { stageId } = useParams()

    return (
        <div>
            <h3>{stageId}</h3>
        </div>
    )
}
