import { Select } from "@chakra-ui/react";

export default function Filter({ size, icon }) {
  const containerClasses = `flex items-center justify-between bg-white border border-solid border-[#8F9695] rounded-lg p-3`;

  return (
    <div className={containerClasses}>
      {icon}
      <div>
        <Select placeholder="Select option" variant="unstyled">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
    </div>
  );
}
