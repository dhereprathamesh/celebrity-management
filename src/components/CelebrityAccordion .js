import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Input,
  TextField,
  IconButton,
} from "@mui/material";
import { ExpandMore, ExpandLess, Check, Close } from "@mui/icons-material";
import styled from "styled-components";
import { calculateAge } from "../utils/calculateAge";

const CelebrityAccordion = ({
  user,
  isEditing,
  editData,
  handleAccordionToggle,
  handleEditClick,
  handleInputChange,
  handleCloseClick,
  handleDeleteClick,
  accordionOpen,
}) => {
  return (
    <CustomAccordion expanded={accordionOpen === user.id}>
      <AccordionSummary
        onClick={() => handleAccordionToggle(user.id)}
        expandIcon={accordionOpen === user.id ? <ExpandLess /> : <ExpandMore />}
        classes={{ content: "accordionContent" }}
      >
        <div className="user-info">
          <img
            src={user.picture || ""}
            alt={user.name}
            width="50"
            height="50"
            className="user-image"
          />
          <Input
            defaultValue={`${user.first} ${user.last}`}
            onChange={(e) => handleInputChange(user.id, e)}
            name="name"
            disableUnderline
            disabled={isEditing !== user.id}
            className={`editable-input ${
              isEditing === user.id ? "editable" : "disabled-input"
            }`}
            onClick={(e) => e.stopPropagation()}
            sx={{ color: "black", fontWeight: "bold", pl: 1 }}
          />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <GridContainer>
          <LabelContainer>
            <span
              className={`label ${
                isEditing === user.id ? "editable-label" : ""
              }`}
            >
              Age
            </span>
            <Input
              placeholder="Age"
              defaultValue={calculateAge(user.dob)}
              disableUnderline
              disabled={isEditing !== user.id}
              className={`input ${isEditing === user.id ? "editable" : ""}`}
              sx={{ pl: 1 }}
            />
          </LabelContainer>
          <LabelContainer>
            <span
              className={`label ${
                isEditing === user.id ? "editable-label" : ""
              }`}
            >
              Gender
            </span>
            <Input
              placeholder="Gender"
              defaultValue={user.gender || ""}
              onChange={(e) => handleInputChange(user.id, e)}
              name="gender"
              disableUnderline
              disabled={isEditing !== user.id}
              className={`input ${isEditing === user.id ? "editable" : ""}`}
              sx={{ pl: 1 }}
            />
          </LabelContainer>
          <LabelContainer>
            <span
              className={`label ${
                isEditing === user.id ? "editable-label" : ""
              }`}
            >
              Country
            </span>
            <Input
              placeholder="Country"
              defaultValue={user.country || ""}
              onChange={(e) => handleInputChange(user.id, e)}
              name="country"
              disableUnderline
              disabled={isEditing !== user.id}
              className={`input ${isEditing === user.id ? "editable" : ""}`}
              sx={{ pl: 1 }}
            />
          </LabelContainer>
        </GridContainer>
        <LabelContainer>
          <span className="label">Description</span>
          <TextField
            placeholder="Description"
            defaultValue={user.description || ""}
            onChange={(e) => handleInputChange(user.id, e)}
            name="description"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            className={`input ${isEditing === user.id ? "editable" : ""}`}
            disabled={isEditing !== user.id}
          />
        </LabelContainer>
        <div className="action-buttons">
          {isEditing === user.id ? (
            <>
              <IconButton onClick={() => handleEditClick(user.id)}>
                <Check className="check-action-icon" />
              </IconButton>
              <IconButton onClick={() => handleCloseClick(user.id)}>
                <Close className="close-action-icon" />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton onClick={() => handleDeleteClick(user.id)}>
                <img
                  src="/images/trash.png"
                  alt="delete"
                  className="action-icon"
                />
              </IconButton>
              <IconButton onClick={() => handleEditClick(user.id)}>
                <img src="/images/pen.png" alt="edit" className="action-icon" />
              </IconButton>
            </>
          )}
        </div>
      </AccordionDetails>
    </CustomAccordion>
  );
};

export default CelebrityAccordion;

// Styled Components
const CustomAccordion = styled(Accordion)`
  border: 1px solid #c3bebe;
  box-shadow: none;
  border-bottom: none;
  border-radius: 10px !important;

  &:before {
    display: none;
  }

  &:last-child {
    border-bottom: 1px solid #c3bebe;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  .action-buttons {
    display: flex;
    justify-content: end;
    gap: 1%;
    margin-top: 2px;
  }

  .check-action-icon {
    width: 19px;
    height: 19px;
    border: 2px solid #42cf42;
    color: #42cf42;
    border-radius: 50%;
    padding: 2px;
  }

  .close-action-icon {
    width: 19px;
    height: 19px;
    border: 2px solid red;
    color: red;
    border-radius: 50%;
    padding: 2px;
  }

  .accordionContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .user-info {
    display: flex;
    align-items: center;
  }

  .user-image {
    border-radius: 50%;
    margin-right: 10px;
  }

  .action-icon {
    width: 20px;
    height: 20px;
  }

  .editable-input.editable,
  .input.editable {
    border: 1.5px solid #bfb7b7;
    border-radius: 10px;
  }

  .label {
    position: relative;
    right: 0%;
    bottom: 3px;
    color: #757474;
  }
  .disabled-input {
    font-weight: bold;
    color: black !important;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 5px;
`;
