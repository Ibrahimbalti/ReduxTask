import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import PropTypes from "prop-types";
const RecordItem = ({
  formdata: { firstname, lastname, address, company, telephonenumber },
}) => {
  return (
    <>
      <TableRow>
        <TableCell component='th' scope='row'>
          <span>{firstname} </span>
          {lastname}
        </TableCell>
        <TableCell align='right'>{address}</TableCell>
        <TableCell align='right'>{company}</TableCell>
        <TableCell align='right'>{telephonenumber}</TableCell>
      </TableRow>
    </>
  );
};

RecordItem.propTypes = {
  formdata: PropTypes.object.isRequired,
};

export default RecordItem;
