import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './header.css'
function Header({ common }) {
    const [headerState, setheaderState] = useState(false)
    useEffect(() => {
        includes__word(common.path, "member")
    }, [common.path])
    function includes__word(path__url = "", word = "") {
        setheaderState(path__url.includes(word))
    }
    return (
        <div className="header__container background__color">
            {(headerState) && <div>search comp</div>}
            <p>Lister App</p>
            {(headerState) && <div>options comp</div>}
        </div>
    )
}
const mapStateToProps = ({ common }) => ({ common })
export default connect(mapStateToProps)(Header)
