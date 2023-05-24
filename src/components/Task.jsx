import React from "react";

import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const StyledTask = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  padding: 10px 0;
`;

const TaskLeftWrapper = styled.div`
  display: grid;
  align-items: center;
  padding: 0.5em;
`;

const TaskContentWrapper = styled.div`
  flex-grow: 1;
`;

const TaskTitle = styled.div`
  font-weight: bold;
`;

const TaskDescription = styled.div`
  max-width: 300px; /* Updated width */
  color: #777;
  margin-top: 5px;
  text-align: left;
`;

const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIconButton = styled.button`
  margin-right: 5px;
  cursor: pointer;
  color: #777;
  font-size: 18px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #bfbfbf;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

function Task(props) {
  const { title, description } = props;

  return (
    <StyledTask>
      <TaskLeftWrapper>
        <StyledFontAwesomeIcon icon={faCheck}></StyledFontAwesomeIcon>
      </TaskLeftWrapper>
      <TaskContentWrapper onClick={() => console.log("BOOM")}>
        <TaskHeader>
          <TaskTitle>{title}</TaskTitle>
          <StyledIconButton>
            <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
          </StyledIconButton>
        </TaskHeader>
        <TaskDescription>{description}</TaskDescription>
      </TaskContentWrapper>
    </StyledTask>
  );
}

export default Task;
