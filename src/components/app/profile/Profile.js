import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './profilestyles.scss'
import Avatar from '@mui/material/Avatar'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';
import ForumIcon from '@mui/icons-material/Forum';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { IconButton } from '@mui/material';
import { v4 } from 'uuid';
import PostBodyComp from '../post/postbody/PostBodyComp';
const tstTodos = [{ text: 1, id: 1 }, { text: 2, id: 2 }, { text: 3, id: 3 }, { text: 4, id: 4 }]
function ProfileComp({ idprofile, user }) {
    const [isMine, setisMine] = useState('')
    const [isfriend, setisfriend] = useState(false)

    const [titleInput, settitleInput] = useState('')
    const [todoInpt, settodoInpt] = useState('')
    const [todosPost, settodosPost] = useState([])
    useEffect(() => {
        setisMine(idprofile == user.id)
    }, [idprofile])

    function addTodo() {
        if (todoInpt.length <= 3) {
            alert('please add some text')
            return;
        }
        settodosPost((arr) => [{ id: v4(), textTodo: todoInpt }, ...arr])
        settodoInpt('')
    }
    function addPost() {
        if (titleInput.length <= 3) {
            alert('please add title or description')
            return;
        }


        settitleInput('')
        settodosPost([])
    }
    return (
        <div className="profilecontainer__" >
            <div className="top__container" >

                <div className="avatar__username__container" >
                    <Avatar alt="img-profile" sx={{ width: 150, height: 150 }} />
                    <h2>User Name</h2>
                </div>
                <div className="folwer__folwing__container" >
                    <div className="flw__num" >
                        <p>Following</p>
                        <span>{10}</span>
                    </div>
                    <div className="flw__num" >
                        <p>Followers</p>
                        <span>{15}</span>
                    </div>
                </div>
                {
                    (isMine == false) && <div className="folw__messg__container" >
                        <IconButton onClick={() => setisfriend(!isfriend)} >
                            {(!isfriend) && <PersonAddAltIcon fontSize="large" />}
                            {(isfriend) && <PersonRemoveAlt1Icon fontSize="large" />}
                        </IconButton>
                        <IconButton >
                            <ForumIcon fontSize="large" />
                        </IconButton>

                    </div>
                }
            </div>
            <div className="down__container" >
                {
                    (isMine) && (
                        <div className="addpost__container">
                            <form>
                                <input type="button" value="ADD POST" />
                                <input className="title__input" type="text"
                                    placeholder="ADD TITLE OR DESCRIPTION"

                                    value={titleInput}
                                    onChange={e => settitleInput(e.target.value)}
                                />
                                <div className="todoinpt__container" >
                                    <input className="todo__input"
                                        placeholder="ADD MORE TASKS"
                                        type="text"
                                        value={todoInpt}
                                        onChange={e => settodoInpt(e.target.value)}
                                    />
                                    <IconButton onClick={addTodo} >
                                        <AddTaskIcon fontSize="large" />
                                    </IconButton>
                                </div>
                                <div className="todos__container" >
                                    {
                                        todosPost.map(item => (
                                            <p key={item.id} >{item.textTodo}</p>
                                        ))
                                    }
                                </div>
                            </form>
                        </div>
                    )
                }
                <div className="posts__container">
                    <PostBodyComp title="this profile posts"
                        todos={tstTodos}
                    />
                    <PostBodyComp title="this profile posts"
                        todos={tstTodos}
                    />
                    <PostBodyComp title="this profile posts"
                        todos={tstTodos}
                    />
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(ProfileComp)
