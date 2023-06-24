import React, { useContext, useState } from "react";
import { Container, Row, Col, Card, Button, Modal} from "react-bootstrap";
import ProjectsList from "../components/ProjectsList";
import ProjectItem from "../components/ProjectItem";
import { sendDownload, sendID } from "../http/userAPI";

const Projects = () => {
    const [name1, setName1] = useState("popusk")
    const [author1, setAuthor1] = useState("ind1gozzz")
    const [name2, setName2] = useState("diplom")
    const [author2, setAuthor2] = useState("ind1gozzz")

    //const [curName, setCurName] = useState("")
    //const [curAuthor, setCurAuthor] = useState("")
    //const [curID, setCurID] = useState()

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [projID, setProjID] = useState()
    const [ownerID, setOwnerID] = useState()
    const [forksNum, setForksNum] = useState()
    const [date, setDate] = useState()
    const [projAuthor, setProjAythor] = useState("")
    const [projName, setProjName] = useState("")

    const getID = async (author, name) => {
        const response = await fetch(`https://api.github.com/repos/${author}/${name}`);
        const data = await response.json();
        //console.log(data.id)
        //await setCurID(data.id)
        return data.id;
    }

    const getProjByID = async (id) => {
        try {
            const response = await fetch(`https://api.github.com/repositories/${id}`);
        
            if (response.status === 200) {
              const data = await response.json();
              return data;
            } else {
              throw new Error(`Failed to get repository data: ${response.status}`);
            }
          } catch (error) {
            console.error(`Error: ${error.message}`);
          }
    }

    //console.log(getProjByID(636973456))
    //getID(author1, name1)

    const click = async (curAuthor, curName) => {
        //getID(curAuthor, curName).then(res => setCurID(res))
        let curID = await getID(curAuthor, curName)
        let projInfo = await getProjByID(curID)
        //console.log(curID)
        console.log(projInfo)
        //const response = await sendID(curID)
        //console.log(response)
        await setProjID(projInfo.id)
        await setOwnerID(projInfo.owner.id)
        await setForksNum(projInfo.forks)
        await setDate(projInfo.created_at.slice(0, 10).split("-").reverse().join("-"))
        await setProjAythor(curAuthor)
        await setProjName(curName)
        console.log(`log: ${curAuthor}, ${curName}`)
        const response = await sendDownload(curName, curAuthor)
        
        //console.log(ownerID)
        handleShow()
    }

    const downloadClick = async (curAuthor, curName) => { 
        // const response = await sendDownload(curName, curAuthor)
        // console.log(response)
        console.log(`log: ${curAuthor}, ${curName}`)
        sendDownload(curName, curAuthor)
    }

    return (
        <Container>
            <h1 className="d-flex justify-content-center align-items-center">Загруженные репозитории</h1>
            {/* <Row> */}
                {/* <ProjectsList /> */}
            <Row className="d-flex mt-4">
        <Col md={3} className="d-flex justify-content-center align-items-center" >
            <Card style={{width:300}} className="mt-3 d-flex justify-content-center align-items-center">
                <div>
                    <div className="mb-1">Название {name1}</div>
                    <div className="mb-1">Автор {author1} </div>
                    <div>
                    {/* <Button className="mb-2" onClick={() => {setCurName(name1); setCurAuthor(author1); click()}}>Загрузить</Button> */}
                    <Button className="mb-2" onClick={() => {click(author1, name1)}}>Загрузить</Button>
                </div>
                </div>
            </Card>
       </Col>
       <Col>
            <Card style={{width:300}} className="mt-3 d-flex justify-content-center align-items-center">
                <div>
                    <div className="mb-1">Название {name2}</div>
                    <div className="mb-1">Автор {author2} </div>
                    <div>
                    {/* <Button className="mb-2" onClick={() => {setCurName(name1); setCurAuthor(author1); click()}}>Загрузить</Button> */}
                    <Button className="mb-2" onClick={() => {click(author2, name2)}}>Загрузить</Button>
                </div>
                </div>
            </Card>
       </Col>
       </Row>
            
            {/* </Row> */}
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Информация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div><b>Название проекта:</b> {projName}</div>
                    <div><b>Никнейм автора:</b> {projAuthor}</div>
                    <div><b>ID проекта:</b> {projID}</div>
                    <div><b>ID автора:</b> {ownerID}</div>
                    <div><b>Количество форков:</b> {forksNum}</div>
                    <div><b>Дата создания:</b> {date}</div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
                <Button variant="primary" onClick={downloadClick}>Загрузить</Button>
                </Modal.Footer>
            </Modal>
        </>
        </Container>
        
    );
};

export default Projects