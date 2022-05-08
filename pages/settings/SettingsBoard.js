import React from "react";
import { Container } from "react-bootstrap";
import { DatabaseSynchroniser } from "utils/databaseSynchroniser/DatabaseSynchroniser";
export default function SettingsBoard(props) {
    return (React.createElement(Container, null,
        React.createElement("button", { onClick: () => { DatabaseSynchroniser.synchroniseDatabase({ onSucess: () => { }, onFail: () => { } }); } }, "Synchronise Database")));
}
//# sourceMappingURL=SettingsBoard.js.map