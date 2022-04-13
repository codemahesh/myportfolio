import React from 'react'
import MainComponent from './common/MainComponent'
import { StyledProjectSection } from './ProjectSection.styled';
import ProjectCard from './common/PojectCard';
import SubHeading from './common/SubHeading';

function ProjectSection() {
  return (
    <StyledProjectSection id='project'>
        <MainComponent>
        <SubHeading heading={"PROJECTS"} description={"Here you will find some of the personal projects that I created with each project containing its own case study"}>
        </SubHeading>
        <ProjectCard/>
        </MainComponent>
    </StyledProjectSection>
  )
}

export default ProjectSection