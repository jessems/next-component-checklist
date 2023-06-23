import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import "@servicenow/now-toggle";
import "@servicenow/now-button";

const view = (state, { updateProperties }) => {
	const {
		properties: { label, editing, active },
	} = state;

	const setEditing = (editing) => updateProperties({ editing });

	const labelCell = (
		<span
			className="now-checklist-item-cell"
			on-dblclick={() => setEditing(true)}
		>
			{label}
		</span>
	);

	const inputCell = (
		<span className="now-checklist-item-cell" role="cell">
			<input
				className="now-checklist-item-input"
				value={label}
				hook-insert={(vnode) => vnode.elm.focus()}
				on-keydown={({ keyCode, target: { value: label } }) => {
					const newLabel = label.trim();
					if (keyCode === 13 && newLabel) {
						updateProperties({ label: newLabel });
						setEditing(false);
					} else if (keyCode === 27) {
						setEditing(false);
					}
				}}
				on-blur={() => setEditing(false)}
			/>
		</span>
	);

	return (
		<div className="now-checklist-item">
			<span className="now-checklist-item-cell -center" role="cell">
				<now-toggle checked={active} disabled={editing} />
			</span>
			{editing ? inputCell : labelCell}
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
		active: {
			default: false,
		},
	},
	renderer: { type: snabbdom },
	styles,
});
