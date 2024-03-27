import React, { useState } from "react";
import ShowBanner from "../Showbanner/ShowBanner";
import {
  useGetBannerQuery,
  useUplodeBannerMutation,
} from "../../feature/RTKbanner";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function DashBoardBanner() {
  const [file, setFile] = useState(null);
  const { refetch } = useGetBannerQuery();
  const [uplodeBanner] = useUplodeBannerMutation();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleOnChang = (e) => {
    setFile(e.target.files[0]);
  };
  const handleFileUplode = async () => {
    setOpen(true);
    const fromData = new FormData();
    fromData.append("banner", file);
    await uplodeBanner(fromData);
    await refetch();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: "60px",
  };

  return (
    <div className="w-[100%] h-auto flex flex-row flex-wrap">
      <div className="lg:w-[50%] flex flex-wrap flex-col items-center shadow-lg">
        <h1 className="text-wrap font-bold text-black lg:text-[50px] text-[30px] lg:mt-[40px] mt-[120px] mb-[80px]">
          Add Banner Details
        </h1>
        <div className="w-[100%]  flex flex-wrap justify-evenly items-center gap-[40px] m-[10px] my-[60px]">
          <label className="text-wrap text-black text-xl font-medium ">
            Add Banner Image :
          </label>
          <input type="file" name="banner" onChange={handleOnChang} />
          <button
            onClick={handleFileUplode}
            className="text-white bg-green-700 w-[150px] h-[50px] justify-center items-center rounded"
          >
            Add
          </button>
        </div>
      </div>

      <div className="w-[100%] lg:w-[50%] p-[60px] flex flex-wrap flex-col justify-center items-center ">
        <ShowBanner />
      </div>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              sx={{ color: "#00FF00", fontSize: "22px", fontWeight: "700" }}
              variant="h6"
              component="h2"
            >
              Successfull
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Banner added
            </Typography>
          </Box>
        </Modal>
    </div>
  );
}

export default DashBoardBanner;
