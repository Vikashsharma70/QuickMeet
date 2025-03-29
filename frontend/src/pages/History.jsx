import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

import { IconButton } from "@mui/material";
export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);

  const [meetings, setMeetings] = useState([]);

  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        console.log("Fetched History:", history); // Debugging ke liye log karein
        setMeetings(Array.isArray(history) ? history : []); // Ensure history is always an array
      } catch (error) {
        console.error("Error fetching history:", error);
        setMeetings([]); // Agar error aaye to empty array set karein
      }
    };
    fetchHistory();
  }, []);

  let formateDate = (dateString)=>{
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2,'0');
    const month = (date.getMonth() +1).toString().padStart(2,'0');
    const year = date.getFullYear() ;

    return `${day}/${month}/${year}`
  }

  return (
    <div>
      <IconButton
        onClick={() => {
          routeTo("/home");
        }}
      >
        <HomeIcon />
      </IconButton>


      {meetings.length !== 0 ? (
        meetings.map((e, i) => {
          return (
            <>
              <Card key={i} variant="outlined">
              <CardContent>
      <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
        Code:{e.memtingCode}
      </Typography>

      
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
        Date: {formateDate(e.date)}
      </Typography>
      
    </CardContent>
              </Card>
            </>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
