import { Card, CardContent, Stack, Typography } from '@mui/material'
import Grid from "@mui/material/Grid2";
import React from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import SavingsIcon from '@mui/icons-material/Savings';

const MonthlySummary = () => {
  return (
    <Grid container spacing={{xs: 1, sm: 2}} mb={2}>
      {/* 収入 */}
      <Grid size={{xs:4}} display={"flex"} flexDirection={"column"}>
        <Card 
          sx={{
            bgcolor: (theme) => theme.palette.incomeColor.main, 
            color: "white", 
            borderRadius: "10px",
            flexGrow: 1,
          }}>
          <CardContent sx={{padding: {xs: 1, sm: 2}}}>
            <Stack direction={"row"}>
              <KeyboardDoubleArrowUpIcon sx={{ fontSize: "2rem" }} />
              <Typography >収入</Typography>
            </Stack>
            <Typography
            textAlign={"right"} 
            variant="h5" 
            fontWeight={"fontWeightBold"}
            sx={{
              wordBreak: "break-word", 
              fontSize: {xs: ".8rem", sm: "1rem", md: "1.2rem"},
            }}
            >¥300</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* 支出 */}
      <Grid size={{xs:4}} display={"flex"} flexDirection={"column"}>
        <Card sx={{
          bgcolor: (theme) => theme.palette.expenseColor.main, 
          color: "white", 
          borderRadius: "10px",
          flexGrow: 1,
        }}>
          <CardContent sx={{padding: {xs: 1, sm: 2}}}>
            <Stack direction={"row"}>
              <KeyboardDoubleArrowDownIcon sx={{ fontSize: "2rem" }} />
              <Typography >支出</Typography>
            </Stack>
            <Typography
            textAlign={"right"} 
            variant="h5" 
            fontWeight={"fontWeightBold"}
            sx={{
              wordBreak: "break-word", 
              fontSize: {xs: ".8rem", sm: "1rem", md: "1.2rem"},
            }}
            >¥300</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* 残高 */}
      <Grid size={{xs:4}} display={"flex"} flexDirection={"column"}>
        <Card sx={{
          bgcolor: (theme) => theme
          .palette.balanceColor.main, 
          color: "white", 
          borderRadius: "10px",
          flexGrow: 1,
        }}>
          <CardContent sx={{padding: {xs: 1, sm: 2}}}>
            <Stack direction={"row"}>
              <SavingsIcon sx={{ fontSize: "2rem" }} />
              <Typography >残高</Typography>
            </Stack>
            <Typography
            textAlign={"right"} 
            variant="h5" 
            fontWeight={"fontWeightBold"}
            sx={{
              wordBreak: "break-word", 
              fontSize: {xs: ".8rem", sm: "1rem", md: "1.2rem"},
            }}
            >¥300</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default MonthlySummary