import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import store from "../store/index";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SSRProvider>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</SSRProvider>
	);
}

export default MyApp;
