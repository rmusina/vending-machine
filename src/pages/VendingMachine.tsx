import { TextField } from "@mui/material"
import { Box } from "@mui/system"
import { BalanceManagement } from "../components/BalanceManagement"
import { Products } from "../components/Products"

export const VendingMachine = () => {
    return (
        <Box>
            <TextField id="standard-basic" label="Rares Musina" variant="standard"/>
            <Products />
            <BalanceManagement />
        </Box>
    )
}