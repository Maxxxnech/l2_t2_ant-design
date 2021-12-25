import { InputNumber } from "antd";

export default function ({def, onChange}) {
  return <InputNumber min={1} defaultValue={def} onChange={onChange} />;
}
