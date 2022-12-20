import React from 'react'
import ReactPlayer from 'react-player';
import "./index.css";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Description = ({movies}) => {
    const params = useParams();
    const descrip = movies.find((el)=>el.name===params.name)

    return (
            <div className="description">
                <h4>{descrip.name}</h4>
                <h4>{descrip.description}</h4>
                <div className="video">
                    <ReactPlayer url={descrip.trailer}/>
                </div>

                <Link to={`/`}>
                    <Button
                        style={{
                        backgroundColor: "#7457a7",
                        borderColor: "rgba(99,66,156,1)",
                        color: "rgb(255, 249, 250)",
                        textShadow: "2px 2px 4px rgba(61,34,109,1)",
                        marginLeft: 5,
                        width: 90,
                        }}
                    >
                    <i className="fa fa-home pink-color" style={{ paddingRight: 5 }}></i>
                    Home
                    </Button>
                </Link>
            </div>
    )
}

export default Description