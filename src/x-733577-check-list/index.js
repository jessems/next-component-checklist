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
			/>
		</div>
	);
};

createCustomElement("x-733577-check-list", {
	renderer: { type: snabbdom },
	view,
	styles,
});
