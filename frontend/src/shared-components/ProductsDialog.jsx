import React from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from "@mui/material";
import { IconContext } from "react-icons";
import { IoIosClose } from "react-icons/io";

const styles = {
	dialogPaper: {
		minHeight: "80vh",
		maxHeight: "80vh",
	},
};

function ProductsDialog({ isOpen, onClose, title, children }) {
	return (
		<div>
			<Dialog
				open={isOpen}
				fullScreen
				onClose={onClose}
				// fullWidth
				// maxWidth="xl"
				PaperProps={{
					style: {
						backgroundColor: "transparent",
						boxShadow: "none",
					},
				}}
				BackdropProps={{ style: { backgroundColor: "#000000d9" } }}
				// sx={{ maxHeight: "100vh" }}
			>
				<DialogTitle id="alert-dialog-title" textAlign="end">
					<IconContext.Provider
						value={{ color: "#ffffffe3", className: "cancel_carousel" }}
					>
						<IoIosClose onClick={onClose} />
					</IconContext.Provider>
				</DialogTitle>
				<DialogContent>{children}</DialogContent>
			</Dialog>
		</div>
	);
}

export default ProductsDialog;
