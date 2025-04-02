import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro";

function DaysSearch() {
  return (
    <div className="mx-1 d-flex flex-column align-items-center justify-content-between">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateRangePicker"]}>
          <DateRangePicker localeText={{ start: "Outbound", end: "Inbound" }} />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}

export default DaysSearch;
