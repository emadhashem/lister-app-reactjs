import React from 'react'
import './postbodycompstyles.scss'
import { Carousel } from '@trendyol-js/react-carousel';
import TodoComp from '../todo/TodoComp';

function PostBodyComp({ title = '', todos = [] }) {

    return (
        <div className="postbody__container" >
            <p className="title__">{title}</p>
            <div className="todos__container">
                <Carousel show={3}
                    swiping={true}
                    infinite 
                    slide={3}
                    leftArrow={ () => null}
                    rightArrow={ () => null}
                >
                    {
                        todos.map(item => (
                            <TodoComp {...item} />
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default PostBodyComp
