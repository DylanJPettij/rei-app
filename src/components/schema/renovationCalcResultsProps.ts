import { type ReturnsModel } from "../returnsSchema";

// Define the type for the component's props
export interface RenovationCalcResultsProps {
  props: ReturnsModel;
  previousPage: () => void;
}
