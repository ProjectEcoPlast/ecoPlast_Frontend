import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

// function createData(serialno, name, phone, aadhar, bedId) {
//   return { serialno, name, phone, aadhar, bedId };
// }

const OtherType= () => {
  const [dash_list, setDash_list] = useState("");

  useEffect(() => {
    const data = {
      cookie_token: localStorage.getItem("token"),
    };
    axios
      .put(
        "http://localhost:8000//bed/hospital/bookingbeds/Special",
        data
      )
      .then((res) => {
        // console.log(res.data);
        setDash_list(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const deletecell = (val) => {
    console.log(`http://localhost:8000//bed/booking/${val}`);
    console.log(val);
    const url = `http://localhost:8000//bed/booking/${val}`;
    if (val) {
      axios
        .delete(url)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="General">
      <div className="outtable">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            className="dasshtab"
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>S.no.</TableCell>
                <TableCell align="right">Seller Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Amount per Kg</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dash_list &&
                dash_list.map((val, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell align="right">{val.patientName}</TableCell>
                    <TableCell align="right">{val.age}</TableCell>
                    <TableCell align="right">{val.Adhar}</TableCell>
                    <TableCell align="right">{val.email}</TableCell>
                    <TableCell align="right">{val.hospitalId}</TableCell>

                    <TableCell
                      className="ddlete"
                      onClick={() => deletecell(val._id)}
                      align="right"
                    >
                      {<DeleteSweepIcon />}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default OtherType;
