import { InputNumber } from "antd";
import React, { useState } from "react";

function Input({def, onChange}) {
  return <InputNumber min={1} defaultValue={def} onChange={onChange} />;
}

export default Input