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
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Yup validation schema
const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.string().required("Age is required"),
  gender: Yup.string().required("Gender is required"),
  country: Yup.string().required("Country is required"),
  description: Yup.string().required("Description is required"),
});

const CelebrityAccordion = ({
  user,
  isEditing,
  handleAccordionToggle,
  handleEditClick,
  handleCloseClick,
  handleDeleteClick,
  accordionOpen,
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: `${user.first} ${user.last}`,
      gender: user.gender || "",
      country: user.country || "",
      description: user.description || "",
      age: calculateAge(user.dob) || "",
    },
  });

  const onSubmit = (data) => {
    handleEditClick(user.id, data);
  };

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
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Input
                {...field}
                disableUnderline
                disabled={isEditing !== user.id}
                className={`editable-input ${
                  isEditing === user.id ? "editable" : "disabled-input"
                }`}
                onClick={(e) => e.stopPropagation()}
                sx={{ color: "black", fontWeight: "bold", pl: 1 }}
              />
            )}
          />
          {errors.name && (
            <span className="error-msg">{errors.name.message}</span>
          )}
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
            <Controller
              control={control}
              name="age"
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Age"
                  disableUnderline
                  disabled={isEditing !== user.id}
                  className={`input ${isEditing === user.id ? "editable" : ""}`}
                  sx={{ pl: 1 }}
                />
              )}
            />
            {errors.gender && (
              <span className="error-msg">{errors.age.message}</span>
            )}
            {errors.name && (
              <span className="error-msg">{errors.age.message}</span>
            )}
          </LabelContainer>
          <LabelContainer>
            <span
              className={`label ${
                isEditing === user.id ? "editable-label" : ""
              }`}
            >
              Gender
            </span>
            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Gender"
                  disableUnderline
                  disabled={isEditing !== user.id}
                  className={`input ${isEditing === user.id ? "editable" : ""}`}
                  sx={{ pl: 1 }}
                />
              )}
            />
            {errors.gender && (
              <span className="error-msg">{errors.gender.message}</span>
            )}
          </LabelContainer>
          <LabelContainer>
            <span
              className={`label ${
                isEditing === user.id ? "editable-label" : ""
              }`}
            >
              Country
            </span>
            <Controller
              control={control}
              name="country"
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Country"
                  disableUnderline
                  disabled={isEditing !== user.id}
                  className={`input ${isEditing === user.id ? "editable" : ""}`}
                  sx={{ pl: 1 }}
                />
              )}
            />
            {errors.country && (
              <span className="error-msg">{errors.country.message}</span>
            )}
          </LabelContainer>
        </GridContainer>
        <LabelContainer>
          <span className="label">Description</span>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Description"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                className={`input ${isEditing === user.id ? "editable" : ""}`}
                disabled={isEditing !== user.id}
              />
            )}
          />
          {errors.description && (
            <span className="error-msg">{errors.description.message}</span>
          )}
        </LabelContainer>
        <div className="action-buttons">
          {isEditing === user.id ? (
            <>
              <IconButton onClick={handleSubmit(onSubmit)}>
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

  .error-msg {
    font-size: 11px;
    color: #ff0000;
    margin-left: 4px;
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
