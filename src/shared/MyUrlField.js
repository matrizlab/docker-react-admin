import * as React from "react";

const MyUrlField = ({ record = {}, source }) =>
    <a href={record[source]}>
        {record[source]}
    </a>;

export default MyUrlField;