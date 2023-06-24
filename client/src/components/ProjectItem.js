import React from "react";
import { Card, Col, Button } from "react-bootstrap";


const ProjectItem = () => {
    return (
       <Col md={3} className="d-flex justify-content-center align-items-center" >
        <Card style={{width:300}} className="mt-3 d-flex justify-content-center align-items-center">
        <div>
            <div>name</div>
            <div>date</div>
            <div className="mt-3">
                <Button className="mb-3">Скопировать ссылку на скачивание</Button>
            </div>
            <div>
                <Button className="mb-3">Загрузить</Button>
            </div>
        </div>
        </Card>
        
       </Col>
    );
};

export default ProjectItem