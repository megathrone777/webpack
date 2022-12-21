import { base, reset } from "./global";
import { createGlobalStyle } from "~/theme";

const GlobalStyle = createGlobalStyle`
	${reset}
	${base}
`;

export { GlobalStyle };
