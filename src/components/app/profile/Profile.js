import React, { useEffect, useState, useRef } from 'react'
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
import { addPostApi, getAllPosts } from '../../../server/posts'
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import {storage} from '../../../server/firebase'


function ProfileComp({ idprofile, user }) {
    const [isMine, setisMine] = useState('')
    const [isfriend, setisfriend] = useState(false)

    const [titleInput, settitleInput] = useState('')
    const [todoInpt, settodoInpt] = useState('')
    const [todosPost, settodosPost] = useState([])

    const [postsArr, setpostsArr] = useState([])
    const [loadingPosts, setloadingPosts] = useState(false)
    const [userImg, setuserImg] = useState(null)
    useEffect(() => {
        console.log(userImg)
    }, [userImg])

    useEffect(() => {
        setisMine(idprofile == user.id)
    }, [idprofile])
    useEffect(() => {
        setloadingPosts(true);
        (async () => {
            setpostsArr(await getAllPosts(user.id))
            setloadingPosts(false)

        })()
    }, [])
    function addTodo() {
        if (todoInpt.length <= 3) {
            alert('please add some text')
            return;
        }
        settodosPost((arr) => [{ id: v4(), textTodo: todoInpt }, ...arr])
        settodoInpt('')
    }
    async function addPost() {
        if (titleInput.length <= 3) {
            alert('please add title or description')
            return;
        }
        try {
            const postId = v4()
            const res = await addPostApi(user.id, postId, todosPost, titleInput)
            setpostsArr((arr) => [{ title: titleInput, todos: todosPost, id: postId }, ...arr])
            settitleInput('')
            settodosPost([])
        } catch (error) {
            alert(error.message)
        }


    }
    function choosefile() {
        inputRef.current.click();
    }
    const inputRef = useRef(null)
    async function getThefile(e) {
        try {
            e.stopPropagation();
            e.preventDefault();
            await uplaodUserImg(e.target.files[0])

        } catch (errImg) {
            // console.log(errImg);
        }
    }
    async function readBlob(blob) {
        const objectURL = URL.createObjectURL(blob);
        return objectURL;
    }

    async function uplaodUserImg(file) {
        
        const uploadTask = storage.ref(`imgs/${user.id}`).put(file)
        uploadTask.on('state_changed',
            (snapshot) => { },
            (error) => { console.log(error) },
            async () => {
                // Upload completed successfully, now we can get the download URL
                console.log(await downloadImg())
            }

        )
    }
    async function downloadImg() {
        const url = await Storage.ref('imgs')
            .child(user.id)
            .getDownloadURL()
        return url
    }
    return (
        <div className="profilecontainer__" >
            <div className="top__container" >

                <div className="avatar__username__container" >
                    <div className="avatar__container" >
                        <Avatar onClick={choosefile}
                            alt="img-profile"
                            src={userImg}
                            sx={{ width: 150, height: 150, cursor: 'pointer' }} />
                        {(userImg) && <span>
                            <IconButton>
                                <DeleteIcon color="error" fontSize="large" />
                            </IconButton>
                        </span>}
                        <input
                            type="file"
                            id="file"
                            ref={inputRef}
                            onChange={getThefile}
                            style={{ display: "none" }}
                        />
                    </div>
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
                                <input type="button" value="ADD POST" onClick={addPost} />
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
                    {
                        postsArr.map(item => (
                            <PostBodyComp key={item.id}
                                todos={item.todos}
                                title={item.title} />
                        ))

                    }
                    {(loadingPosts == true) && <div className="loading__container" >
                        <CircularProgress color="success" />
                    </div>}
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(ProfileComp)
