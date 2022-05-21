import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { deleteForm } from "../../action/formAction";
import PropTypes from "prop-types";
const RecordItem = ({ data }) => {
  // const onDelete = () => {
  //   deleteForm(data.id);
  // };
  return (
    <>
      <TableRow>
        <TableCell component='th' scope='row'>
          <span>{data.firstname} </span>
          {data.lastname}
        </TableCell>
        <TableCell align='right'>{data.address}</TableCell>
        <TableCell align='right'>{data.company}</TableCell>
        <TableCell align='right'>{data.telephonenumber}</TableCell>
      </TableRow>
    </>
  );
};

RecordItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RecordItem;
