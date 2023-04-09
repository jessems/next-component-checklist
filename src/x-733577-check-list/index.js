import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import "@servicenow/now-toggle";
import "@servicenow/now-button";

const view = (state, { updateProperties }) => {
	const {
		properties: { label, editing },
	} = state;

	const setEditing = (editing) => updateProperties({ editing });

	return (
		<div className="now-checklist-item">
			<span
				className="now-checklist-item-cell"
				on-dblclick={() => setEditing(true)}
			>
				{editing ? label + " (editing)" : label}
			</span>
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
	view,
	properties: {
		label: {
			default: "Enter a label",
		},
		editing: {
			default: false,
		},
	},
	renderer: { type: snabbdom },
	styles,
});
