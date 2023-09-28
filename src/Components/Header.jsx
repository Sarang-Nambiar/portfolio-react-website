import { Divider } from "@mui/material";
export default function Header({ headerName }){
    return (
        <>
        <div className="header">{headerName}:</div>
        <Divider sx={{width:50}} className="mb-3 mx-auto bg-[#FFD700]"/>
        </>
    )
}