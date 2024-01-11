import React from "react";
import ListItem from "./ListItem";
import { motion } from "framer-motion";

const List = ({ setListData, listData }) => {
  const handleClick = (index) => {
    const newListData = [...listData];
    newListData.splice(index, 1);
    setListData(newListData);
  };

  const listAnimation = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.ul
      id="todo"
      initial="hidden"
      animate="visible"
      variants={listAnimation}
    >
      {listData.map((item, index) => (
        <motion.div
          key={index}
          variants={itemAnimation}
        >
          <ListItem
            listData={listData}
            setListData={setListData}
            item={item}
            index={index}
            handleClick={handleClick}
          />
        </motion.div>
      ))}
    </motion.ul>
  );
};

export default List;
