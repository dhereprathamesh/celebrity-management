import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Celebrities from "../data/celebrities.json";
import DeleteDialog from "../components/DeleteDialog";
import { toast } from "react-hot-toast";
import SearchInput from "../components/SearchInput";
import CelebrityAccordion from "../components/CelebrityAccordion ";
import { calculateAge } from "../utils/calculateAge";

const CelebrityList = () => {
  const [users, setUsers] = useState([]);
  const [accordionOpen, setAccordionOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    setUsers(Celebrities);
  }, []);

  const handleAccordionToggle = (id) => {
    setAccordionOpen(accordionOpen === id ? null : id);
  };

  const handleEditClick = (id) => {
    const user = users.find((user) => user.id === id);
    const userAge = calculateAge(user.dob);

    if (userAge < 18) {
      toast.error("You must be 18 years or older to edit your information.");
      return;
    }

    if (isEditing === id) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, ...editData[id] } : user
        )
      );
      setIsEditing(null);
    } else {
      setIsEditing(id);
      setEditData({ ...editData, [id]: users.find((user) => user.id === id) });
    }
  };

  const handleInputChange = (id, e) => {
    const { name, value } = e.target;
    setEditData((prevEditData) => ({
      ...prevEditData,
      [id]: { ...prevEditData[id], [name]: value },
    }));
  };

  const handleCloseClick = (id) => {
    setIsEditing(null);
    setEditData((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  const handleDeleteClick = (userId) => {
    setUserToDelete(userId);
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirm = () => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== userToDelete)
    );
    setOpenDeleteDialog(false);
    setUserToDelete(null);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setUserToDelete(null);
  };

  const filteredUsers = users.filter((user) =>
    `${user.first} ${user.last}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <StyledDiv>
      <div className="box">
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div className="celebrities-list">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <CelebrityAccordion
                key={user.id}
                user={user}
                isEditing={isEditing}
                editData={editData}
                handleAccordionToggle={handleAccordionToggle}
                handleEditClick={handleEditClick}
                handleInputChange={handleInputChange}
                handleCloseClick={handleCloseClick}
                handleDeleteClick={handleDeleteClick}
                accordionOpen={accordionOpen}
              />
            ))
          ) : (
            <div>No user Found</div>
          )}
        </div>
      </div>

      <DeleteDialog
        open={openDeleteDialog}
        handleClose={handleCloseDeleteDialog}
        handleDelete={handleDeleteConfirm}
      />
    </StyledDiv>
  );
};

export default CelebrityList;

// Styled Components
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;

  .box {
    width: 60%;
    text-align: center;
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    height: 550px;
    overflow: scroll;
    padding-bottom: 15px;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }

  .celebrities-list {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px) {
      width: 94%;
      margin-top: 3px;
    }
  }
`;
