import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getFormData } from "../../action/formAction";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import RecordItem from "./RecordItem";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const Record = ({ formdata: { formdata, loading }, getFormData }) => {
  //   const [formdata, setFormdata] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const getFormData = async () => {
  //     setLoading(true);
  //     const res = await fetch("Formdata");
  //     const data = await res.json();
  //     setFormdata(data);
  //     setLoading(false);
  //   };

  useEffect(() => {
    getFormData();
    //eslint-disable-next-line
  }, []);

  const classes = useStyles();
  if (loading || formdata === null) {
    <Preloader />;
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align='right'>Address</TableCell>
            <TableCell align='right'>Company</TableCell>
            <TableCell align='right'>Telephone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {formdata.map((data) => (
            <TableRow key={data.id}>
              <TableCell component='th' scope='row'>
                <span>{data.firstname} </span>
                {data.lastname}
              </TableCell>
              <TableCell align='right'>{data.address}</TableCell>
              <TableCell align='right'>{data.company}</TableCell>
              <TableCell align='right'>{data.telephonenumber}</TableCell>
            </TableRow>
          ))} */}

          {!loading && formdata === null
            ? null
            : formdata.map((data) => <RecordItem data={data} key={data.id} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

Record.propsTypes = {
  formdata: PropTypes.object.isRequired,
  getFormData: PropTypes.func.isRequired,
};
const mapStateProps = (state) => ({
  formdata: state.formdata,
});

export default connect(mapStateProps, { getFormData })(Record);
