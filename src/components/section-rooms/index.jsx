import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import { RoomWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [] } = props;
  return (
    <RoomWrapper className="room-list">
      {roomList.slice(0, 8)?.map((item) => {
        return <RoomItem key={item.id} itemData={item} />;
      })}
    </RoomWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
