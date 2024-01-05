import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import logo from "../images/yt-logo-mobile.png";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
  direction="row"
  alignItems="center"
  p={2}
  sx={{
    position: "sticky",
    background: "#000",
    top: 0,
    justifyContent: "space-between",
    height: "60px",
  }}
>
  <Link to="/" style={{ display: "flex", alignItems: "center", overflow: "hidden" }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={30} /> 
      <p style={{ color: "red", fontSize: "30px", marginLeft: "2px", fontWeight: "bold" }}>TubeTrek</p>
    </div>
    <RiVideoAddLine style={{ color: "white", fontSize: "30px", marginLeft: "480px" }}/>
    <FiBell style={{ color: "white", fontSize: "30px", marginLeft: "15px" }}/>
  </Link>
  <SearchBar />
</Stack>

);

export default Navbar;