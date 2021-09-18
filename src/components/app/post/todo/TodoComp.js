import React from 'react'
import Card from '@mui/material/Card';

function TodoComp({ text, id }) {
    return (
        <Card
            sx={{ height: 60, marginRight : .5,marginLeft : .5, padding : 1}}
            key={id}>
            {text} 
        </Card>
    )
}

export default TodoComp
