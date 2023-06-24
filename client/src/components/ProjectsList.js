import React from "react";
import { Row } from "react-bootstrap"
import ProjectItem from "./ProjectItem"; 

const ProjectsList = () => {
    return (
       <Row className="d-flex mt-4">
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
       </Row>
    );
};

export default ProjectsList