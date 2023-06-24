import React, { useState } from "react";
import {Button, Card, Container, Form, Row} from "react-bootstrap"
import { useClipboard } from 'use-clipboard-copy';
import { sendData, sendInpLink } from "../http/userAPI.js";

const Search = () => {
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [link, setLink] = useState("")
    const [rName, setRName] = useState("")
    const [rAuthor, setRAuthor] = useState("")
    const [isExists, setIsExists] = useState("")

    const [inputLink, setInputLink] = useState("")
    const [isValidLink, setIsValidLink] = useState("")

    const click = async () => {
        const response = await sendData(name, author)
        console.log(response)
        console.log(response.data.proj.someString)
        setLink(response.data.proj.someString)
        setRName(response.data.name.name)
        setRAuthor(response.data.author.author)
        if(response.data.proj.someString === "404") {
            setIsExists("\u274C")
        } else {setIsExists("\u2714")}
        //console.log(data)
    }

    const lClick = async () => { 
        const response = await sendInpLink(inputLink)
        console.log(response)
        if (response.data.isExists === true) {
            setIsValidLink("\u2714")
        } else {setIsValidLink("\u274C")}
    }



    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 200}}
        >
            <Row md="2" className="d-flex justify-content-center align-items-center">
            <Card style={{width: 600}} className="p-5 mb-5">
                <h2 className="m-auto">Поиск по названию</h2>
                <Form className="d-flex flex-column">
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите название"
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control 
                        placeholder="Введите никнейм автора"
                        className="mt-2"
                        value={author} 
                        onChange={e => setAuthor(e.target.value)}
                    />
                    <Button 
                    className="mt-2"
                    onClick={click}
                    >Найти</Button>
                </Form>
            </Card>
            <Card>
                <div>
                        <h2 className="mt-3">Название: {rName}</h2>
                        <h2 className="mt-3">Автор: {rAuthor}</h2>
                        <h2 className="mt-3">Найден: {isExists}</h2>
                        <div className="mt-3">
                            <Button className="mb-3" onClick={() => navigator.clipboard.writeText(link)}>Скопировать ссылку на скачивание</Button>
                        </div>
                        <div>
                            <Button className="mb-3" onClick={() => {
                                document.location=link
                            }}>Загрузить</Button>
                        </div>
                        
                        
                </div>
            </Card>
            </Row>
            <Card className="m-auto p-5" style={{width: 600}}>
                <div>
                    <h2 className="m-auto">Проверка ссылки</h2>
                    <Form className="d-flex flex-column">
                    <Form.Control 
                        className="mt-3"
                        placeholder="Укажите ссылку"
                        value={inputLink} 
                        onChange={e => setInputLink(e.target.value)}
                    />
                    <Button 
                    className="mt-2"
                    onClick={lClick}
                    >Проверить</Button>
                    <h2 className="mt-3">Существует: {isValidLink}</h2>
                </Form>
                </div>
            </Card>
            
        </Container>
            
    );
};

export default Search;