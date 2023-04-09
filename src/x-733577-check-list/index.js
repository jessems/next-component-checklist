import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import "@servicenow/now-toggle";
import "@servicenow/now-button";

const view = (state, { updateState }) => {
	return (
		<div className="now-checklist-item">
			Test
			<now-button-iconic
				icon="close-outline"
				tooltipContent="Delete"
				size="sm"
				variant="tertiary"
				appendToPayload={{ testKey: "testValue" }}
			/>
		</div>
	);
};

createCustomElement("x-733577-check-list", {
	actionHandlers: {
		"NOW_BUTTON_ICONIC#CLICKED": (e) => {
			console.log("I've been clicked");
			console.log(e);
		},
	},
	renderer: { type: snabbdom },
	view,
	styles,
});
