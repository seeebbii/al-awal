import React from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from "@mui/material";

function ProductsDialog({ isOpen, onClose, title, children }) {
	return (
		<div>
			<Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
				<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
				<DialogContent>{children}</DialogContent>
				<DialogActions>
					{/* {shouldRenderCancelButton ? (
            <>
              <Button onClick={onSave}>{saveButtonText}</Button>
              <Button onClick={onClose} autoFocus>
                {cancelButtonText}
              </Button>
            </>
          ) : (
            <Button onClick={onSave} autoFocus>
              {saveButtonText}
            </Button>
          )} */}
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default ProductsDialog;
