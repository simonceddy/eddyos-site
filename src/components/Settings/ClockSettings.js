import React from 'react';
import StyledSelect from '../../shared/components/Styled/StyledSelect';

function ClockSettings({
  format, hour12, set12HourTime, setFormat
}) {
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <span>
          Time format:
        </span>
        <StyledSelect
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="border-2 p-1"
        >
          <option label="00:00" value="hh-mm" />
          <option label="00:00:00" value="hh-mm-ss" />
        </StyledSelect>
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <span>
          Use 24-hour time:
        </span>
        <span>
          <input
            type="checkbox"
            checked={!hour12}
            onChange={() => set12HourTime(!hour12)}
          />
        </span>
      </div>
    </div>
  );
}

export default ClockSettings;
