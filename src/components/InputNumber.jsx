import { InputNumber } from "antd";

function Input({def, onChange}) {
  return <InputNumber min={1} defaultValue={def} onChange={onChange} />;
}

export default Input