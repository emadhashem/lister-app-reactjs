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
import { storage } from '../../../server/firebase'
import { deleteSomePhoto, downloadImg, noProfileFireBasePath, uploadImg } from '../../../server/storageFirebase';
import { checkFollow, follow, unFollow } from '../../../server/follow';
import { get_the_user_data } from '../../../server/user';
import { useHistory } from 'react-router';


const noProfilePath = 'noprofile.webp'

function ProfileComp({ idprofile, user }) {
    const go = useHistory()

    const [isMine, setisMine] = useState('')
    const [isfriend, setisfriend] = useState(false)

    const [titleInput, settitleInput] = useState('')
    const [todoInpt, settodoInpt] = useState('')
    const [todosPost, settodosPost] = useState([])
    const [postsArr, setpostsArr] = useState([])
    const [loadingPosts, setloadingPosts] = useState(false)

    const [userImg, setuserImg] = useState(noProfileFireBasePath)
    const [userName, setuserName] = useState('')
    const [followerNum, setfollowerNum] = useState(0)
    const [followingNum, setfollowingNum] = useState(0)
    useEffect(() => {
        setisMine(idprofile == user.id)

    }, [idprofile])
    useEffect(() => {
        setloadingPosts(true);
        (async () => {
            await getUserData()
            setpostsArr(await getAllPosts(idprofile))
            setloadingPosts(false)
            await getProfileImg()
            if (isMine == false) {
                setisfriend(await checkFollow(user.id, idprofile))
            }
        })()
    }, [idprofile])
    /**--------------------------- */

    /** follow staff */
    async function handleFollowBtn() {
        if (isfriend == true) {
            try {
                setisfriend(false)
                await unFollow(user.id, idprofile)
                await getUserData()
            } catch (error) {
                setisfriend(true)
            }
            return
        }
        try {
            setisfriend(true)
            await follow(user.id, idprofile)
            await getUserData()
        } catch (error) {
            setisfriend(false)
        }
    }

    /** follow staff */

    /**--------------------------- */
    /**user data */
    async function getUserData() {
        try {
            const data = await get_the_user_data(idprofile)
            setuserName(data.fName + " " + data.lName)
            setfollowerNum(data.followersNum)
            setfollowingNum(data.followingNum)
            console.log(data)
        } catch (error) {
            go.push('/member/home')
        }
    }
    /**user data */
    /**--------------------------- */

    /** post and todo staff */
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

    /** post and todo staff */
    /**--------------------------- */

    /* profile img methods */
    function choosefile() {
        if (isMine == false) return
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
    async function handleRemove() {
        setuserImg(null)
        inputRef.current.value = null;
        const resUrl = await downloadImg(noProfilePath)
        setuserImg(resUrl)
        await deleteSomePhoto(`imgs/${idprofile}`)
    }
    async function getProfileImg() {
        try {
            const resUrl = await downloadImg(`imgs/${idprofile}`)
            setuserImg(resUrl)

        } catch (error) {
            const resUrlNoProfile = await downloadImg(noProfilePath)
            setuserImg(resUrlNoProfile)
        }

    }
    async function uplaodUserImg(file) {
        try {
            const res = await uploadImg(file, `imgs/${idprofile}`)
            const resUrl = await downloadImg(`imgs/${idprofile}`)
            setuserImg(resUrl)
            inputRef.current.value = null;
        } catch (error) {
            alert(error)
        }
    }
    /** profile  */
    /**--------------------------- */

    return (
        <div className="profilecontainer__" >
            <div className="top__container" >

                <div className="avatar__username__container" >
                    <div className="avatar__container" >
                        <Avatar onClick={choosefile}
                            alt="img-profile"
                            src={userImg}
                            sx={{ width: 150, height: 150, cursor: 'pointer' }} />
                        {(userImg != noProfileFireBasePath && isMine == true) && <span>
                            <IconButton onClick={handleRemove} >
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
                    <h2>{userName}</h2>
                </div>
                <div className="folwer__folwing__container" >
                    <div className="flw__num" >
                        <p>Following</p>
                        <span>{followingNum}</span>
                    </div>
                    <div className="flw__num" >
                        <p>Followers</p>
                        <span>{followerNum}</span>
                    </div>
                </div>
                {
                    (isMine == false) && <div className="folw__messg__container" >
                        <IconButton onClick={() => setisfriend(!isfriend)} >
                            {(!isfriend) && <PersonAddAltIcon onClick={handleFollowBtn}
                                fontSize="large" />}
                            {(isfriend) && <PersonRemoveAlt1Icon onClick={handleFollowBtn}
                                fontSize="large" />}
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
